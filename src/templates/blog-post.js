import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"

import Helmet from "../components/helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import PostDetails from "../components/post-details"
import Engage from "../components/engage"
import Bio from "../components/bio"
import SuggestedPost from "../components/suggested-post"
import { Main } from "../styles/Containers"
import GlobalStyles from "../styles/GlobalStyles"
import BlogStyles from "../styles/BlogStyles"
import { colors } from "../styles/theme"
import siteData from "../config/site-data.yml"

const { profile, siteBaseUrl } = siteData

const BlogPost = ({ data, pageContext }) => {
  const headerHeight = 75
  const author = profile.name
  const post = data.markdownRemark
  const postTitle = post.frontmatter.title
  const { slug, previousPost, nextPost } = pageContext

  return (
    <div>
      <Helmet
        pageTitle={`${postTitle} · ${author}`}
        title={postTitle}
        description={post.frontmatter.teaser}
        pageUrl={`${siteBaseUrl}${post.fields.slug}`}
        sharingCard={`${siteBaseUrl}${post.frontmatter.sharingCard.publicURL}`}
        sharingAltText={`${postTitle}. ${post.timeToRead} minute read. ${post.frontmatter.teaser}`}
      />
      <GlobalStyles />
      <BlogStyles />
      <Header
        height={headerHeight}
        navBackground={colors.lighterBg}
        logoSuffix="blog"
        suffixLink="/blog"
      />
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
        ></div>

        <Engage
          slug={slug}
          title={post.frontmatter.title}
          teaser={post.frontmatter.teaser}
          editUrl={post.fields.editUrl}
        />

        <div
          css={css`
            margin: 40px 0 50px;
          `}
        >
          <Bio author={author} />
        </div>

        {previousPost && (
          <SuggestedPost
            isPrevious={true}
            slug={previousPost.fields.slug}
            title={previousPost.frontmatter.title}
          />
        )}

        {nextPost && (
          <SuggestedPost
            slug={nextPost.fields.slug}
            title={nextPost.frontmatter.title}
          />
        )}
      </Main>
      <Footer marginTop={`50px`} />
    </div>
  )
}

export default BlogPost

export const query = graphql`
  query loadBlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        teaser
        datePublished
        title
        sharingCard {
          publicURL
        }
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
