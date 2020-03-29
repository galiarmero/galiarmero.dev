import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import VizSensor from "react-visibility-sensor"
import dayjs from "dayjs"
import { Section } from "../styles/Containers"
import Heading, { SectionHeading } from "../styles/Headings"


export default ({ onChangeVisiblity }) => (
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
        <VizSensor onChange={onChangeVisiblity}>
          <SectionHeading>Recent Blog Posts</SectionHeading>
        </VizSensor>
  
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          return (
            <article key={index} css={css`margin: 25px 0;`}>
              <Heading><a href={node.fields.slug}>{node.frontmatter.title}</a></Heading>
              <h6>{dayjs(node.frontmatter.datePublished).format('MMMM DD, YYYY')} · {node.timeToRead} min read</h6>
              <p css={css`margin: 18px 0;`}>{node.frontmatter.teaser}</p>

              {(index < data.allMarkdownRemark.edges.length - 1) &&
                <hr />
              }
            </article>
          )
        })}
      </Section>
    )}
  />
)