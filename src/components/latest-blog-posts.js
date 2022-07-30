import React, { useState } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { css } from "@emotion/react"
import IntersectionObserver from "@researchgate/react-intersection-observer"

import { Section, SectionBody, AutoFitGrid } from "../styles/Containers"
import { SectionHeading } from "../styles/Headings"
import { transitionTiming } from "../styles/theme"
import PostPreview from "../components/post-preview"
import Button from "../styles/Buttons"
import settings from "../config/settings"
import { appearanceObserverOpts } from "../utils"

const LatestBlogPosts = ({ handleIntersection }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___datePublished], order: DESC }
      ) {
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
  `)

  const initialPostAppearance = data.allMarkdownRemark.edges.reduce(
    (obj, { node }) => ({ ...obj, [node.fields.slug]: false }),
    {}
  )
  const [hasPostAppeared, setPostAppeared] = useState(initialPostAppearance)
  const [hasHeaderAppeared, setHeaderAppeared] = useState(false)

  const postObserverOpts = (k) => ({
    onChange: ({ isIntersecting }) => {
      if (isIntersecting) {
        setPostAppeared({ ...hasPostAppeared, [k]: true })
      }
    },
    threshold: 0.4,
  })

  const sectionObserverOpts = {
    onChange: ({ time, isIntersecting, intersectionRatio }) => {
      handleIntersection({
        latestBlogPosts: { time, isIntersecting, intersectionRatio },
      })
    },
    threshold: settings.intersectionObserverThreshold,
  }

  return (
    <IntersectionObserver {...sectionObserverOpts}>
      <Section id="latestBlogPosts">
        <IntersectionObserver {...appearanceObserverOpts(setHeaderAppeared, 0)}>
          <span>
            <SectionHeading hasNotAppeared={!hasHeaderAppeared}>
              Latest Blog Posts
            </SectionHeading>
          </span>
        </IntersectionObserver>

        <SectionBody>
          <AutoFitGrid>
            {data.allMarkdownRemark.edges.map(({ node }, index) => {
              const slug = node.fields.slug
              return (
                <IntersectionObserver key={slug} {...postObserverOpts(slug)}>
                  <div
                    css={css`
                      opacity: ${hasPostAppeared[slug] ? `1` : `0`};
                      transform: ${hasPostAppeared[slug]
                        ? `translateY(0px)`
                        : `translateY(40px)`};
                      transition: opacity 300ms ${transitionTiming},
                        transform 300ms ${transitionTiming};
                      transition-delay: 200ms;
                    `}
                  >
                    <PostPreview key={index} data={node} />
                  </div>
                </IntersectionObserver>
              )
            })}
          </AutoFitGrid>
          <Button
            onClick={() => navigate("/blog")}
            css={css`
              margin: 42px auto 0;
            `}
          >
            View More
          </Button>
        </SectionBody>
      </Section>
    </IntersectionObserver>
  )
}

export default LatestBlogPosts
