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
      <h5 css={css`
        padding: 0 0 10px 3px;
        color: var(--accentColor);
        font-family: 'Gilroy-Light', sans-serif;
      `}>
        {props.greeting}
      </h5>

      <h1 css={css`
        font-size: 2.6rem;
      `}>
        {props.name}.
      </h1>

      <h1 css={css`
        font-size: 2rem;
        font-family: 'Gilroy-Light', sans-serif;
      `}>
        {props.tagline}
      </h1>
    </section>
  )
}