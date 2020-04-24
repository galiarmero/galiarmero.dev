import React from "react"
import { css } from "@emotion/core"

import profilePic from "../../static/images/profile-pic.jpg"

export default (props) => (
  <aside css={css`
    display: flex;
    align-items: center;
  `}>
    <img
      src={profilePic}
      alt={`Gali Armero`}
      css={css`
        margin-right: 1rem;
        height: 3.75rem;
        width: 3.75rem;
        border-radius: 50%;
      `}
    />

    <span
      css={css`
        font-size: 0.9rem;
        margin-bottom: 0;
        line-height: 1.3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `}>
      <p css={css`margin-bottom: 0.4rem;`}>Personal blog by <a href="/">Gali Armero</a>.</p>
      <p css={css`margin-bottom: 0;`}>Notebook of a tech bloke in perpetual search for answers.</p>
    </span>
  </aside>
)