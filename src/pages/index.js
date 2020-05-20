import React, { useState } from "react"

import Loader from "../components/loader"
import Helmet from "../components/helmet"
import Header from "../components/header"
import Hero from "../components/hero"
import About from "../components/about"
import LatestBlogPosts from "../components/latest-blog-posts"
import Contact from "../components/contact"
import SectionMarkers from "../components/section-markers"
import Footer from "../components/footer"
import { Main } from "../styles/Containers"
import GlobalStyles from "../styles/GlobalStyles"
import TransitionStyles from "../styles/TransitionStyles"
import { colors } from "../styles/theme"
import { indexMeta } from "../config/site-meta.yml"

export default () => {
  const headerHeight = 75
  const sections = ['hero', 'about', 'latestBlogPosts', 'contact']

  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, toggleMenu] = useState(false)
  const [visibleSection, setVisibleSection] = useState('')
  const [isMarkersVisible, toggleMarkers] = useState(true)
  const [intersectionData, setIntersectionData] = useState({
    hero: { time: 0, isIntersecting: true, intersectionRatio: 0 },
    about: { time: 0, isIntersecting: true, intersectionRatio: 0 },
    latestBlogPosts: { time: 0, isIntersecting: true, intersectionRatio: 0 },
    contact: { time: 0, isIntersecting: true, intersectionRatio: 0 },
  })

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

  const handleIntersection = (entry) => {
    setIntersectionData({...intersectionData, ...entry})
    let visibleSections = Object.keys(intersectionData).filter(k => intersectionData[k].intersectionRatio > 0)

    if (visibleSections.length === 1) {
      setVisibleSection(visibleSections[0])
      return
    }

    if (visibleSections.includes('hero') && visibleSections.includes('about')) {
     (intersectionData.about.intersectionRatio >= 0.2)
        ? setVisibleSection('about')
        : setVisibleSection('hero')
    } else if (visibleSections.includes('about') && visibleSections.includes('latestBlogPosts')) {
      (intersectionData.latestBlogPosts.intersectionRatio >= 0.1)
        ? setVisibleSection('latestBlogPosts')
        : setVisibleSection('about')
    } else if (visibleSections.includes('latestBlogPosts') && visibleSections.includes('contact')) {
      (intersectionData.contact.intersectionRatio >= 0.3)
        ? setVisibleSection('contact')
        : setVisibleSection('latestBlogPosts')
    }
  }

  return (
    <div>
      <Helmet pageTitle={`${indexMeta.name} · Full Stack Software Engineer`} />
      <GlobalStyles scrollBehavior={`smooth`} />
      <TransitionStyles />

      {
        isLoading
        ? <Loader finishLoading={() => setIsLoading(false)} />
        : (
          <div>
            <Header height={headerHeight} isSticky={true} hasMenu={true} isMenuOpen={isMenuOpen} onToggleMenu={() => toggleMenu(!isMenuOpen)} navBackground={colors.lighterBg} />
            <Main>
              <Hero handleIntersection={handleIntersection}
                greeting={indexMeta.greeting} name={indexMeta.name} tagline={indexMeta.tagline} />
              <About handleIntersection={handleIntersection}
                intro={indexMeta.aboutIntro} techSkills={indexMeta.techSkills} more={indexMeta.aboutPersonal} />
              <LatestBlogPosts handleIntersection={handleIntersection} />
              <Contact handleIntersection={handleIntersection} />
              <SectionMarkers {...sectionMarkerProps} />
            </Main>
            <Footer onVisibilityChange={onFooterVisibilityChange} name={indexMeta.name} copyrightYear={indexMeta.copyrightYear} />
          </div>
        )
      }
    </div>
  )
}
