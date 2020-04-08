import React, { useState, useLayoutEffect } from "react"
import { css } from "@emotion/core"
//import { throttle } from "underscore"

import Nav from './nav'
import { throttle } from "../utils"
import SimpleBurger from './simple-burger'
import SpringBurger from './spring-burger'
import StandBurger from './stand-burger'

export default ({ height, isMenuOpen, onToggleMenu, navBackground }) => {
  const DELTA = 5
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('none')

  const handleScroll = () => {
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (Math.abs(lastScrollTop - fromTop) <= DELTA || isMenuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      setScrollDirection('none')
    } else if (fromTop > lastScrollTop && fromTop > height) {
      if (scrollDirection !== 'down') {
        setScrollDirection('down')
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        setScrollDirection('up')
      }
    }

    setLastScrollTop(fromTop)
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => throttle(handleScroll(), 100))
  })

  useLayoutEffect(() => {
    return () => window.removeEventListener('scroll', () => handleScroll())
  })

  return (
    <header css={css`
      padding: 0 25px;
      position: fixed;
      top: 0px;
      width: 100%;
      background-color: var(--bgColor);
      z-index: 300;
      box-shadow: ${scrollDirection === 'up' ? `0px 5px 9px -3px var(--boxShadowColor)` : `none`};
      transform: translateY(${scrollDirection === 'down' ? `-${height}px` : `0px`});
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
            <h1>G</h1>
          </div>
          {/* <SimpleBurger isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} /> */}
          {/* <SpringBurger isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} /> */}
          <StandBurger isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
        </div>

        <Nav onToggleMenu={onToggleMenu} backgroundColor={navBackground} isVisible={isMenuOpen} />
    </header>
  )
}
