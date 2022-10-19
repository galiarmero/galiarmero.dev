import React from "react"
import { navigate } from "gatsby"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

import Heading from "../styles/Headings"
import { formatDateEu, formatDateEuNoYear, getRelativeDayName } from "../utils"

const onEnter = (e, handle) => {
  if (e.keyCode === 13) {
    handle(e)
  }
}

const PuzzleScoresNav = ({ date, prevDate, nextDate, prevSlug, nextSlug }) => {
  const onClickPrev = () => navigate(prevSlug)
  const onClickNext = () => navigate(nextSlug)

  return (
    <div className="puzzle-scores-nav">
      <div className="intro">Puzzle scores for</div>
      <nav>
        <div>
          {prevDate && (
            <FaChevronLeft
              size={36}
              className="clickable-icon"
              onClick={onClickPrev}
              onKeyDown={(e) => onEnter(e, onClickPrev)}
              tabIndex={0}
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
                size={36}
                className="clickable-icon"
                onClick={onClickNext}
                onKeyDown={(e) => onEnter(e, onClickNext)}
                tabIndex={0}
              />
            )}
          </div>
        </div>
        <div className="date-label date-nav">
          <span
            className="text-link"
            onClick={onClickPrev}
            onKeyDown={(e) => onEnter(e, onClickPrev)}
            role="button"
            tabIndex={0}
          >
            {prevDate && formatDateEuNoYear(prevDate)}
          </span>
        </div>
        <div className="date-label">{formatDateEu(date)}</div>
        <div className="date-label date-nav">
          <span
            className="text-link"
            onClick={onClickNext}
            onKeyDown={(e) => onEnter(e, onClickNext)}
            role="button"
            tabIndex={0}
          >
            {nextDate && formatDateEuNoYear(nextDate)}
          </span>
        </div>
      </nav>
    </div>
  )
}

export default PuzzleScoresNav
