import React from "react"

const NavList = ({ menuOptions, onToggleMenu, className }) => (
  <nav className={`nav-list ${className || ""}`}>
    {menuOptions.map(({ title, link }) => (
      <div key={link} className="nav-list-item">
        <a
          className="nav-link"
          href={link}
          onClick={(e) => {
            if (link.startsWith("#")) {
              e.preventDefault()
              document
                .querySelector(link)
                ?.scrollIntoView({ behavior: "smooth" })
              if (onToggleMenu) onToggleMenu()
            }
          }}
        >
          {title}
          <span className="accent-dot">.</span>
        </a>
      </div>
    ))}
  </nav>
)

export default NavList
