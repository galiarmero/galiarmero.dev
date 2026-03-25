import React from "react"

const SectionHeading = ({ hasNotAppeared, isCentered, children }) => (
  <h1
    className={[
      "hp-section-heading",
      hasNotAppeared ? "not-appeared" : "",
      isCentered ? "is-centered" : "",
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
    <span className="accent-dot">.</span>
  </h1>
)

export default SectionHeading
