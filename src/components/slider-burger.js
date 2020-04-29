import React from "react"
import { css } from "@emotion/core"

const hamburgerPaddingY = `5px`
const hamburgerPaddingX = `5px`
const hamburgerLayerWidth = `32px`
const hamburgerLayerHeight = `2px`
const hamburgerLayerSpacing = `6px`
const hamburgerLayerColor = `var(--headingColor)`
const hamburgerLayerBorderRadius = `4px`
const yOffset = `calc(${hamburgerLayerSpacing} + ${hamburgerLayerHeight})`

export default ({ onToggleMenu, isMenuOpen }) => (
  <button className="hamburger" type="button" onClick={onToggleMenu} css={css`
    padding: ${hamburgerPaddingY} ${hamburgerPaddingX};
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
      width: ${hamburgerLayerWidth};
      height: calc(${hamburgerLayerHeight} * 3 + ${hamburgerLayerSpacing} * 2);
      display: inline-block;
      position: relative;
      margin-top: ${hamburgerLayerSpacing};
    `}>
      <span className="hamburger-inner" css={css`
        display: block;
        top: 50%;
        margin-top: calc(${hamburgerLayerHeight} / -2);

        // Slider-r
        top: calc(${hamburgerLayerHeight} / 2);
        transform: ${isMenuOpen
                      ? `translate3d(0, ${yOffset}, 0) rotate(-45deg)`
                      : `none`};

        &,
        &::before,
        &::after {
          width: ${hamburgerLayerWidth};
          height: ${hamburgerLayerHeight};
          background-color: ${hamburgerLayerColor};
          border-radius: ${hamburgerLayerBorderRadius};
          position: absolute;
          transition-property: transform;
          transition-duration: 0.15s;
          transition-timing-function: ease;
        }

        &::before,
        &::after {
          content: "";
          display: block;
        }

        &:before {
          top: calc((${hamburgerLayerSpacing} + ${hamburgerLayerHeight}) * -1);

          // Slider-r
          top: calc(${hamburgerLayerHeight} + ${hamburgerLayerSpacing});
          transition-property: transform, opacity;
          transition-timing-function: ease;
          transition-duration: 0.15s;
          transform: ${isMenuOpen
                        ? `rotate(-45deg) translate3d(calc(${hamburgerLayerWidth} / 7), calc(${hamburgerLayerSpacing} * -1), 0)`
                        : `none`};
          opacity: ${isMenuOpen
                      ? `0`
                      : `1`};
        }

        &:after {
          bottom: calc((${hamburgerLayerSpacing} + ${hamburgerLayerHeight}) * -1);

          // Slider-r
          top: calc((${hamburgerLayerHeight} * 2) + (${hamburgerLayerSpacing} * 2));
          transform: ${isMenuOpen
            ? `translate3d(0, calc(${yOffset} * -2), 0) rotate(-90deg)`
            : `none`};
        }
      `}>

      </span>
    </span>


  </button>
)
