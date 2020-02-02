import React from "react"
import { StaticQuery, graphql } from "gatsby"


export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___datePublished], order: DESC }) {
          edges {
            node {
              frontmatter {
                datePublished
                teaser
                title
              }
              timeToRead
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section>
        <h1>Recent Blog Posts</h1>
  
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          return (
            <article key={index}>
              <h6>{node.frontmatter.datePublished}</h6>
              <h1>{node.frontmatter.title}</h1>
              <p>{node.frontmatter.teaser}</p>
            </article>
          )
        })}
      </section>
    )}
  />
)