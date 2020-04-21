import React from "react"
import { Helmet } from "react-helmet"
import { css } from "@emotion/core"

import GlobalStyles from "../styles/GlobalStyles"
import Header from "../components/header"
import PostPreview from "../components/post-preview"
import { colors } from "../styles/theme"
import profilePic from "../../static/images/profile-pic.jpg"

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

        <aside css={css`
          display: flex;
          align-items: center;
          margin-bottom: 3.5rem;
        `}>
          <img
            src={profilePic}
            alt={`Gali Armero`}
            css={css`
              margin-right: 1rem;
              width: 3.75rem;
              height: 3.75rem;
              border-radius: 50%;
            `}
          />

          <span
            css={css`
              font-size: 0.9rem;
              margin-bottom: 0;
              line-height: 1.3;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
          `}>
            <p css={css`margin-bottom: 0.4rem;`}>Personal blog by <a href="/">Gali Armero</a>.</p>
            <p css={css`margin-bottom: 0;`}>Notebook of a tech bloke in perpetual search for answers.</p>
          </span>
        </aside>

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
          fields {
            slug
          }
        }
      }
    }
  }
`