import React, { useState, useLayoutEffect } from "react"
import { navigate } from "gatsby"
import { css } from "@emotion/core"

import NavList from "./nav-list"
import NavOverlay from "./nav-overlay"
import { navLinkStyle } from "../styles/Links"
import { breakpoint, transitionTiming } from "../styles/theme"
import { throttle } from "../utils"
import SliderBurger from './slider-burger'

export default ({ height, isSticky, hasMenu, isMenuOpen, onToggleMenu, navBackground, logoSuffix, suffixLink }) => {
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
          <h1
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            `}
          >
            <span
              css={navLinkStyle}
              onClick={() => navigate('/')}
            >G</span>
            { logoSuffix &&
              <span
                css={css`
                  font-family: "Gilroy-Light";
                  vertical-align: middle;
                  font-size: 1.1rem;
                  margin-left: 12px;
                  ${suffixLink ? navLinkStyle : null};
                `}
                onClick={() => suffixLink && navigate(suffixLink)}
              >{logoSuffix}</span>
            }
          </h1>

        </div>
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
