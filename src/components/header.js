import React, { useState, useLayoutEffect } from "react"
import { navigate } from "gatsby"
import { css } from "@emotion/react"

import NavList from "./nav-list"
import NavOverlay from "./nav-overlay"
import { navLinkStyle } from "../styles/Links"
import { breakpoint, transitionTiming } from "../styles/theme"
import { throttle } from "../utils"
import SliderBurger from "./slider-burger"
import Logo from "../../static/icons/logo.svg"
import siteData from "../config/site-data.yml"

let { menuOptions } = siteData

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
}) => {
  const DELTA = 5
  const [isScrollTop, setIsScrollTop] = useState(true)

  const handleScroll = () => {
    const fromTop = window.scrollY

    if (fromTop < DELTA) {
      setIsScrollTop(true)
    } else {
      if (isScrollTop) {
        setIsScrollTop(false)
      }
    }
  }

  const handleResize = () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      onToggleMenu()
    }
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", () => throttle(handleScroll(), 250))
    window.addEventListener("resize", () => throttle(handleResize()))
    return () => {
      window.removeEventListener("scroll", () => handleScroll())
      window.removeEventListener("resize", () => handleResize())
    }
  })

  menuOptions = menuOptions.filter(
    (o) => o.link !== currentPage && (!o.anchorIn || o.anchorIn === currentPage)
  )

  return (
    <header
      css={css`
        padding: 0 25px;
        position: ${isSticky ? `fixed` : `absolute`};
        top: 0px;
        width: 100%;
        background-color: var(--bgColor);
        z-index: 300;
        box-shadow: ${isScrollTop
          ? `none`
          : `0px 5px 9px -3px var(--boxShadowColor)`};
        transition: all 0.25s ${transitionTiming};

        ${breakpoint.media7} {
          padding: 0 40px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: ${height}px;
          z-index: 4;
        `}
      >
        <div
          className="logo"
          css={css`
            z-index: 5;
          `}
        >
          <h1
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            `}
          >
            <Logo
              css={css`
                height: 40px;
                width: 22px;
                &:hover,
                &:focus {
                  opacity: 0.8;
                }
              `}
              onClick={() => navigate("/")}
            />
            {logoSuffix && (
              <span
                css={css`
                  font-family: "Gilroy-Light", sans-serif;
                  font-weight: 300;
                  vertical-align: middle;
                  font-size: 1.2rem;
                  margin-left: 16px;
                  ${suffixLink ? navLinkStyle : null};
                `}
                onClick={() => suffixLink && navigate(suffixLink)}
              >
                {logoSuffix}
              </span>
            )}
          </h1>
        </div>
        {hasMenu && (
          <NavList
            menuOptions={menuOptions}
            customCss={css`
              ${breakpoint.maxMedia7} {
                display: none;
              }
            `}
          />
        )}
        {hasMenu && (
          <SliderBurger
            isMenuOpen={isMenuOpen}
            onToggleMenu={onToggleMenu}
            customCss={css`
              ${breakpoint.media7} {
                display: none;
              }
            `}
          />
        )}
      </div>

      {hasMenu && (
        <NavOverlay
          menuOptions={menuOptions}
          onToggleMenu={onToggleMenu}
          backgroundColor={navBackground}
          isVisible={isMenuOpen}
        />
      )}
    </header>
  )
}

export default Header
