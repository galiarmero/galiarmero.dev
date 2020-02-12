import React from "react"
import { css } from "@emotion/core"

export default (props) => (
  <header css={css`
    padding: 0 25px;
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
        height: ${props.navHeight};
        border: 1px solid #000;
      `}>
        <div class="logo"><h1>G</h1></div>
        <div><button id="burger" onClick={props.onBurgerClick}>=</button></div>
      </div>
      <div css={css`
        display: ${props.isMenuVisible ? `flex` : `none`};
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