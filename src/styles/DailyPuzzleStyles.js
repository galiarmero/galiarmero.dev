import React from "react"
import { Global, css } from "@emotion/react"

/* Overrides GlobalStyles for daily puzzles-specific styling */
const DailyPuzzleStyles = () => (
  <Global
    styles={css`
      .puzzle-score {
        line-height: 1.2rem;
        margin-top: 2rem;
      }

      .puzzle-score > div {
        min-height: 1.2em;
      }

      .twemoji-puzzle {
        width: 1.2em;
        height: 1.2em;
        line-height: 1.2em;
        margin-right: 0.075em;
        margin-left: 0.075em;
        vertical-align: -32%;
      }
    `}
  />
)

export default DailyPuzzleStyles
