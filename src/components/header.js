import React, { useState, useLayoutEffect } from "react"
import { css } from "@emotion/core"
//import { throttle } from "underscore"

import Nav from './nav'
import { throttle } from "../utils"
import SimpleBurger from './simple-burger'
import SpringBurger from './spring-burger'
import StandBurger from './stand-burger'

export default ({ height, isSticky, hasMenu, isMenuOpen, onToggleMenu, navBackground }) => {
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

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => throttle(handleScroll(), 250))
  })

  useLayoutEffect(() => {
    return () => window.removeEventListener('scroll', () => handleScroll())
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
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
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
            <div css={css`
              background-color: var(--accentColor);
              height: 1.5rem;
              width: 1px;
              margin: 0 16px;
              transform: rotate(30deg);
            `}></div>
            <span css={css`
              font-family: "Gilroy-Light";
              vertical-align: middle;
              font-size: 1.6rem;
            `}>blog</span>
          </h1>
        </div>
        {/* <SimpleBurger isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} /> */}
        {/* <SpringBurger isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} /> */}
        { hasMenu &&
          <StandBurger isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
        }
      </div>

      { hasMenu &&
        <Nav onToggleMenu={onToggleMenu} backgroundColor={navBackground} isVisible={isMenuOpen} />
      }
    </header>
  )
}
