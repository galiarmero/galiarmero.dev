import React from "react"

const SliderBurger = ({ onToggleMenu, isMenuOpen, className }) => (
  <button
    className={`slider-burger ${className || ""}`}
    type="button"
    onClick={onToggleMenu}
  >
    <span className="slider-burger-box">
      <span className={`slider-burger-inner ${isMenuOpen ? "is-open" : ""}`} />
    </span>
  </button>
)

export default SliderBurger
