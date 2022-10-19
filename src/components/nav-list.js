import React from "react"
import { css } from "@emotion/react"

import { NavLinkItem } from "../styles/Links"

const itemStyle = css`
  font-size: 0.8rem;
  font-family: "JetBrainsMono-Regular", monospace;
  margin-left: 40px;
  color: var(--textColor);
`

const NavList = (props) => (
  <nav
    css={css`
      display: flex;
      vertical-align: middle;
      ${props.customCss};
    `}
  >
    {props.menuOptions.map(({ title, link }) => (
      <NavLinkItem
        link={link}
        onClick={props.onToggleMenu}
        customCss={itemStyle}
      >
        {title}
        <span
          css={css`
            color: var(--accentColor);
            font-size: 1.2rem;
          `}
        >
          .
        </span>
      </NavLinkItem>
    ))}
  </nav>
)

export default NavList
