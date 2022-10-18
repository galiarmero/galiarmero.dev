import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { css } from "@emotion/react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

import Heading from "../styles/Headings"
import { formatDateEu, getRelativeDayName } from "../utils"

const isScreenMobile = () => {
  if (typeof window === "undefined") return true
  return window.innerWidth < 768
}

const PuzzleScoresNav = ({ date, prevDate, nextDate, prevSlug, nextSlug }) => {
  const [isMobile, setMobile] = useState(isScreenMobile())

  const updateMedia = () => {
    setMobile(isScreenMobile())
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  const onClickPrev = () => navigate(prevSlug)
  const onClickNext = () => navigate(nextSlug)

  return (
    <div className="puzzle-scores-nav">
      <div className="intro">Puzzle scores for</div>
      <nav>
        <div>
          {prevDate && (
            <FaChevronLeft
              size={isMobile ? 28 : 42}
              className="clickable-icon"
              onClick={onClickPrev}
            />
          )}
        </div>
        <div>
          <Heading>{getRelativeDayName(date)}</Heading>
        </div>
        <div>
          <div>
            {nextDate && (
              <FaChevronRight
                size={isMobile ? 28 : 42}
                className="clickable-icon"
                onClick={onClickNext}
              />
            )}
          </div>
        </div>
        <div className="date-label date-nav">
          {prevDate && formatDateEu(prevDate)}
        </div>
        <div className="date-label">{formatDateEu(date)}</div>
        <div className="date-label date-nav">
          {nextDate && formatDateEu(nextDate)}
        </div>
      </nav>
    </div>
  )
}

export default PuzzleScoresNav
