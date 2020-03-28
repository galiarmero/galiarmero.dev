import React from "react"
import { css } from "@emotion/core"

export default (props) => (
  <footer css={css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    min-height: 90px;
    padding: 15px 0;
    font-size: .8rem;
    background-color: var(--darkerBgColor);
    margin-bottom: ${props.marginBottom + props.unit};
  `}>
    <span>Built with <a href="https://www.gatsbyjs.org/">Gatsby</a> · Hosted on <a href="https://www.netlify.com/">Netlify</a></span>
    <span><a href="https://github.com/galiarmero/.dev">Crafted with &lt;3 by Gali Armero</a></span>
    <span>&copy; 2020</span>
  </footer>
)