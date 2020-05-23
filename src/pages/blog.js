import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Helmet from "../components/helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import Bio from "../components/bio"
import { Main, AutoFitGrid } from "../styles/Containers"
import GlobalStyles from "../styles/GlobalStyles"
import PostPreview from "../components/post-preview"
import { colors } from "../styles/theme"
import { indexMeta } from "../config/site-meta.yml"
import sharingCard from "../../static/images/sharing-card.png"

export default ({ data }) => {
  const author = indexMeta.name
  const headerHeight = 75
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <Helmet
        pageTitle={`Blog · ${author}`}
        title={`Blog · ${author}`}
        description={`Notebook of a tech bloke in perpetual search for answers.`}
        pageUrl={`${indexMeta.siteUrl}/blog`}
        sharingCard={sharingCard}
        sharingAltText={`${indexMeta.greeting} ${indexMeta.name}. ${indexMeta.tagline}`}
      />
      <GlobalStyles />
      <Header height={headerHeight} navBackground={colors.lighterBg} logoSuffix="blog" />
      <Main marginTop={`${headerHeight}px`}>
        <div css={css`margin: 25px 0;`}>
          <Bio>
            <p css={css`margin-bottom: 0.4rem;`}>Personal blog by <Link to="/">{author}</Link>.</p>
            <p css={css`margin-bottom: 0;`}>Notebook of a tech bloke in perpetual search for answers.</p>
          </Bio>
        </div>

        <AutoFitGrid marginTop={`50px`}>
          {
            posts.map(({ node }, index) => <PostPreview key={index} data={node} />)
          }
        </AutoFitGrid>
      </Main>
      <Footer />
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