import React from "react"
import { Helmet } from "react-helmet"
import { css } from "@emotion/core"

import Header from "../components/header"
import ArticleBio from "../components/article-bio"
import GlobalStyles from "../styles/GlobalStyles"
import PostPreview from "../components/post-preview"
import { colors } from "../styles/theme"

export default ({ data }) => {
  const headerHeight = 75
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog &middot; Gali Armero</title>

        <meta name="theme-color" content={colors.bg} />
        <meta name="msapplication-navbutton-color" content={colors.bg} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>
      <GlobalStyles />
      <Header height={headerHeight} navBackground={colors.lighterBg} logoSuffix="blog" />
      <main css={css`
        margin-top: ${headerHeight + 35}px;
        padding: 0 25px;
        overflow-x: hidden;
      `}>
        <ArticleBio />

        <div css={css`
          display: flex;
          flex-direction: column;
          justify-contents: space-between;
        `}>
          {
            posts.map(({ node }, index) => <PostPreview key={index} data={node} />)
          }
        </div>
      </main>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___datePublished], order: DESC }, limit: 3) {
      edges {
        node {
          frontmatter {
            teaser
            datePublished
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
`