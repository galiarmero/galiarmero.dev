import React from "react"
import { css } from "@emotion/core"

export default ({ onToggleMenu, isMenuOpen }) => (
  <button className="hamburger" type="button" onClick={onToggleMenu} css={css`
    padding: 6px 6px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;

    z-index: 5;

    &:focus,
    &:active {
      outline: none;
    }
  `}>
    <span className="hamburger-box" css={css`
      width: 32px;
      height: 20px;
      display: inline-block;
      position: relative;
      margin-top: 7px;
    `}>
      <span className="hamburger-inner" css={css`
        display: block;
        top: 50%;
        margin-top: -1px;

        width: 32px;
        height: 2px;
        background-color: #fff;
        border-radius: 4px;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;

        top: 1px;

        transform: ${isMenuOpen
                      ? `translate3d(0, 9px, 0) rotate(45deg)`
                      : `none`};

        &:before {
          width: 32px;
          height: 2px;
          background-color: #fff;
          border-radius: 4px;
          position: absolute;
          transition-property: transform;
          transition-duration: 0.15s;
          transition-timing-function: ease;

          content: "";
          display: block;

          top: -9px;

          top: 9px;
          transition-property: transform, opacity;
          transition-timing-function: ease;
          transition-duration: 0.15s;

          transform: ${isMenuOpen
            ? `rotate(-45deg) translate3d(-4.57143px, -7px, 0)`
            : `none`};
          opacity: ${isMenuOpen
                      ? `0`
                      : `1`};
        }

        &:after {
          width: 32px;
          height: 2px;
          background-color: #fff;
          border-radius: 4px;
          position: absolute;
          transition-property: transform;
          transition-duration: 0.15s;
          transition-timing-function: ease;

          content: "";
          display: block;

          bottom: -9px;

          top: 18px;

          transform: ${isMenuOpen
            ? `translate3d(0, -18px, 0) rotate(-90deg)`
            : `none`};
        }
      `}>

      </span>
    </span>


  </button>
)
