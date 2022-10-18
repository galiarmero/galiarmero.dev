import React from "react"
import { Global, css } from "@emotion/react"

import { breakpoint } from "./theme"

/* Overrides GlobalStyles for daily puzzles-specific styling */
const DailyPuzzleStyles = () => (
  <Global
    styles={css`
      .puzzle-scores-nav div {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .puzzle-scores-nav > nav {
        display: grid;
        grid-template-columns: 1fr 2.5fr 1fr;

        ${breakpoint.media7} {
          grid-template-columns: 1fr 3fr 1fr;
        }
      }

      .puzzle-scores-nav div.intro {
        color: var(--accentColor);
        font-family: "JetBrainsMono-Regular";
        margin-bottom: 10px;
        text-transform: uppercase;
        font-size: 0.6rem;

        ${breakpoint.media7} {
          margin-bottom: 20px;
          font-size: 0.7rem;
        }
      }

      .puzzle-scores-nav div.date-label {
        align-items: center;
      }

      .puzzle-scores-nav .date-label.date-nav {
        font-size: 0.7rem;

        ${breakpoint.media9} {
          font-size: 0.9rem;
        }
      }

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
