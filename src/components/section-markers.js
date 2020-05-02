import React, { useState, useEffect }  from "react"
import { css } from "@emotion/core"

export default ({ activeMarkerHeight, markerHeight, unit, sections, visibleSection, isVisible }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <nav css={css`
      position: fixed;
      width: 100%;
      top: auto;
      left: 0;
      bottom: 0px;
      padding: 10px 0;
      transform: ${isVisible ? `translateY(0)` : `translateY(${activeMarkerHeight + 20}px)`};
      overflow: hidden;
      z-index: 100;
      visibility: ${isVisible ? `visible` : `hidden`};
      opacity: 1;
      display: flex;
      justify-content: center;
      background: var(--bgColor);
      transition: all .3s;
    `}>
      <ul css={css`
        display: flex;
        align-items: flex-end;
      `}>
        {
          sections.map((s, i) => (
            <Marker
              key={i}
              href={s}
              height={ isMounted
                        ? ((visibleSection === s ? activeMarkerHeight : markerHeight) + unit)
                        : `0px`
              }
            />
          ))
        }
      </ul>
    </nav>
  )
}

const Marker = ({ href, height, children }) => (
  <li
    css={css`
      display: block;
      position: relative;
      padding: 0 12px 0;
      height: auto;
      list-style-type: none;
    `}
  >
    <a
      href={`#${href}`}
      css={css`
        display: block;
        position: relative;
        height: ${height};
        width: 1.5px;
        background: var(--headingColor);
        transition: .3s;
        z-index: 1;
        cursor: pointer;
        text-decoration: none;
      `}
    >
      {children}
    </a>
  </li>
)