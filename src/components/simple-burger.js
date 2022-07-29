import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

export default ({ onToggleMenu, isMenuOpen }) => (
  <div onClick={onToggleMenu} css={css`
    display: flex;
    margin-left: auto;
    width: 2rem;
    height: 1.3rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    z-index: 5;
  `}>
    <BurgerBar css={css`opacity: ${isMenuOpen ? `0` : `1`}`}></BurgerBar>
    <BurgerBar css={css`
      ${isMenuOpen ? `
        transform: rotate(45deg);
        position: relative;
        &:after {
          content: "";
          background: var(--accentColor);
          width: 100%;
          height: 1.2px;
          position: absolute;
          display: inline-block;
          transform: rotate(-90deg);
        }
      ` : ``}
    `}></BurgerBar>
    <BurgerBar css={css`opacity: ${isMenuOpen ? `0` : `1`}`}></BurgerBar>
  </div>
)

const BurgerBar = styled.span`
  background-color: var(--accentColor);
  display: inline-block;
  height: 1.2px;
  width: 100%;
  transition: all 140ms ease;
`