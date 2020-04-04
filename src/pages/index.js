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

  const [isMarkersVisible, toggleMarkers] = useState(true)
  const onFooterVisibilityChange = (isVisible) => {
    toggleMarkers(!isVisible)
  }
  const sectionMarkerProps = {
    markerHeight: 16,
    activeMarkerHeight: 32,
    yPadding: 10,
    unit: `px`,
    isVisible: isMarkersVisible,
    sections,
    visibleSection,
  }
  const headerHeight = `75px`


  const [intersectionData, setIntersectionData] = useState({
    hero: { time: 0, isIntersecting: true, intersectionRatio: 0 },
    about: { time: 0, isIntersecting: true, intersectionRatio: 0 },
    blogPosts: { time: 0, isIntersecting: true, intersectionRatio: 0 },
  })
  const handleIntersection = (entry) => {
    setIntersectionData({...intersectionData, ...entry})
    let visibleSections = Object.keys(intersectionData).filter(k => intersectionData[k].isIntersecting)

    if (visibleSections.length === 1) {
      setVisibleSection(visibleSections[0])
      return
    }

    if (visibleSections.includes('hero') && visibleSections.includes('about')) {
     (intersectionData.about.intersectionRatio >= 0.2)
        ? setVisibleSection('about')
        : setVisibleSection('hero')
    } else if (visibleSections.includes('about') && visibleSections.includes('blogPosts')) {
      (intersectionData.about.intersectionRatio >= 0.3)
        ? setVisibleSection('about')
        : setVisibleSection('blogPosts')
    }
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
      <Header height={headerHeight} isMenuOpen={isMenuOpen} onToggleMenu={() => toggleMenu(!isMenuOpen)} navBackground={colors.lighterBg} />
      <main css={css`
        padding: 0 25px;
      `}>
        <Hero handleIntersection={handleIntersection}
          greeting={index.greeting} name={index.name} tagline={index.tagline} />
        <About handleIntersection={handleIntersection}
          intro={index.aboutIntro} techSkills={index.techSkills} more={index.aboutPersonal} />
        <BlogPosts handleIntersection={handleIntersection} />
        <SectionMarkers {...sectionMarkerProps} />
      </main>
      <Footer onVisibilityChange={onFooterVisibilityChange} name={index.name} copyrightYear={index.copyrightYear} />
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
            copyrightYear
          }
        }
      }
    }
  }
`
