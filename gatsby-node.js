const path = require(`path`)
const axios = require('axios')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { createNode } = actions

  const {
    NENOY_API_BASE_URL,
    NENOY_API_USER,
    NENOY_API_PASS,
    PUZZLE_SCORES_PER_PAGE,
  } = process.env

  const nenoyApi = axios.create({
      baseURL: NENOY_API_BASE_URL,
      auth: {
        username: NENOY_API_USER,
        password: NENOY_API_PASS,
      },
      timeout: 2000,
  })

  console.log(`Fetching puzzle scores from Nenoy API, ${PUZZLE_SCORES_PER_PAGE} at a time`)
  let startAt
  while (true) {
    let url = `/puzzle-scores?limit=${PUZZLE_SCORES_PER_PAGE}` + (startAt ? `&startAt=${startAt}` : '')
    let response
    try {
      response = await nenoyApi.get(url)
    } catch (e) {
      console.error(e)
      throw e
    }
    console.log(`Got ${response.data.puzzleScores.length} records with startAt=${startAt}`)

    response.data.puzzleScores.forEach((item) => {
      createNode({
        ...item,
        internal: {
          type: 'PuzzleScores',
          contentDigest: createContentDigest(item)
        }
      })
    })

    startAt = response.headers['x-next-page-start-id']

    if (startAt == 'null' || !startAt) {
      hasNextPage = false
      console.log('No more records left')
      break
    }
  }

}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    if (!node.fileAbsolutePath.includes('content/')) {
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
      name: 'editUrl',
      value: `https://github.com/galiarmero/galiarmero.dev/edit/main${node.fileAbsolutePath.replace(
        __dirname.replace(/\\/g, '/'),
        ''
      )}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPages(graphql, actions)
  // await createPuzzleScorePages(graphql, actions)
}

const createBlogPages = async (graphql, actions) => {
  const { createPage } = actions

  const result = await graphql(`
    query loadBlogPostIdentifiers {
      allMarkdownRemark {
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
        previousPost: index === 0 ? null : posts[index - 1].node,
        nextPost: index === (posts.length - 1) ? null : posts[index + 1].node,
      },
    })

    if (process.env.NODE_ENV === 'development') {
      createPage({
        path: node.fields.slug.replace('/blog', '/cards'),
        component: path.resolve(`./src/templates/sharing-card-blog.js`),
        context: {
          slug: node.fields.slug,
          width: 1200,
          height: 628,
        },
      })
    }
  })

  if (process.env.NODE_ENV === 'development') {
    createPage({
      path: '/cards',
      component: path.resolve(`./src/templates/sharing-card.js`),
    })
  }
}

const createPuzzleScorePages = async (graphql, actions) => {
  const { createPage } = actions

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

  result.data.allPuzzleScores.distinct.forEach((date, index) => {
    const slug = `/daily-puzzles/${date}`
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/daily-puzzle.js`),
      context: {
        slug: slug,
        date: date,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          use: 'yaml-loader'
        },
      ],
    },
  });
}
