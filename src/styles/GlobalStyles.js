import React from "react"
import { Global, css } from '@emotion/core'

export default props => (
  <Global styles={css`
    @import url(https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap);

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #15181c;
      color: #dbedff;
      font-family: 'PT Sans', sans-serif;
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
      color: #2188ff;
      font-family: 'PT Sans', sans-serif;
      font-weight: 400;
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
  `} />
)