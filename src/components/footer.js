import React from "react"
import { css } from "@emotion/core"

export default () => (
  <footer css={css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--boxShadowColor);
    height: auto;
    min-height: 80px;
    padding: 15px 0;
  `}>
    <h6>Built with <a href="https://www.gatsbyjs.org/">Gatsby</a> · Hosted on <a href="https://www.netlify.com/">Netlify</a></h6>
    <h6><a href="https://github.com/galiarmero/.dev">Crafted with &lt;3 by Gali Armero</a></h6>
    <h6>&copy; 2020</h6>
  </footer>
)