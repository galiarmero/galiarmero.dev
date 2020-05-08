import React from "react"
import { css } from "@emotion/core"

import { NavLinkItem } from "../styles/Links"
import { menuOptions } from "../config/site-meta.yml"

const itemStyle = css`
  font-size: 0.8rem;
  font-family: 'JetBrainsMono-Regular', monospace;
  margin: 0 20px;
  color: var(--textColor);
`

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
        <NavLinkItem
          link={link}
          isInternal={isInternal}
          onClick={props.onToggleMenu}
          customCss={itemStyle}
        >
          {title}<span
                  css={css`
                    color: var(--accentColor);
                    font-size: 1.2rem;
                  `}>.</span>
        </NavLinkItem>
      ))
    }
  </nav>
)