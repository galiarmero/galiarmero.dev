import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Section } from "../styles/Containers"


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
      <Section>
        <h1>Recent Blog Posts</h1>
  
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          return (
            <article key={index}>
              <h1>{node.frontmatter.title}</h1>
              <h6>{node.frontmatter.datePublished}</h6>
              <p>{node.frontmatter.teaser}</p>
            </article>
          )
        })}
      </Section>
    )}
  />
)