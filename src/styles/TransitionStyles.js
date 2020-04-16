import React from "react"
import { Global, css } from '@emotion/core'

export default props => (
  <Global styles={css`
    .fadeup-enter {
      opacity: 0.01;
      transform: translateY(20px);
      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .fadeup-enter-active {
      opacity: 1;
      transform: translateY(0px);
      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  `} />
)
