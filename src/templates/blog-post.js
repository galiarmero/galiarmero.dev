import React, { useState } from "react"
import { graphql } from "gatsby"
import { css } from '@emotion/core'
import { Helmet } from "react-helmet"
import dayjs from "dayjs"

import Header from "../components/header"
import GlobalStyles from "../styles/GlobalStyles"
import { colors } from '../styles/theme'
import IconEyeglasses from "../../static/icons/circular-eyeglasses.svg"

export default({ data }) => {
  const [isMenuOpen, toggleMenu] = useState(false)
  const headerHeight = 75
  const post = data.markdownRemark
  // TODO: Fix images not loading
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.frontmatter.title} — Gali Armero / Blog</title>

        <meta name="theme-color" content={colors.bg} />
        <meta name="msapplication-navbutton-color" content={colors.bg} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>
      <GlobalStyles />
      <Header height={headerHeight} isMenuOpen={isMenuOpen} onToggleMenu={() => toggleMenu(!isMenuOpen)} navBackground={colors.lighterBg} />
      <main css={css`
        margin-top: ${headerHeight + 35}px;
        padding: 0 25px;
      `}>
        <h1>{post.frontmatter.title}</h1>
        <span css={css`
          font-size: 0.7rem;
        `}>
          <span css={css`margin-right: 15px;`}>
            {dayjs(post.frontmatter.datePublished).format('DD MMMM YYYY')}
          </span>
          <IconEyeglasses css={css`
            position: relative;
            top: 0.3rem;
            font-size: 1.1rem;
            margin-right: 5px;
          `} />{post.timeToRead} min
        </span>

        <div css={css`
          margin-top: 80px;
        `}
          dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </main>
    </div>
  )
}


export const query = graphql`
  query loadBlogPost ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        datePublished
        title
      }
      html
      timeToRead
    }
  }
`