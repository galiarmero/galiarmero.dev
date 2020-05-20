const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

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
      name: 'editUrl',
      node,
      value: `https://github.com/galiarmero/galiarmero.dev/edit/master${node.fileAbsolutePath.replace(
        __dirname.replace(/\\/g, '/'),
        ''
      )}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query loadBlogPostSlugs {
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
  `).then(result => {
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

      createPage({
        path: node.fields.slug.replace('/blog', '/cards'),
        component: path.resolve(`./src/templates/sharing-card.js`),
        context: {
          slug: node.fields.slug,
          width: 800,
          height: 400,
        },
      })
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