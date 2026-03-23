import React from "react"
import {
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"

const iconMappings = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  stackoverflow: FaStackOverflow,
  twitter: FaTwitter,
  instagram: FaInstagram,
}

const IconLink = ({ icon, link, onClick, className }) => {
  const Icon = iconMappings[icon]
  return (
    <a
      className={className || "icon-link"}
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      onClick={onClick}
    >
      <Icon />
    </a>
  )
}

export default IconLink
