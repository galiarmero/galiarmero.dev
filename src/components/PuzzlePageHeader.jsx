import React, { useState } from "react"
import Header from "./homepage/Header"
import NavOverlay from "./homepage/NavOverlay"

const HEADER_HEIGHT = 75

const PuzzlePageHeader = ({ menuOptions, socialMediaLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Header
        currentPage="/puzzle-scores"
        height={HEADER_HEIGHT}
        navBackground="var(--lighterBgColor)"
        hasMenu={true}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        menuOptions={menuOptions}
        socialMediaLinks={socialMediaLinks}
      />
      <NavOverlay
        isVisible={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(false)}
        backgroundColor="var(--lighterBgColor)"
        menuOptions={menuOptions}
        socialMediaLinks={socialMediaLinks}
      />
    </>
  )
}

export default PuzzlePageHeader
