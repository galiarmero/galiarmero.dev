import React, { useState } from "react"
import usePageVisible from "../../hooks/usePageVisible"
import Header from "./Header"
import Hero from "./Hero"
import About from "./About"
import LatestBlogPosts from "./LatestBlogPosts"
import Contact from "./Contact"
import SectionMarkers from "./SectionMarkers"
import Footer from "./Footer"

const intersectionThreshold = [
  0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
]

const Homepage = ({
  profile,
  menuOptions,
  socialMediaLinks,
  projectSourceUrl,
  copyrightYear,
  posts,
  lighterBgColor,
}) => {
  const headerHeight = 75
  const sections = ["hero", "about", "latestBlogPosts", "contact"]

  const isPageReady = usePageVisible()
  const [isMenuOpen, toggleMenu] = useState(false)
  const [visibleSection, setVisibleSection] = useState("")
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
    unit: "px",
    isVisible: isMarkersVisible,
    sections,
    visibleSection,
  }

  const handleIntersection = (entry) => {
    setIntersectionData((prev) => {
      const next = { ...prev, ...entry }
      const visibleSections = Object.keys(next).filter(
        (k) => next[k].intersectionRatio > 0
      )

      if (visibleSections.length === 1) {
        setVisibleSection(visibleSections[0])
      } else if (
        visibleSections.includes("hero") &&
        visibleSections.includes("about")
      ) {
        setVisibleSection(
          next.about.intersectionRatio >= 0.2 ? "about" : "hero"
        )
      } else if (
        visibleSections.includes("about") &&
        visibleSections.includes("latestBlogPosts")
      ) {
        setVisibleSection(
          next.latestBlogPosts.intersectionRatio >= 0.1
            ? "latestBlogPosts"
            : "about"
        )
      } else if (
        visibleSections.includes("latestBlogPosts") &&
        visibleSections.includes("contact")
      ) {
        setVisibleSection(
          next.contact.intersectionRatio >= 0.3 ? "contact" : "latestBlogPosts"
        )
      }

      return next
    })
  }

  return (
    <div>
      <Header
        currentPage="/"
        height={headerHeight}
        isSticky={true}
        hasMenu={true}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => toggleMenu(!isMenuOpen)}
        navBackground={lighterBgColor}
        menuOptions={menuOptions}
        socialMediaLinks={socialMediaLinks}
      />
      <main className="hp-main">
        <Hero
          handleIntersection={handleIntersection}
          greeting={profile.greeting}
          name={profile.name}
          tagline={profile.tagline}
          headerHeight={headerHeight}
          socialMediaLinks={socialMediaLinks}
          intersectionThreshold={intersectionThreshold}
          isPageReady={isPageReady}
        />
        <About
          handleIntersection={handleIntersection}
          intro={profile.aboutIntro}
          body={profile.aboutBody}
          techSkills={profile.techSkills}
          closing={profile.aboutClosing}
          intersectionThreshold={intersectionThreshold}
        />
        <LatestBlogPosts
          handleIntersection={handleIntersection}
          posts={posts}
          intersectionThreshold={intersectionThreshold}
        />
        <Contact
          handleIntersection={handleIntersection}
          intersectionThreshold={intersectionThreshold}
        />
        <SectionMarkers {...sectionMarkerProps} />
      </main>
      <Footer
        onVisibilityChange={onFooterVisibilityChange}
        projectSourceUrl={projectSourceUrl}
        profileName={profile.name}
        copyrightYear={copyrightYear}
      />
    </div>
  )
}

export default Homepage
