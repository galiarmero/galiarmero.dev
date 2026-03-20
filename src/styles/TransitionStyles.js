import React from "react"
import { Global, css } from "@emotion/react"

import { transitionTiming } from "../styles/theme"

const TransitionStyles = (props) => (
  <Global
    styles={css`
      .fadeup-enter {
        opacity: 0.01;
        transform: translateY(20px);
        transition: opacity 300ms ${transitionTiming},
          transform 300ms ${transitionTiming};
      }

      .fadeup-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms ${transitionTiming},
          transform 300ms ${transitionTiming};
      }
    `}
  />
)

export default TransitionStyles
