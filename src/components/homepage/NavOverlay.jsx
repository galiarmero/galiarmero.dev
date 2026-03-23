import React from "react"
import IconLink from "./IconLink"

const NavOverlay = ({
  menuOptions,
  onToggleMenu,
  backgroundColor,
  isVisible,
  socialMediaLinks,
}) => (
  <nav
    className="nav-overlay"
    style={{
      backgroundColor,
      visibility: isVisible ? "visible" : "hidden",
      transform: isVisible ? "translateZ(0)" : "translate3d(0,-100%,0)",
      pointerEvents: isVisible ? "auto" : "none",
    }}
  >
    {menuOptions.map(({ title, link }) => (
      <div key={link} className="nav-overlay-item">
        <a
          href={link}
          onClick={(e) => {
            if (link.startsWith("#")) {
              e.preventDefault()
              document
                .querySelector(link)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            if (onToggleMenu) onToggleMenu()
          }}
        >
          {title}
        </a>
      </div>
    ))}
    <div className="nav-overlay-divider" />
    <div className="nav-overlay-socials">
      {socialMediaLinks
        .filter(({ isHidden }) => !isHidden)
        .map(({ id, link }) => (
          <IconLink key={id} icon={id} link={link} onClick={onToggleMenu} />
        ))}
    </div>
  </nav>
)

export default NavOverlay
