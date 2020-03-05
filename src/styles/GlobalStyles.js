import React from "react"
import { Global, css } from '@emotion/core'
import { colors } from './theme'

export default props => (
  <Global styles={css`

    @font-face {
      font-family: 'Metropolis-Black';
      src: url('fonts/Metropolis-Black.woff2') format('woff2'),
            url('fonts/Metropolis-Black.woff') format('woff');
    }

    @font-face {
      font-family: 'Metropolis-ExtraBold';
      src: url('fonts/Metropolis-ExtraBold.woff2') format('woff2'),
            url('fonts/Metropolis-ExtraBold.woff') format('woff');
    }

    @font-face {
      font-family: 'Metropolis-Bold';
      src: url('fonts/Metropolis-Bold.woff2') format('woff2'),
            url('fonts/Metropolis-Bold.woff') format('woff');
    }

    @font-face {
      font-family: 'Metropolis-Thin';
      src: url('fonts/Metropolis-Thin.woff2') format('woff2'),
            url('fonts/Metropolis-Thin.woff') format('woff');
    }

    @font-face {
      font-family: 'Gilroy-ExtraBold';
      src: url('fonts/Gilroy-ExtraBold.woff2') format('woff2'),
            url('fonts/Gilroy-ExtraBold.woff') format('woff');
    }

    @font-face {
      font-family: 'Gilroy-Light';
      src: url('fonts/Gilroy-Light.woff2') format('woff2'),
            url('fonts/Gilroy-Light.woff') format('woff');
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      /* Variables */
      --bgColor: ${colors.bg};
      --textColor: ${colors.text};
      --headingColor: ${colors.heading};
      --accentColor: ${colors.accent};
      --boxShadowColor: ${colors.boxShadow};
      --subtleBgColor: ${colors.subtleBg};
    }

    body {
      background: var(--bgColor);
      color: var(--textColor);
      font-family: 'Metropolis-Thin', sans-serif;
      font-size: 16px;
    }

    html {
      line-height: 1.6;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      line-height: 1.2;
      color: var(--headingColor);
      font-family: 'Gilroy-ExtraBold', sans-serif;
      letter-spacing: 0.8px;
    }
    
    .twitter-tweet-rendered {
      margin: 3rem auto;
    }

    /* TODO: Use srcset */
    img[src$=".gif"] {
        position: relative;
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 750px;
    }

    ul > li {
      list-style: none;
      position: relative;
      padding-left: 20px;
      &:before {
        content: "◦";
        position: absolute;
        left: 0px;
        color: var(--accentColor);
        font-size: 20px;
        line-height: 26px;
      }
    }

    hr {
      height: 0;
      border: 0;
      border-top: 1px solid var(--subtleBgColor);
      border-bottom: 0;
    }

    a {
      display: inline-block;
      position: relative;
      text-decoration: none;
      color: var(--accentColor);

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 1px;
        transform: scaleX(0);
        background-color: var(--accentColor);
        transform-origin: bottom right;
        transition: transform 0.3s;
      }

      &:hover {
        &:after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
      }
    }

    h1 > a {
      color: var(--headingColor);
    }
  `} />
)