import React from "react"
import { css } from "@emotion/core"
import { FaGithub, FaLinkedinIn, FaStackOverflow, FaTwitter, FaInstagram } from "react-icons/fa"

import { linkReset } from "../styles/Links"

const iconMappings = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  stackoverflow: FaStackOverflow,
  twitter: FaTwitter,
  instagram: FaInstagram,
}

export default ({ icon, link, onClick, customCss }) => {
  const Icon = iconMappings[icon]
  return (
    <a
      css={css`
        font-size: 1.5rem;
        color: var(--headingColor);

        &:hover {
          color: var(--accentColor);
        }

        ${linkReset};
        ${customCss};
      `}
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      onClick={onClick}
    >
      <Icon />
    </a>
  )
}