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
        {/* <div onClick={props.onToggleMenu} css={css`
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
        </div> */}
          <Burger isMenuOpen={props.isMenuOpen} onToggleMenu={props.onToggleMenu} />
      </div>

      <Nav onToggleMenu={props.onToggleMenu} backgroundColor={props.navBackground} isVisible={props.isMenuOpen} />
  </header>
)

const BurgerBar = styled.span`
  background-color: var(--accentColor);
  display: inline-block;
  height: 1.2px;
  width: 100%;
  transition: all 140ms ease;
`

const Burger = props => (
  <button className="hamburger" type="button" onClick={props.onToggleMenu} css={css`
    font: inherit;
    display: inline-block;
    overflow: visible;
    margin: 0;
    cursor: pointer;
    transition-timing-function: linear;
    transition-duration: .15s;
    transition-property: opacity,filter;
    text-transform: none;
    color: inherit;
    border: 0;
    background-color: transparent;
    z-index: 5;
    height: 24px;

    &:focus,
    &:active {
      outline: none;
    }
  `}>
    <span className="hamburger-box" css={css`
      position: relative;
      display: inline-block;
      width: 40px;
      height: 24px;
    `}>
      <span className="hamburger-inner" css={css`
        top: 2px;
        transition: background-color 0s linear .13s;

        position: absolute;
        width: 40px;
        height: 4px;
        border-radius: 4px;
        background-color: ${props.isMenuOpen ? `transparent` : `var(--accentColor)`};
        transition-delay: ${props.isMenuOpen ? `.22s` : `.13s`};

        display: block;
        margin-top: -2px;

        &:before {
          top: -10px;

          display: block;
          content: "";

          position: absolute;
          width: 40px;
          height: 4px;
          border-radius: 4px;
          background-color: var(--accentColor);

          /* Spring */
          top: ${props.isMenuOpen ? `0` : `10px`};
          transition: ${props.isMenuOpen
                      ? `top .1s cubic-bezier(.33333,0,.66667,.33333) .15s,transform .13s cubic-bezier(.215,.61,.355,1) .22s`
                      : `top .1s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19)`};
          transform: ${props.isMenuOpen
                    ? `translate3d(0,10px,0) rotate(45deg)`
                    : `none`};
        }

        &:after {
          bottom: -10px;

          display: block;
          content: "";

          position: absolute;
          width: 40px;
          height: 4px;
          border-radius: 4px;
          background-color: var(--accentColor);

          /* Spring */
          top: ${props.isMenuOpen ? `0` : `20px`};
          transition: ${props.isMenuOpen
                    ? `top .2s cubic-bezier(.33333,0,.66667,.33333),transform .13s cubic-bezier(.215,.61,.355,1) .22s`
                    : `top .2s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19)`};
          transform: ${props.isMenuOpen
                    ? `translate3d(0,10px,0) rotate(-45deg)`
                    : `none`};
        }
      `}></span>
    </span>
  </button>
)