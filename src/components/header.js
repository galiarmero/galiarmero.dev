import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors } from '../styles/theme'
import Nav from './nav'

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
        <div onClick={props.onBurgerClick} css={css`
          display: flex;
          margin-left: auto;
          width: 2rem;
          height: 1.3rem;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          z-index: 5;
        `}>
          <BurgerBar css={css`opacity: ${props.isMenuOpen ? `0` : `1`}`}></BurgerBar>
          <BurgerBar css={css`
            ${props.isMenuOpen ? `
              transform: rotate(45deg);
              position: relative;
              &:after {
                content: "";
                background: ${colors.accent};
                width: 100%;
                height: 1.2px;
                position: absolute;
                display: inline-block;
                transform: rotate(-90deg);
              }
            ` : ``}
          `}></BurgerBar>
          <BurgerBar css={css`opacity: ${props.isMenuOpen ? `0` : `1`}`}></BurgerBar>
        </div>
      </div>

      <Nav backgroundColor={props.navBackground} isVisible={props.isMenuOpen} />
  </header>
)

const BurgerBar = styled.span`
  background-color: var(--accentColor);
  display: inline-block;
  height: 1.2px;
  width: 100%;
  transition: all 140ms ease;
`