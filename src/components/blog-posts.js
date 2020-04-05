import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import IntersectionObserver from "@researchgate/react-intersection-observer"
import dayjs from "dayjs"
import { Section } from "../styles/Containers"
import Heading, { SectionHeading } from "../styles/Headings"

import settings from "../config/settings"


export default ({ handleIntersection }) => {
  const onChange = ({ time, isIntersecting, intersectionRatio }) => {
    handleIntersection({
      blogPosts: { time, isIntersecting, intersectionRatio },
    })
  }
  const options = {
    onChange: onChange,
    threshold: settings.intersectionObserverThreshold,
  };

  return (
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
        <IntersectionObserver {...options}>
          <Section>
            <SectionHeading>Recent Blog Posts</SectionHeading>

            <div css={css`
              display: flex;
              flex-direction: column;
              justify-contents: space-between;
            `}>
              {data.allMarkdownRemark.edges.map(({ node }, index) => {
                return (
                  <article key={index} css={css`
                    margin: 10px 0;
                    background: #071d2d;
                    border-radius: 4px;
                    padding: 25px;
                  `}>
                    <Heading><a href={node.fields.slug}>{node.frontmatter.title}</a></Heading>
                    <h6>{dayjs(node.frontmatter.datePublished).format('MMMM DD, YYYY')} · {node.timeToRead} min read</h6>
                    <p css={css`margin-top: 30px;`}>{node.frontmatter.teaser}</p>
                  </article>
                )
              })}
            </div>
          </Section>
        </IntersectionObserver>
      )}
    />
  )
}