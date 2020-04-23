import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Helmet } from "react-helmet"
import { FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa"
import {TwitterShareButton, FacebookShareButton, LinkedinShareButton } from "react-share"

import Header from "../components/header"
import GlobalStyles from "../styles/GlobalStyles"
import BlogStyles from "../styles/BlogStyles"
import { colors } from "../styles/theme"
import { formatDate } from "../utils"
import IconEyeglasses from "../../static/icons/circular-eyeglasses.svg"

const FooterBox = styled.div`
  padding: 0.7rem 0;
  display: flex;
  flex-direction: column;
  align-content: left;
`

const FooterBoxTitle = styled.span`
  font-weight: 400;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
`

export default({ data }) => {
  const headerHeight = 75
  const post = data.markdownRemark

  const url = `https://galiarmero.dev${post.fields.slug}`
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(url)}`
  const postTitle = post.frontmatter.title

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{postTitle} &middot; Gali Armero</title>

        <meta name="theme-color" content={colors.bg} />
        <meta name="msapplication-navbutton-color" content={colors.bg} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>
      <GlobalStyles />
      <BlogStyles />
      <Header height={headerHeight} navBackground={colors.lighterBg} logoSuffix="blog" />
      <main css={css`
        margin-top: ${headerHeight + 35}px;
        padding: 0 25px;
        overflow-x: hidden;
      `}>
        <h1>{post.frontmatter.title}</h1>
        <span css={css`
          font-size: 0.7rem;
        `}>
          <span css={css`margin-right: 15px;`}>
            {formatDate(post.frontmatter.datePublished)}
          </span>
          <IconEyeglasses css={css`
            position: relative;
            top: 0.3rem;
            font-size: 1.1rem;
            margin-right: 5px;
          `} />{post.timeToRead} min
        </span>

        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          css={css`
            margin: 80px 0;
          `}
        >
        </div>

        <div>
          <FooterBox>
            <FooterBoxTitle>
              Share this post
            </FooterBoxTitle>
            <div css={css`
              font-size: 1.5rem;
              margin-top: 0.3rem;
            `}>
              <TwitterShareButton
                url={url}
                title={postTitle}
                via={"galiarmero"}
              >
                <FaTwitter css={css`margin-right: 12px;`} />
              </TwitterShareButton>

              { /* TODO: Fix not working share button */}
              <LinkedinShareButton
                url={url}
                title={postTitle}
                summary={post.frontmatter.teaser}
                source={"Gali Armero"}
              >
                <FaLinkedin css={css`margin-right: 12px;`} />
              </LinkedinShareButton>

              <FacebookShareButton
                url={url}
              >
                <FaFacebookSquare />
              </FacebookShareButton>
            </div>
          </FooterBox>

          <hr />

          <FooterBox>
            <FooterBoxTitle>
              Contribute to the discussion
            </FooterBoxTitle>
            <div css={css`
              font-size: 0.9rem;
              margin-top: 0.3rem;
            `}>
              <a target="_blank" href={discussUrl}>Discuss on Twitter</a>
              &nbsp;&middot;&nbsp;
              <a target="_blank" href={post.fields.editLink}>Edit on GitHub</a>
            </div>
          </FooterBox>
        </div>
      </main>
    </div>
  )
}


export const query = graphql`
  query loadBlogPost ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        teaser
        datePublished
        title
      }

      fields {
        slug
        editLink
      }

      html
      timeToRead
    }
  }
`