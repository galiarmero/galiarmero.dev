import React, { useState } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/about"
import BlogPosts from "../components/blog-posts"
import Footer from "../components/footer"
import GlobalStyles from "../styles/GlobalStyles"
import { colors } from '../styles/theme'

// TODO: Remove usage of css here if possible
import { css } from '@emotion/core'

export default ({ data }) => {
  const indexEdge = data.allContentYaml.edges.find(({ node }) => node.hasOwnProperty('index'))
  if (indexEdge === -1)
    console.error("Edge containing `index` not found in allContentYaml")
  const index = indexEdge.node.index

  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gali Armero - Full Stack Software Engineer</title>

        <meta name="theme-color" content={colors.lighterBg} />
        <meta name="msapplication-navbutton-color" content={colors.lighterBg} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>
      <GlobalStyles />
      <Nav isMenuOpen={isMenuOpen} onBurgerClick={() => toggleMenu(!isMenuOpen)} />
      <main css={css`
        padding: 0 25px;
      `}>
        <Hero greeting={index.greeting} name={index.name} tagline={index.tagline} />
        <About intro={index.aboutIntro} techSkills={index.techSkills} more={index.aboutPersonal} />
        <BlogPosts />
      </main>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    allContentYaml {
      edges {
        node {
          index {
            greeting
            name
            tagline
            aboutIntro
            techSkills
            aboutPersonal
          }
        }
      }
    }
  }
`
