import React from "react"
import { navigate, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { css } from "@emotion/core"
import dayjs from "dayjs"

import GlobalStyles, { linkReset } from "../styles/GlobalStyles"
import Header from "../components/header"
import Heading from "../styles/Headings"
import { colors } from "../styles/theme"
import IconEyeglasses from "../../static/icons/circular-eyeglasses.svg"
import IconRightArrow from "../../static/icons/right-arrow.svg"
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
              width: 3.5rem;
              height: 3.5rem;
              border-radius: 50%;
            `}
          />

          <p
            css={css`
              font-size: 0.9rem;
              margin-bottom: 0;
          `}>
            Personal blog by <a href="/">Gali Armero</a>.

            Notebook of a tech bloke in perpetual search for answers.
          </p>
        </aside>

        <div>
          {posts.map(({ node }, index) => {
            const slug = node.fields.slug

            return (
              <article key={index} css={css`
                margin: 12px 0;
                background: var(--lighterBgColor);
                border-radius: 4px;
                padding: 32px 25px;
                box-shadow: 0px 8px 11px -6px var(--boxShadowColor);
              `}>
                <Heading onClick={() => navigate(slug)} css={css`
                  cursor: pointer;
                  &:hover {
                    opacity: 0.8;
                  }
                `}>
                  {node.frontmatter.title}
                </Heading>
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
                  ${linkReset};
                  font-family: 'JetBrainsMono-Regular';
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