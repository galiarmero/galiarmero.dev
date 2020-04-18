import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import IntersectionObserver from "@researchgate/react-intersection-observer"
import dayjs from "dayjs"
import { Section } from "../styles/Containers"
import Heading, { SectionHeading } from "../styles/Headings"
import IconEyeglasses from "../../static/icons/circular-eyeglasses.svg"
import IconRightArrow from "../../static/icons/right-arrow.svg"

import settings from "../config/settings"


export default ({ handleIntersection }) => {
  const [hasHeaderAppeared, setHeaderAppeared] = useState(false)

  const sectionObserverOpts = {
    onChange: ({ time, isIntersecting, intersectionRatio }) => {
      handleIntersection({
        blogPosts: { time, isIntersecting, intersectionRatio },
      })
    },
    threshold: settings.intersectionObserverThreshold,
  }

  const headerObserverOpts = {
    onChange: ({ isIntersecting }) => {
      if (isIntersecting) {
        setHeaderAppeared(true)
      }
    },
  }

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
        <IntersectionObserver {...sectionObserverOpts}>
          <Section>
            <IntersectionObserver {...headerObserverOpts }>
              <span>
                <SectionHeading hasNotAppeared={!hasHeaderAppeared}>Recent Blog Posts</SectionHeading>
              </span>
            </IntersectionObserver>

            <div css={css`
              display: flex;
              flex-direction: column;
              justify-contents: space-between;
            `}>
              {data.allMarkdownRemark.edges.map(({ node }, index) => {
                return (
                  <article key={index} css={css`
                    margin: 12px 0;
                    background: var(--lighterBgColor);
                    border-radius: 4px;
                    padding: 32px 25px;
                    box-shadow: 0px 8px 11px -6px var(--boxShadowColor);
                  `}>
                    <Heading><a href={node.fields.slug}>{node.frontmatter.title}</a></Heading>
                    <span css={css`
                      font-size: 0.7rem;
                    `}>
                      <span css={css`margin-right: 15px;`}>
                        {dayjs(node.frontmatter.datePublished).format('DD MMMM YYYY')}
                      </span>
                      <IconEyeglasses css={css`
                        position: relative;
                        top: 0.3rem;
                        font-size: 1.1rem;
                        margin-right: 5px;
                      `} />{node.timeToRead} min
                    </span>
                    <p css={css`margin: 30px 0;`}>{node.frontmatter.teaser}</p>

                    <Link css={css`
                      font-family: 'JetBrainsMono-Bold';
                      text-transform: uppercase;
                      font-size: 0.8rem;
                      letter-spacing: 0.12rem;
                      vertical-align: middle;
                      &:hover {
                        opacity: 0.8;
                      }
                    `} to={node.fields.slug}>
                      read
                      <IconRightArrow css={css`
                        margin: 0 5px 0 10px;
                        font-size: 1rem;
                        position: relative;
                        top: 0.4rem;
                      `}/>
                    </Link>
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