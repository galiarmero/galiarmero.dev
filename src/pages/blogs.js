import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    return (
        <Layout>
            <h1>Blog</h1>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
                <div key={index}>
                  <h1>{node.frontmatter.title}</h1>
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
  allMarkdownRemark {
    edges {
      node {
        timeToRead
        fileAbsolutePath
        frontmatter {
          teaser
          datePublished
          title
        }
      }
    }
  }
}
`