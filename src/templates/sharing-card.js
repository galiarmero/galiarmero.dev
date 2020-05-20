import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import GlobalStyles from "../styles/GlobalStyles"
import { indexMeta } from "../config/site-meta.yml"
import Logo from "../../static/icons/logo.svg"
import IconEyeglasses from "../../static/icons/circular-eyeglasses.svg"

const Card = styled.div`
  width: ${props => props.width || 800}px;
  height: ${props => props.height || 400}px;
  background: var(--bgColor);
  border-top: 15px solid var(--accentColor);
  padding: 45px 70px 45px;
`

const CardMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  height: 100%;
`

const CardBody = styled.div`
  padding-left: 8px;
`

const CardFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Title = styled.h1`
  font-size: 2.3rem;
`

const Teaser = styled.p`
  font-size: 1.1rem;
  width: 90%;
  margin-top: 1rem;
`

const PostDetails = styled.span`
  font-family: 'ClearSans-Light', sans-serif;
  font-size: 0.9rem;
`

const SiteDomain = styled.span`
  font-size: 1rem;
  color: var(--headingColor);
  letter-spacing: 0.5px;
  margin-left: 10px;
`

const iconStyle = css`
  position: relative;
  top: -0.05rem;
  font-size: 1.6rem;
  margin-right: 10px;
  color: var(--accentColor);
  stroke-width: 2px;
  vertical-align: middle;
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
      <Card width={width} height={height}>
        <CardMain>
          <CardBody>
            <Title>{post.frontmatter.title}</Title>
            <PostDetails>
              <IconEyeglasses css={iconStyle} />
              {post.timeToRead} min read
            </PostDetails>
            <Teaser>{post.frontmatter.teaser}</Teaser>
          </CardBody>
          <CardFooter>
            <Logo
              css={css`
                height: 36px;
                width: 36px;
              `}
            />
            <SiteDomain>{indexMeta.siteDomain}</SiteDomain>
          </CardFooter>
        </CardMain>
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