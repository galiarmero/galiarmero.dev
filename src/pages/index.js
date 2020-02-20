import React, { useState } from "react"
import { graphql } from "gatsby"
import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/about"
import BlogPosts from "../components/blog-posts"
import Footer from "../components/footer"
import GlobalStyles from "../styles/GlobalStyles"

// TODO: Remove usage of css here if possible
import { css } from '@emotion/core'

export default ({ data }) => {
  const indexEdge = data.allContentYaml.edges.find(({ node }) => node.hasOwnProperty('index'))
  if (indexEdge === -1)
    console.error("Edge containing `index` not found in allContentYaml")
  const index = indexEdge.node.index

  const [isMenuVisible, toggleMenu] = useState(false)

  return (
    <div>
      <GlobalStyles />
      <Nav isMenuVisible={isMenuVisible} onBurgerClick={() => toggleMenu(!isMenuVisible)} />
      <main css={css`
        padding: 0 25px;
      `}>
        <Hero name={index.name} tagline={index.tagline} />
        <About intro={index.aboutIntro} techSkills={index.techSkills} outro={index.aboutOutro} more={index.aboutPersonal} />
        <BlogPosts />
        <Footer />
      </main>
    </div>
  )
}

export const query = graphql`
  query {
    allContentYaml {
      edges {
        node {
          index {
            name
            tagline
            aboutIntro
            techSkills
            aboutOutro
            aboutPersonal
          }
        }
      }
    }
  }
`
