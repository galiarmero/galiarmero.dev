import React from "react"
import { css } from "@emotion/core"

export default ({ onToggleMenu, isMenuOpen }) => (
  <button className="hamburger" type="button" onClick={onToggleMenu} css={css`
    font: inherit;
    display: flex;
    overflow: visible;
    cursor: pointer;
    transition-timing-function: linear;
    transition-duration: .15s;
    transition-property: opacity,filter;
    text-transform: none;
    color: inherit;
    border: 0;
    background-color: transparent;
    z-index: 5;
    width: 42px;
    height: 42px;
    padding: 9px 5px;

    &:focus,
    &:active {
      outline: none;
    }
  `}>
    <span className="hamburger-box" css={css`
      position: relative;
      display: inline-block;
      width: 32px;
      height: 24px;
    `}>
      <span className="hamburger-inner" css={css`
        top: 50%;
        display: block;
        margin-top: -2px;
        position: absolute;
        width: 32px;
        height: 2px;
        transition-timing-function: ease;
        transition-duration: .15s;
        transition-property: transform;
        border-radius: 4px;
        transition: ${isMenuOpen
                    ? `transform 75ms cubic-bezier(.215,.61,.355,1) 0s,background-color 0s linear .15s`
                    : `transform 75ms cubic-bezier(.55,.055,.675,.19) .15s,background-color 0s linear 75ms`};
        transform: ${isMenuOpen
                    ? `rotate(90deg)`
                    : `none`};
        background-color: ${isMenuOpen ? `transparent` : `var(--accentColor)`};

        &:before {
          position: absolute;
          width: ${isMenuOpen ? `32px` : `20px`};
          height: 2px;
          transition-timing-function: ease;
          transition-duration: .15s;
          transition-property: transform;
          border-radius: 4px;
          background-color: var(--accentColor);
          display: block;
          content: "";
          top: ${isMenuOpen ? `0` : `-9px`};
          transition: ${isMenuOpen
                      ? `top 75ms ease-out .1s,transform 75ms cubic-bezier(.215,.61,.355,1) .15s`
                      : `top 75ms ease-in 75ms,transform 75ms cubic-bezier(.55,.055,.675,.19) 0s`};
          transform: ${isMenuOpen
                      ? `rotate(-45deg)`
                      : `none`};
        }

        &:after {
          position: absolute;
          width: ${isMenuOpen ? `32px` : `20px`};
          height: 2px;
          transition-timing-function: ease;
          transition-duration: .15s;
          transition-property: transform;
          border-radius: 4px;
          background-color: var(--accentColor);
          display: block;
          content: "";
          right: ${isMenuOpen ? `none` : `0`};

          bottom: ${isMenuOpen ? `0` : `-9px`};
          transition: ${isMenuOpen
                      ? `bottom 75ms ease-out .1s,transform 75ms cubic-bezier(.215,.61,.355,1) .15s`
                      : `bottom 75ms ease-in 75ms,transform 75ms cubic-bezier(.55,.055,.675,.19) 0s`};
          transform: ${isMenuOpen
                      ? `rotate(45deg)`
                      : `none`};
        }
      `}></span>
    </span>
  </button>
)