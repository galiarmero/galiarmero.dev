import React from "react"
import { css } from "@emotion/core"
import IntersectionObserver from "@researchgate/react-intersection-observer"

export default (props) => {
  const options = {
    onChange: ({ isIntersecting }) => {
      props.onVisibilityChange(isIntersecting)
    }
  }
  return (
    <IntersectionObserver {...options}>
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
      `}>
        <span>Built with <a href="https://www.gatsbyjs.org/">Gatsby</a> · Hosted on <a href="https://www.netlify.com/">Netlify</a></span>
        <span><a href="https://github.com/galiarmero/.dev">Crafted with &lt;3 by {props.name}</a></span>
        <span>&copy; {props.copyrightYear}</span>
      </footer>
    </IntersectionObserver>
  )
}