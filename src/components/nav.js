import React from "react"
import { css } from "@emotion/core"

export default (props) => (
  <header css={css`
    margin: 0 30px;
  `}>
    <nav css={css`
      display: flex;
      justify-content: center;
      flex-direction: column;
    `}>
      <div css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        border: 1px solid #000;
      `}>
        <div class="logo">G</div>
        <div><button id="burger">=</button></div>
      </div>
      <div css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #000;
      `}>
        <div class="nav-item">About</div>
        <div class="nav-item">Work</div>
        <div class="nav-item">Blog</div>
      </div>
    </nav>
  </header>
)