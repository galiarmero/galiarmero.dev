import React, { useState, useEffect, useCallback } from "react"
import NavList from "./NavList"
import NavOverlay from "./NavOverlay"
import SliderBurger from "./SliderBurger"
import Logo from "./Logo"

const Header = ({
  currentPage,
  height,
  isSticky,
  hasMenu,
  isMenuOpen,
  onToggleMenu,
  navBackground,
  logoSuffix,
  suffixLink,
  menuOptions,
  socialMediaLinks,
}) => {
  const DELTA = 5
  const [isScrollTop, setIsScrollTop] = useState(true)

  const handleScroll = useCallback(() => {
    setIsScrollTop(window.scrollY < DELTA)
  }, [])

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      onToggleMenu()
    }
  }, [isMenuOpen, onToggleMenu])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [handleScroll, handleResize])

  const filteredMenu = menuOptions.filter(
    (o) => o.link !== currentPage && (!o.anchorIn || o.anchorIn === currentPage)
  )

  return (
    <header
      className="home-header"
      style={{
        position: isSticky ? "fixed" : "absolute",
        boxShadow: isScrollTop
          ? "none"
          : "0px 5px 9px -3px var(--boxShadowColor)",
      }}
    >
      <div className="home-header-inner" style={{ height }}>
        <div className="logo-zone">
          <h1>
            <Logo
              className="logo-svg"
              onClick={() => (window.location = "/")}
            />
            {logoSuffix && (
              <span
                className="logo-suffix"
                onClick={() => suffixLink && (window.location = suffixLink)}
                style={{ cursor: suffixLink ? "pointer" : "default" }}
              >
                {logoSuffix}
              </span>
            )}
          </h1>
        </div>
        {hasMenu && (
          <NavList menuOptions={filteredMenu} className="nav-desktop-only" />
        )}
        {hasMenu && (
          <SliderBurger
            isMenuOpen={isMenuOpen}
            onToggleMenu={onToggleMenu}
            className="burger-mobile-only"
          />
        )}
      </div>

      {hasMenu && (
        <NavOverlay
          menuOptions={filteredMenu}
          onToggleMenu={onToggleMenu}
          backgroundColor={navBackground}
          isVisible={isMenuOpen}
          socialMediaLinks={socialMediaLinks}
        />
      )}
    </header>
  )
}

export default Header
