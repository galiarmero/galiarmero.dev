import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { css } from "@emotion/core"

import Header from "../components/header"
import Bio from "../components/bio"
import GlobalStyles from "../styles/GlobalStyles"
import PostPreview from "../components/post-preview"
import { colors } from "../styles/theme"

import { indexMeta } from "../config/site-meta.yml"

export default ({ data }) => {
  const author = indexMeta.name
  const headerHeight = 75
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog &middot; {author}</title>

        <meta name="theme-color" content={colors.bg} />
        <meta name="msapplication-navbutton-color" content={colors.bg} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>
      <GlobalStyles />
      <Header height={headerHeight} navBackground={colors.lighterBg} logoSuffix="blog" />
      <main css={css`
        margin-top: ${headerHeight}px;
        padding: 0 25px;
        overflow-x: hidden;
      `}>
        <div css={css`margin: 25px 0;`}>
          <Bio>
            <p css={css`margin-bottom: 0.4rem;`}>Personal blog by <Link to="/">{author}</Link>.</p>
            <p css={css`margin-bottom: 0;`}>Notebook of a tech bloke in perpetual search for answers.</p>
          </Bio>
        </div>

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