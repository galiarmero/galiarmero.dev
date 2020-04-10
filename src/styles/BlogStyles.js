import React from "react"
import { Global, css } from '@emotion/core'

/* Overrides GlobalStyles for blog post-specific styling */
export default () => (
  <Global styles={css`
    .twitter-tweet-rendered {
      margin: 3rem auto;
    }

    img[src$=".gif"] {
        position: relative;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        height: auto;
    }

    ul > li,
    ol > li {
      margin-left: 1.7rem;
      padding-left: 0.4rem;
    }

    ol, ul, p {
      margin-bottom: 1.6rem;
    }

    blockquote {
      padding: 0.25rem 0.9rem;
      border-left: 3px solid var(--accentColor);
      margin-bottom: 1.6rem;
      font-size: 1rem;

      p {
        margin: 0;
      }
    }

    code,
    pre {
      font-size: 0.9rem;
    }
  `} />
)
