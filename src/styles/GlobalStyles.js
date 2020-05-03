import React from "react"
import { Global, css } from '@emotion/core'
import { colors } from './theme'

export default props => (
  <Global styles={css`
    @font-face {
      font-family: 'Gilroy-ExtraBold';
      src: url('/fonts/Gilroy-ExtraBold.woff2') format('woff2'),
            url('/fonts/Gilroy-ExtraBold.woff') format('woff');
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Gilroy-Light';
      src: url('/fonts/Gilroy-Light.woff2') format('woff2'),
            url('/fonts/Gilroy-Light.woff') format('woff');
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'JetBrainsMono-Regular';
      src: url('/fonts/JetBrainsMono-Regular.woff2') format('woff2'),
            url('/fonts/JetBrainsMono-Regular.woff') format('woff');
      font-style: normal;
      font-display: swap;
    }

    /* source-sans-pro-300 - latin-ext_latin */
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local('Source Sans Pro Light'), local('SourceSansPro-Light'),
          url('/fonts/source-sans-pro-v13-latin-ext_latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('/fonts/source-sans-pro-v13-latin-ext_latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* source-sans-pro-regular - latin-ext_latin */
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
          url('/fonts/source-sans-pro-v13-latin-ext_latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('/fonts/source-sans-pro-v13-latin-ext_latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* source-code-pro-300 - latin */
    @font-face {
      font-family: 'Source Code Pro';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local('Source Code Pro Light'), local('SourceCodePro-Light'),
          url('../fonts/source-code-pro-v11-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('../fonts/source-code-pro-v11-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    :root {
      --bgColor: ${colors.bg};
      --lighterBgColor: ${colors.lighterBg};
      --darkerBgColor: ${colors.darkerBg};
      --selectBgColor: ${colors.selectBg};
      --textColor: ${colors.text};
      --headingColor: ${colors.heading};
      --accentColor: ${colors.accent};
      --boxShadowColor: ${colors.boxShadow};
      --subtleLineColor: ${colors.subtleLine};
      scroll-behavior: smooth;
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
      font-weight: 300;
      font-size: 1.05rem;
      letter-spacing: 0.25px;
    }

    html {
      line-height: 1.6;
    }

    ::selection {
      background-color: var(--selectBgColor);
      color: var(--textColor);
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
        height: 0.7px;
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
  `} />
)

export const linkReset = css`
  text-decoration: none;

  &:after {
    content: none;
  }

  &:hover {
    &:after {
        content: none;
    }
  }
`