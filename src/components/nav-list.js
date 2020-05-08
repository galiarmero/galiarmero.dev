import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { linkReset } from "../styles/GlobalStyles"
import { menuOptions } from "../config/site-meta.yml"

const linkStyle = css`
  color: var(--headingColor);
  ${linkReset};
  &:hover {
    color: var(--accentColor);
  }
`

const NavItem = (props) => (
  <div css={css`
    font-size: 0.8rem;
    font-family: 'JetBrainsMono-Regular', monospace;
    margin: 0 20px;
    color: var(--textColor);
  `}>
    {props.isInternal
      ? <Link to={props.link} onClick={props.onClick} css={linkStyle}>
          {props.children}
        </Link>
      : <a href={props.link} onClick={props.onClick} css={linkStyle}>
          {props.children}
        </a>
    }
  </div>
)

export default (props) => (
  <nav
    css={css`
      display: flex;
      vertical-align: middle;
      ${props.customCss};
    `}
  >
    {
      menuOptions.map(({ title, link, isInternal }) => (
        <NavItem link={link} isInternal={isInternal} onClick={props.onToggleMenu}>
          {title}<span
                  css={css`
                    color: var(--accentColor);
                    font-size: 1.2rem;
                  `}>.</span>
        </NavItem>
      ))
    }
  </nav>
)