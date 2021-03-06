import React from "react"
import { css } from "@emotion/core"
import IntersectionObserver from "@researchgate/react-intersection-observer"

import { profile, projectUrl, copyrightYear } from "../config/site-meta.yml"

export default (props) => {
  const children = (
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
      margin-top: ${props ? props.marginTop || `90px` : `90px`};
    `}>
      <span>Built with <a href="https://www.gatsbyjs.org/">Gatsby</a> · Hosted on <a href="https://www.netlify.com/">Netlify</a></span>
      <span><a href={projectUrl}>Crafted by {profile.name}</a></span>
      <span>&copy; {copyrightYear}. All Rights Reserved.</span>
    </footer>
  )

  if (props.onVisibilityChange) {
    const options = {
      onChange: ({ isIntersecting }) => {
        props.onVisibilityChange(isIntersecting)
      }
    }

    return (
      <IntersectionObserver {...options}>
        {children}
      </IntersectionObserver>
    )
  }

  return children;
}