import React from "react"
import { css } from "@emotion/core"
import Nav from './nav'
import SimpleBurger from './simple-burger'
import SpringBurger from './spring-burger'
import StandBurger from './stand-burger'

const HEADER_HEIGHT = `75px`

export default (props) => (
  <header css={css`
    padding: 0 25px;
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: var(--bgColor);
    z-index: 3;
    box-shadow: 0px 0.1rem 0.2rem 0px var(--boxShadowColor);
  `}>
      <div css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: ${HEADER_HEIGHT};
        z-index: 4;
      `}>
        <div className="logo" css={css`
          z-index: 5;
        `}>
          <h1>G</h1>
        </div>
        {/* <SimpleBurger isMenuOpen={props.isMenuOpen} onToggleMenu={props.onToggleMenu} /> */}
        {/* <SpringBurger isMenuOpen={props.isMenuOpen} onToggleMenu={props.onToggleMenu} /> */}
        <StandBurger isMenuOpen={props.isMenuOpen} onToggleMenu={props.onToggleMenu} />
      </div>

      <Nav onToggleMenu={props.onToggleMenu} backgroundColor={props.navBackground} isVisible={props.isMenuOpen} />
  </header>
)