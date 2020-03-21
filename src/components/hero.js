import React from "react"
import { css } from "@emotion/core"

export default (props) => {
  return (
    <section css={css`
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}>
      <span css={css`
        padding: 0 0 10px 3px;
        color: var(--accentColor);
        font-family: 'JetBrainsMono-Regular';
        font-size: 1rem;
      `}>
        {props.greeting}
      </span>

      <h1 css={css`
        font-size: 2.8rem;
      `}>
        {props.name}.
      </h1>

      <h1 css={css`
        font-size: 2.8rem;
        font-family: 'Gilroy-Light', sans-serif;
        font-weight: 300;
      `}>
        {props.tagline}
      </h1>
    </section>
  )
}