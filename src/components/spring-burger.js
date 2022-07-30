import React from "react"
import { css } from "@emotion/react"

export default ({ onToggleMenu, isMenuOpen }) => (
  <button
    className="hamburger"
    type="button"
    onClick={onToggleMenu}
    css={css`
      font: inherit;
      display: inline-block;
      overflow: visible;
      margin: 0;
      cursor: pointer;
      transition-timing-function: linear;
      transition-duration: 0.15s;
      transition-property: opacity, filter;
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
    `}
  >
    <span
      className="hamburger-box"
      css={css`
        position: relative;
        display: inline-block;
        width: 35px;
        height: 24px;
      `}
    >
      <span
        className="hamburger-inner"
        css={css`
          top: 2px;
          transition: background-color 0s linear 0.13s;

          position: absolute;
          width: 20px;
          height: 2.5px;
          border-radius: 4px;
          background-color: ${isMenuOpen
            ? `transparent`
            : `var(--accentColor)`};
          transition-delay: ${isMenuOpen ? `.22s` : `.13s`};

          display: block;
          margin-top: -2px;

          left: 0;

          &:before {
            display: block;
            content: "";

            position: absolute;
            width: 35px;
            height: 2.5px;
            border-radius: 4px;
            background-color: var(--accentColor);

            /* Spring */
            top: ${isMenuOpen ? `0` : `10.75px`};
            transition: ${isMenuOpen
              ? `top .1s cubic-bezier(.33333,0,.66667,.33333) .15s,transform .13s cubic-bezier(.215,.61,.355,1) .22s`
              : `top .1s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19)`};
            transform: ${isMenuOpen
              ? `translate3d(0,10px,0) rotate(45deg)`
              : `none`};
          }

          &:after {
            display: block;
            content: "";

            position: absolute;
            height: 2.5px;
            border-radius: 4px;
            background-color: var(--accentColor);

            /* Spring */
            width: ${isMenuOpen ? `35px` : `20px`};
            left: ${isMenuOpen ? `none` : `15px`};
            top: ${isMenuOpen ? `0` : `20.5px`};
            transition: ${isMenuOpen
              ? `top .2s cubic-bezier(.33333,0,.66667,.33333),transform .13s cubic-bezier(.215,.61,.355,1) .22s`
              : `top .2s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19)`};
            transform: ${isMenuOpen
              ? `translate3d(0,10px,0) rotate(-45deg)`
              : `none`};
          }
        `}
      ></span>
    </span>
  </button>
)
