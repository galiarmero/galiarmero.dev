import React, { useState } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Hero from "../components/hero"
import About from "../components/about"
import BlogPosts from "../components/blog-posts"
import SectionMarkers from "../components/section-markers"
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
  const [visibleSection, setVisibleSection] = useState('')
  const sections = ['hero', 'about', 'blogPosts']
  const handleVisibilityChange = section => {
    return isVisible => {
      if (isVisible) {
        setVisibleSection(section)
        console.log(`Visible section is now ${section}`)
      }
    }
  }

  const unit = 'px'
  const sectionMarkerProps = {
    markerHeight: 16,
    activeMarkerHeight: 32,
    yPadding: 10,
    unit,
    sections,
    visibleSection,
  }
  const footerProps = {
    marginBottom: sectionMarkerProps.yPadding * 2 + sectionMarkerProps.activeMarkerHeight,
    unit,
  }

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
      <Header isMenuOpen={isMenuOpen} onToggleMenu={() => toggleMenu(!isMenuOpen)} navBackground={colors.lighterBg} />
      <main css={css`
        padding: 0 25px;
      `}>
        <Hero greeting={index.greeting} name={index.name} tagline={index.tagline} onChangeVisiblity={handleVisibilityChange('hero')} />
        <About intro={index.aboutIntro} techSkills={index.techSkills} more={index.aboutPersonal} onChangeVisiblity={handleVisibilityChange('about')} />
        <BlogPosts onChangeVisiblity={handleVisibilityChange('blogPosts')} />
        <SectionMarkers {...sectionMarkerProps} />
      </main>
      <Footer {...footerProps} />
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
