import React from "react"
import { css } from "@emotion/core"

import IconLink from "./icon-link"
import { NavLinkItem } from "../styles/Links"
import { menuOptions, socialMediaMeta } from "../config/site-meta.yml"

const itemStyle = css`
  margin: 1rem 0;
  font-size: 1.8rem;
  font-family: 'Gilroy-ExtraBold', sans-serif;
`

export default (props) => (
  <nav css={css`
    position: fixed;
    background-color: ${props.backgroundColor};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: ${props.isVisible ? `visible` : `hidden`};
    transform: ${props.isVisible ? `translateZ(0)` : `translate3d(0,-100%,0)`};
    transition: .3s;
    pointer-events: ${props.isVisible ? `auto` : `none`};
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}>
    {
      menuOptions.map(({ title, link, isInternal }) => (
        <NavLinkItem
          link={link}
          isInternal={isInternal}
          onClick={props.onToggleMenu}
          customCss={itemStyle}
        >
          {title}
        </NavLinkItem>
      ))
    }
    <div css={css`
      width: 20%;
      height: 3px;
      background: var(--accentColor);
      margin: 1.4rem 0;
    `} />
    <div css={css`
      margin: .5rem 0 0.5rem 0;
      width: 70%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      a {
        flex-basis: 33.33333%;
        text-align: center;
        margin-top: 1rem;
      }
    `}>
      {
        socialMediaMeta.map(({ id, link }) => (
          <IconLink
            icon={id}
            link={link}
            onClick={props.onToggleMenu}
          />
        ))
      }
    </div>
  </nav>
)
