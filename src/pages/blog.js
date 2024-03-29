import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"

import Helmet from "../components/helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import Bio from "../components/bio"
import { Main, AutoFitGrid } from "../styles/Containers"
import GlobalStyles from "../styles/GlobalStyles"
import { SectionHeading } from "../styles/Headings"
import PostPreview from "../components/post-preview"
import { colors, breakpoint } from "../styles/theme"
import siteData from "../config/site-data.yml"
import sharingCard from "../../static/images/sharing-card.png"

const { profile, siteBaseUrl } = siteData

const Blog = ({ data }) => {
  const [isMenuOpen, toggleMenu] = useState(false)

  const author = profile.name
  const headerHeight = 75
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <Helmet
        pageTitle={`Blog · ${author}`}
        title={`Blog · ${author}`}
        description={profile.blogDescription}
        pageUrl={`${siteBaseUrl}/blog`}
        sharingCard={`${siteBaseUrl}${sharingCard}`}
        sharingAltText={`${profile.greeting} ${profile.name}. ${profile.tagline}`}
      />
      <GlobalStyles />
      <Header
        currentPage={`/blog`}
        height={headerHeight}
        navBackground={colors.lighterBg}
        logoSuffix="blog"
        hasMenu={true}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => toggleMenu(!isMenuOpen)}
      />
      <Main marginTop={`${headerHeight}px`}>
        <div
          css={css`
            margin: 25px 0;
          `}
        >
          <Bio>
            <p
              css={css`
                margin-bottom: 0.4rem;
              `}
            >
              Personal blog by <Link to="/">{author}</Link>.
            </p>
            <p
              css={css`
                margin-bottom: 0;
              `}
            >
              {profile.blogDescription}
            </p>
          </Bio>
        </div>

        <div
          css={css`
            margin: 35px 0 60px;

            ${breakpoint.media9} {
              margin: 70px 0;
            }
          `}
        >
          <SectionHeading fontSize={`1rem`}>Posts</SectionHeading>
        </div>

        <AutoFitGrid marginTop={`50px`}>
          {posts.map(({ node }, index) => (
            <PostPreview key={index} data={node} />
          ))}
        </AutoFitGrid>
      </Main>
      <Footer />
    </div>
  )
}

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___datePublished], order: DESC }
      limit: 6
    ) {
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
