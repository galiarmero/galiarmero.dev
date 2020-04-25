import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"

import { linkReset } from "../styles/GlobalStyles"
import { menuOptions, socialMediaMeta } from "../config/site-meta.yml"

const linkStyle = css`
  color: var(--headingColor);
  ${linkReset};
  &:hover {
    color: var(--accentColor);
  }
`

const iconMappings = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  instagram: FaInstagram,
}

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

const SocialLink = ({ icon, link, onClick }) => {
  const Icon = iconMappings[icon]
  return (
    <a
      css={css`
        font-size: 1.5rem;
        ${linkStyle};
      `}
      target="_blank"
      href={link}
      onClick={onClick}
    >
      <Icon />
    </a>
  )
}

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
        <NavItem link={link} isInternal={isInternal} onClick={props.onToggleMenu}>{title}</NavItem>
      ))
    }
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
      {
        socialMediaMeta.map(({ id, link }) => (
          <SocialLink icon={id} link={link} onClick={props.onToggleMenu}>
            <FaGithub />
          </SocialLink>
        ))
      }
    </div>
  </nav>
)
