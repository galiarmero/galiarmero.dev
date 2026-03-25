import React, { useState, useEffect } from "react"

const SectionMarkers = ({
  activeMarkerHeight,
  markerHeight,
  unit,
  sections,
  visibleSection,
  isVisible,
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1200)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <nav
      className="markers-nav"
      style={{
        transform: isVisible
          ? "translateY(0)"
          : `translateY(${activeMarkerHeight + 20}px)`,
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      <ul className="markers-list">
        {sections.map((s) => (
          <Marker
            key={s}
            href={s}
            height={
              isMounted
                ? (visibleSection === s ? activeMarkerHeight : markerHeight) +
                  unit
                : "0px"
            }
          />
        ))}
      </ul>
    </nav>
  )
}

const Marker = ({ href, height }) => (
  <li className="marker-item">
    <a className="marker-link" href={`#${href}`} style={{ height }} />
  </li>
)

export default SectionMarkers
