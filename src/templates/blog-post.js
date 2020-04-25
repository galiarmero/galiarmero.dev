import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Engage from "../components/engage"
import Bio from "../components/bio"
import SuggestedPost from "../components/suggested-post"
import GlobalStyles from "../styles/GlobalStyles"
import BlogStyles from "../styles/BlogStyles"
import { colors } from "../styles/theme"
import { formatDate } from "../utils"
import IconEyeglasses from "../../static/icons/circular-eyeglasses.svg"

export default({ data, pageContext }) => {
  const headerHeight = 75
  const author = `Gali Armero`
  const post = data.markdownRemark
  const postTitle = post.frontmatter.title
  const {
    slug,
    previousPost,
    nextPost,
  } = pageContext

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{postTitle} &middot; { author }</title>

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

        <Engage
          slug={slug}
          title={post.frontmatter.title}
          teaser={post.frontmatter.teaser}
          editUrl={post.fields.editUrl}
        />

        <div css={css`margin: 40px 0;`}>
          <Bio author={author} />
        </div>

        {
          previousPost &&
          <SuggestedPost
            isPrevious={true}
            slug={previousPost.fields.slug}
            title={previousPost.frontmatter.title}
          />
        }

        {
          nextPost &&
          <SuggestedPost
            slug={nextPost.fields.slug}
            title={nextPost.frontmatter.title}
          />
        }
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
        editUrl
      }

      html
      timeToRead
    }
  }
`