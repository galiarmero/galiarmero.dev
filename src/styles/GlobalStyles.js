import React from "react"
import { Global, css } from '@emotion/core'
import { colors } from './theme'

export default props => (
  <Global styles={css`
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&family=Source+Sans+Pro:wght@300&display=swap');

    @font-face {
      font-family: 'Gilroy-ExtraBold';
      src: url('/fonts/Gilroy-ExtraBold.woff2') format('woff2'),
            url('/fonts/Gilroy-ExtraBold.woff') format('woff');
    }

    @font-face {
      font-family: 'Gilroy-Light';
      src: url('/fonts/Gilroy-Light.woff2') format('woff2'),
            url('/fonts/Gilroy-Light.woff') format('woff');
    }

    @font-face {
      font-family: 'JetBrainsMono-ExtraBold';
      src: url('/fonts/JetBrainsMono-ExtraBold.woff2') format('woff2'),
            url('/fonts/JetBrainsMono-ExtraBold.woff') format('woff');
    }

    @font-face {
      font-family: 'JetBrainsMono-Bold';
      src: url('/fonts/JetBrainsMono-Bold.woff2') format('woff2'),
            url('/fonts/JetBrainsMono-Bold.woff') format('woff');
    }

    @font-face {
      font-family: 'JetBrainsMono-Regular';
      src: url('/fonts/JetBrainsMono-Regular.woff2') format('woff2'),
            url('/fonts/JetBrainsMono-Regular.woff') format('woff');
    }

    :root {
      --bgColor: ${colors.bg};
      --lighterBgColor: ${colors.lighterBg};
      --darkerBgColor: ${colors.darkerBg};
      --textColor: ${colors.text};
      --headingColor: ${colors.heading};
      --accentColor: ${colors.accent};
      --boxShadowColor: ${colors.boxShadow};
      --subtleLineColor: ${colors.subtleLine};
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--bgColor);
      color: var(--textColor);
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 1.05rem;
      letter-spacing: 0.25px;
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

    hr {
      height: 0;
      border: 0;
      border-top: 1px solid var(--subtleLineColor);
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

    p {
      margin-bottom: 1.6rem;
      overflow-wrap: break-word;
    }

    .fadeup-enter {
      opacity: 0.01;
      transform: translateY(20px);
      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 400ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .fadeup-enter-active {
      opacity: 1;
      transform: translateY(0px);
      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 400ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  `} />
)
