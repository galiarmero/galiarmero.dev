import React from "react"
import { css } from "@emotion/core"
import Nav from './nav'
import SimpleBurger from './simple-burger'
import SpringBurger from './spring-burger'
import StandBurger from './stand-burger'

export default ({ height, isMenuOpen, onToggleMenu, navBackground }) => (
  <header css={css`
    padding: 0 25px;
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: var(--bgColor);
    z-index: 300;
    box-shadow: 0px 0.1rem 0.2rem 0px var(--boxShadowColor);
  `}>
      <div css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: ${height};
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