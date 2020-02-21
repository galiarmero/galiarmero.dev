import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Section } from "../styles/Containers"
import { SectionHeading } from "../styles/Headings"


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
        <SectionHeading>Recent Blog Posts</SectionHeading>
  
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