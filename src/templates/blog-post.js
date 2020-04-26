import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import PostDetails from "../components/post-details"
import Engage from "../components/engage"
import Bio from "../components/bio"
import SuggestedPost from "../components/suggested-post"
import { Main } from "../styles/Containers"
import GlobalStyles from "../styles/GlobalStyles"
import BlogStyles from "../styles/BlogStyles"
import { colors } from "../styles/theme"

import { indexMeta } from "../config/site-meta.yml"

export default({ data, pageContext }) => {
  const headerHeight = 75
  const author = indexMeta.name
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
      <Main marginTop={`${headerHeight + 35}px`}>
        <h1>{post.frontmatter.title}</h1>
        <PostDetails
          datePublished={post.frontmatter.datePublished}
          timeToRead={post.timeToRead}
        />

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
      </Main>
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