import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors } from '../styles/theme'

export default (props) => (
  <header css={css`
    padding: 0 25px;
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: var(--bgColor);
    z-index: 20;
    box-shadow: 0px 0.1rem 0.2rem 0px var(--boxShadowColor);
    -webkit-box-shadow: 0px 0.1rem 0.2rem 0px var(--boxShadowColor);
    -moz-box-shadow: 0px 0.1rem 0.2rem 0px var(--boxShadowColor);
  `}>
      <div css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 75px;
      `}>
        <div className="logo"><h1>G</h1></div>
        <div onClick={props.onBurgerClick} css={css`
          display: -webkit-box;
          display: flex;
          margin-left: auto;
          width: 2rem;
          height: 1.3rem;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
                  flex-direction: column;
          -webkit-box-pack: justify;
                  justify-content: space-between;
          -webkit-box-align: center;
                  align-items: center;
          cursor: pointer;
          z-index: 100;
        `}>
          <BurgerBar css={css`opacity: ${props.isMenuOpen ? `0` : `1`}`}></BurgerBar>
          <BurgerBar css={css`
            ${props.isMenuOpen ? `
              -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
              position: relative;
              &:after {
                content: "";
                background: ${colors.accent};
                width: 100%;
                height: 1.2px;
                position: absolute;
                display: inline-block;
                -webkit-transform: rotate(-90deg);
                        transform: rotate(-90deg);
              }
            ` : ``}
          `}></BurgerBar>
          <BurgerBar css={css`opacity: ${props.isMenuOpen ? `0` : `1`}`}></BurgerBar>
        </div>
      </div>

      <nav css={css`
        position: fixed;
        background-color: var(--lighterBgColor);
        top: 0;
        left: 0;
        width: 100%;
        height: ${props.isMenuOpen ? `100%` : `0%`};
        opacity: ${props.isMenuOpen ? `1` : `0`};
        visibility: ${props.isMenuOpen ? `visible` : `hidden`};
        -webkit-transform: ${props.isMenuOpen ? `translateZ(0)` : `translate3d(0,-100%,0)`};
        transform: ${props.isMenuOpen ? `translateZ(0)` : `translate3d(0,-100%,0)`};
        -webkit-transition: .5s;
        transition: .5s;
        pointer-events: ${props.isMenuOpen ? `auto` : `none`};
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // border: 1px solid #000;
      `}>
        <div className="nav-item">About</div>
        <div className="nav-item">Work</div>
        <div className="nav-item">Blog</div>
      </nav>
  </header>
)

const BurgerBar = styled.span`
  background-color: var(--accentColor);
  display: inline-block;
  height: 1.2px;
  width: 100%;
  -webkit-transition: all 140ms ease;
  transition: all 140ms ease;
`