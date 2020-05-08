import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

export const NavLinkItem = (props) => (
  <div css={props.customCss}>
    {props.isInternal
      ? <Link to={props.link} onClick={props.onClick} css={navLinkStyle}>
          {props.children}
        </Link>
      : <a href={props.link} onClick={props.onClick} css={navLinkStyle}>
          {props.children}
        </a>
    }
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