import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { css } from "@emotion/react"

export const NavLinkItem = (props) => (
  <div css={props.customCss}>
    <AnchorLink
      to={props.link}
      onAnchorLinkClick={props.onClick}
      css={navLinkStyle}
      duration={2000}
    >
      {props.children}
    </AnchorLink>
  </div>
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

export const navLinkStyle = css`
  color: var(--headingColor);
  ${linkReset};
  &:hover {
    color: var(--accentColor);
  }
`
