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
        position: absolute;
        width: ${isMenuOpen ? `32px` : `20px`};
        height: 2px;
        transition-timing-function: ease;
        transition-duration: .15s;
        transition-property: transform;
        border-radius: 4px;
        background-color: #fff;

        top: 1px;

        display: block;
        margin-top: -2px;

        transform: ${isMenuOpen
                      ? `translate3d(0,10px,0) rotate(45deg)`
                      : `none`};

        &:before {
          top: 11px;
          transition-timing-function: ease;
          transition-duration: .15s;
          transition-property: transform,opacity;

          display: block;
          content: "";

          position: absolute;
          width: 32px;
          height: 2px;
          transition-timing-function: ease;
          transition-duration: .15s;
          transition-property: transform;
          border-radius: 4px;
          background-color: #fff;

          transform: ${isMenuOpen
                        ? `rotate(-45deg) translate3d(-5.71429px,-6px,0)`
                        : `none`};
          opacity: ${isMenuOpen
                      ? `0`
                      : `1`};
        }

        &:after {
          top: 21px;

          display: block;
          content: "";

          position: absolute;
          width: ${isMenuOpen ? `32px` : `20px`};
          height: 2px;
          transition-timing-function: ease;
          transition-duration: .15s;
          transition-property: transform;
          border-radius: 4px;
          background-color: #fff;

          transform: ${isMenuOpen
                        ? `translate3d(0,-20px,0) rotate(-90deg)`
                        : `none`};
          right: ${isMenuOpen ? `none` : `0`};
        }
      `}>

      </span>
    </span>


  </button>
)
