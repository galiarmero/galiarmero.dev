import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"

import { linkReset } from "../styles/GlobalStyles"

const linkStyle = css`
  color: var(--headingColor);
  ${linkReset};
  &:hover {
    color: var(--accentColor);
  }
`

const NavItem = (props) => (
  <div css={css`
    margin: 1rem 0;
    font-size: 1.8rem;
    font-family: 'Gilroy-ExtraBold', sans-serif;
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

const IconLink = styled.a`
  font-size: 1.5rem;
  ${linkStyle};
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
    <NavItem link="#about" onClick={props.onToggleMenu}>About</NavItem>
    <NavItem link="/blog" isInternal={true}>Blog</NavItem>
    <NavItem link="#contact" onClick={props.onToggleMenu}>Contact</NavItem>
    <div css={css`
      width: 20%;
      height: 3px;
      background: var(--accentColor);
      margin: 1.4rem 0;
    `} />
    <div css={css`
      margin: 1.5rem 0 0.5rem 0;
      width: 70%;
      display: flex;
      justify-content: space-around;
    `}>
      <IconLink onClick={props.onToggleMenu} target="_blank" href="https://github.com/galiarmero">
        <FaGithub />
      </IconLink>
      <IconLink onClick={props.onToggleMenu} target="_blank" href="https://www.linkedin.com/in/galileoarmero">
        <FaLinkedinIn />
      </IconLink>
      <IconLink onClick={props.onToggleMenu} target="_blank" href="https://twitter.com/galiarmero">
        <FaTwitter />
      </IconLink>
      <IconLink onClick={props.onToggleMenu} target="_blank" href="https://www.instagram.com/galiarmero/">
        <FaInstagram />
      </IconLink>
    </div>
  </nav>
)
