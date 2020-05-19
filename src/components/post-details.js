import React from "react"
import { css } from "@emotion/core"

import { formatDate } from "../utils"
import IconEyeglasses from "../../static/icons/circular-eyeglasses.svg"

export default ({ datePublished, timeToRead }) => (
  <span
    css={css`
      font-size: 0.7rem;
    `}
  >
    <span
      css={css`
        margin-right: 15px;
      `}
    >
      {formatDate(datePublished)}
    </span>
    <IconEyeglasses
      css={css`
        position: relative;
        top: 0.3rem;
        font-size: 1.1rem;
        margin-right: 5px;
        font-family: 'ClearSans-Thin', sans-serif;
      `}
    />{timeToRead} min read
  </span>
)