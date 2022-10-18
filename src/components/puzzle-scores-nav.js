import React from "react"
import { navigate } from "gatsby"
import { css } from "@emotion/react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

import Heading from "../styles/Headings"
import { formatDateEu, getRelativeDayName } from "../utils"

const PuzzleScoresNav = ({ date, prevDate, nextDate, prevSlug, nextSlug }) => {
  const onClickPrev = () => navigate(prevSlug)
  const onClickNext = () => navigate(nextSlug)

  return (
    <div className="puzzle-scores-nav">
      <div className="intro">Puzzle scores for</div>
      <nav
        css={css`
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
        `}
      >
        <div>
          {prevDate && (
            <FaChevronLeft
              size={42}
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
                size={42}
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
