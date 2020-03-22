import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

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
    <NavItem link="#about" onClick={props.onToggleMenu}>About</NavItem>
    <NavItem link="/blog">Blog</NavItem>
    <NavItem link="#contact" onClick={props.onToggleMenu}>Contact</NavItem>
  </nav>
)

const NavItem = (props) => (
  <div css={css`
    margin: 0.5rem 0;
    font-size: 1.8rem;
    font-family: 'Gilroy-ExtraBold', sans-serif;
  `}>
    <Link
      to={props.link}
      onClick={props.onClick}
      css={css`
        color: var(--textColor);
    `}>
      {props.children}
    </Link>
  </div>
)