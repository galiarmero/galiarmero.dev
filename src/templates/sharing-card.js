import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import GlobalStyles from "../styles/GlobalStyles"
import { indexMeta } from "../config/site-meta.yml"
import Logo from "../../static/icons/logo.svg"
import IconEyeglasses from "../../static/icons/circular-eyeglasses.svg"

const Card = styled.div`
  width: ${props => props.width || 1200}px;
  height: ${props => props.height || 600}px;
  background: var(--bgColor);
  border-top: 15px solid var(--accentColor);
  padding: 70px 120px 70px;
`

const Title = styled.h1`
  font-size: 3.8rem;
`

const Teaser = styled.p`
  font-size: 1.5rem;
  width: 90%;
  margin-top: 25px;
`

const PostDetails = styled.span`
  font-family: 'ClearSans-Light', sans-serif;
`

const iconStyle = css`
  position: relative;
  top: 0.6rem;
  font-size: 2rem;
  margin-right: 10px;
  color: var(--accentColor);
  stroke-width: 2px;
`

export default({ data, pageContext }) => {
  const post = data.markdownRemark
  const {
    width,
    height,
  } = pageContext

  return (
    <div>
      <GlobalStyles bgColor={`#fff`} />
      <Card>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: start;
            flex-direction: column;
            height: 100%;
          `}
        >
          <div
            css={css`
              padding-left: 12px;
            `}
          >
            <Title>{post.frontmatter.title}</Title>
            <PostDetails>
              <IconEyeglasses css={iconStyle} />
              {post.timeToRead} min read
            </PostDetails>
            <Teaser>{post.frontmatter.teaser}</Teaser>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: flex-start;
              align-items: center;
            `}
          >
            <Logo
              css={css`
                height: 56px;
                width: 56px;
              `}
            />
            <span
              css={css`
                font-size: 1.4rem;
                color: var(--headingColor);
                letter-spacing: 0.5px;
                margin-left: 10px;
              `}
            >{indexMeta.siteDomain}</span>
          </div>
        </div>
      </Card>
    </div>
  )
}


export const query = graphql`
  query BlogPostShareCard($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        teaser
        datePublished
        title
      }

      fields {
        slug
      }

      timeToRead
    }
  }
`