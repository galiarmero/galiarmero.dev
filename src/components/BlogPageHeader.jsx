import React, { useState } from "react"
import Header from "./homepage/Header"

const BlogPageHeader = ({ menuOptions = [], socialMediaLinks = [], hasMenu = false }) => {
  const [isMenuOpen, toggleMenu] = useState(false)
  const headerHeight = 75

  return (
    <Header
      currentPage="/blog"
      height={headerHeight}
      navBackground="var(--lighterBgColor)"
      logoSuffix="blog"
      suffixLink="/blog"
      hasMenu={hasMenu}
      isMenuOpen={isMenuOpen}
      onToggleMenu={() => toggleMenu(!isMenuOpen)}
      menuOptions={menuOptions}
      socialMediaLinks={socialMediaLinks}
    />
  )
}

export default BlogPageHeader
