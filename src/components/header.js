import React, { useState, useLayoutEffect } from "react"
import { css } from "@emotion/core"

import NavList from "./nav-list"
import NavOverlay from "./nav-overlay"
import { breakpoint, transitionTiming } from "../styles/theme"
import { throttle } from "../utils"
import SimpleBurger from './simple-burger'
import SpringBurger from './spring-burger'
import StandBurger from './stand-burger'
import SliderBurger from './slider-burger'

export default ({ height, isSticky, hasMenu, isMenuOpen, onToggleMenu, navBackground, logoSuffix }) => {
  const DELTA = 5
  const [isScrollTop, setIsScrollTop] = useState(true)

  const handleScroll = () => {
    const fromTop = window.scrollY;

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
      onToggleMenu();
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => throttle(handleScroll(), 250))
    window.addEventListener('resize', () => throttle(handleResize()))
    return () => {
      window.removeEventListener('scroll', () => handleScroll())
      window.removeEventListener('resize', () => handleResize())
    }
  })

  return (
    <header css={css`
      padding: 0 25px;
      position: ${isSticky ? `fixed` : `absolute`};
      top: 0px;
      width: 100%;
      background-color: var(--bgColor);
      z-index: 300;
      box-shadow: ${isScrollTop ? `none` : `0px 5px 9px -3px var(--boxShadowColor)`};
      transition: all 0.25s ${transitionTiming};
    `}>
      <div css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: ${height}px;
        z-index: 4;
      `}>
        <div className="logo" css={css`
          z-index: 5;
        `}>
          <h1 css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}>
            G
            { logoSuffix &&
              <span css={css`
                font-family: "Gilroy-Light";
                vertical-align: middle;
                font-size: 1.1rem;
                margin-left: 12px;
              `}>{logoSuffix}</span>
            }
          </h1>
        </div>
        {/* <SimpleBurger isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} /> */}
        {/* <SpringBurgerStandBurger isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} /> */}
        { hasMenu &&
          <NavList
            customCss={css`
              ${breakpoint.maxMedia7} {
                display: none;
              }
            `}
          />
        }
        { hasMenu &&
          <SliderBurger
            isMenuOpen={isMenuOpen}
            onToggleMenu={onToggleMenu}
            customCss={css`
              ${breakpoint.media7} {
                display: none;
              }
            `}
          />
        }
      </div>

      { hasMenu &&
        <NavOverlay onToggleMenu={onToggleMenu} backgroundColor={navBackground} isVisible={isMenuOpen} />
      }
    </header>
  )
}
