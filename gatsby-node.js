const path = require(`path`)
const axios = require("axios")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { createNode } = actions

  const {
    NENOY_API_BASE_URL,
    NENOY_API_USER,
    NENOY_API_PASS,
    NENOY_API_TIMEOUT,
    PUZZLE_SCORES_PER_PAGE,
  } = process.env

  const nenoyApi = axios.create({
    baseURL: NENOY_API_BASE_URL,
    auth: {
      username: NENOY_API_USER,
      password: NENOY_API_PASS,
    },
    timeout: NENOY_API_TIMEOUT,
  })

  console.log(
    `Fetching puzzle scores from Nenoy API, ${PUZZLE_SCORES_PER_PAGE} at a time`
  )
  let startAt
  while (true) {
    let url =
      `/puzzle-scores?limit=${PUZZLE_SCORES_PER_PAGE}` +
      (startAt ? `&startAt=${startAt}` : "")
    let response
    try {
      response = await nenoyApi.get(url)
    } catch (e) {
      console.error(e)
      throw e
    }
    console.log(
      `Got ${response.data.puzzleScores.length} records with startAt=${startAt}`
    )

    response.data.puzzleScores.forEach((item) => {
      createNode({
        ...item,
        internal: {
          type: "PuzzleScores",
          contentDigest: createContentDigest(item),
        },
      })
    })

    startAt = response.headers["x-next-page-start-id"]

    if (startAt == "null" || !startAt) {
      hasNextPage = false
      console.log("No more records left")
      break
    }
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    if (!node.fileAbsolutePath.includes("content/")) {
      throw Exception("Markdowns expected to be in content/")
    }

    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      node,
      name: "editUrl",
      value: `https://github.com/galiarmero/galiarmero.dev/edit/main${node.fileAbsolutePath.replace(
        __dirname.replace(/\\/g, "/"),
        ""
      )}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPages(graphql, actions)
  await createPuzzleScorePages(graphql, actions)
}

const createBlogPages = async (graphql, actions) => {
  const { createPage } = actions

  const result = await graphql(`
    query loadBlogPostIdentifiers {
      allMarkdownRemark(sort: { fields: frontmatter___datePublished }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
        previousPost: index > 0 ? posts[index - 1].node : null,
        nextPost: index < posts.length - 1 ? posts[index + 1].node : null,
      },
    })

    if (process.env.NODE_ENV === "development") {
      createPage({
        path: node.fields.slug.replace("/blog", "/cards"),
        component: path.resolve(`./src/templates/sharing-card-blog.js`),
        context: {
          slug: node.fields.slug,
          width: 1200,
          height: 628,
        },
      })
    }
  })

  if (process.env.NODE_ENV === "development") {
    createPage({
      path: "/cards",
      component: path.resolve(`./src/templates/sharing-card.js`),
    })
  }
}

const createPuzzleScorePages = async (graphql, actions) => {
  const { createPage, createRedirect } = actions
  const PUZZLES_PATH = "/puzzle-scores"

  const result = await graphql(`
    query loadPuzzleScoreDatesPlayed {
      allPuzzleScores {
        distinct(field: datePlayed)
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const sortedDates = result.data.allPuzzleScores.distinct.sort(
    (a, b) => new Date(b) - new Date(a)
  )
  sortedDates.forEach((date, index) => {
    const slug = `${PUZZLES_PATH}/${date}`
    const prevDate =
      index < sortedDates.length - 1 ? sortedDates[index + 1] : null
    const nextDate = index > 0 ? sortedDates[index - 1] : null
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/puzzle-scores.js`),
      context: {
        slug,
        date,
        prevDate,
        nextDate,
        prevSlug: prevDate ? `${PUZZLES_PATH}/${prevDate}` : null,
        nextSlug: nextDate ? `${PUZZLES_PATH}/${nextDate}` : null,
      },
    })
  })

  if (sortedDates.length > 0) {
    createRedirect({
      fromPath: PUZZLES_PATH,
      toPath: `${PUZZLES_PATH}/${sortedDates[0]}`,
      redirectInBrowser: true,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          use: "yaml-loader",
        },
      ],
    },
  })
}
