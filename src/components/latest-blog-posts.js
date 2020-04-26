import React, { useState } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { css } from "@emotion/core"
import IntersectionObserver from "@researchgate/react-intersection-observer"

import { Section } from "../styles/Containers"
import { SectionHeading } from "../styles/Headings"
import PostPreview from "../components/post-preview"
import Button from "../styles/Buttons"
import settings from "../config/settings"
import { appearanceObserverOpts } from "../utils"


export default ({ handleIntersection }) => {
  const data = useStaticQuery(graphql`
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
  `)

  let initialPostAppearance = {}
  data.allMarkdownRemark.edges.forEach(({ node }) => initialPostAppearance = {...initialPostAppearance, [node.fields.slug]: false })
  const [hasPostAppeared, setPostAppeared] = useState(initialPostAppearance)
  const [hasHeaderAppeared, setHeaderAppeared] = useState(false)


  const postObserverOpts = (k) => (
    {
      onChange: ({ isIntersecting }) => {
        if (isIntersecting) {
          setPostAppeared({...hasPostAppeared, [k]: true})
        }
      },
      threshold: 0.4,
    }
  )

  const sectionObserverOpts = {
    onChange: ({ time, isIntersecting, intersectionRatio }) => {
      handleIntersection({
        blogPosts: { time, isIntersecting, intersectionRatio },
      })
    },
    threshold: settings.intersectionObserverThreshold,
  }

  return (
    <IntersectionObserver {...sectionObserverOpts}>
      <Section>
        <IntersectionObserver {...appearanceObserverOpts(setHeaderAppeared, 0)}>
          <span>
            <SectionHeading hasNotAppeared={!hasHeaderAppeared}>Latest Blog Posts</SectionHeading>
          </span>
        </IntersectionObserver>

        <div css={css`
          display: flex;
          flex-direction: column;
          justify-contents: space-between;
        `}>
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            const slug = node.fields.slug
            return (
              <IntersectionObserver key={slug} {...postObserverOpts(slug)}>
                <div css={css`
                  opacity: ${hasPostAppeared[slug] ? `1` : `0`};
                  transform: ${hasPostAppeared[slug] ? `translateY(0px)` : `translateY(40px)`};
                  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
                  transition-delay: 200ms;
                `}>
                  <PostPreview key={index} data={node} />
                </div>
              </IntersectionObserver>
            )
          })}
          <Button onClick={() => navigate("/blog")}
            css={css`margin-top: 24px`}>
              View More
          </Button>
        </div>
      </Section>
    </IntersectionObserver>
  )
}
