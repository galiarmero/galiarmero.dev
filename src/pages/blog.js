import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    // TODO: Use /blog as path prefix
    return (
        <Layout>
            <h1>Blog</h1>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
                <div key={index}>
                  <a href={node.fields.slug}>
                    <h1>{node.frontmatter.title}</h1>
                  </a>
                  <h5>{node.frontmatter.datePublished}</h5>

                  <p>
                    {node.frontmatter.teaser}
                  </p>
                </div>
            ))}
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___datePublished], order: DESC }) {
      edges {
        node {
          frontmatter {
            teaser
            datePublished
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`