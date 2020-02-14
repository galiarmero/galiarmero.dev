import React from "react"
import { css } from "@emotion/core"

export default (props) => {
  return (
    <section css={css`
      min-height: calc(100vh - ${props.heightOffset});
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}>
      <h1 css={css`
        font-size: 14px;
        font-weight: 400;
        color: #2188ff;
        padding: 0 0 10px 3px;
      `}>
        Hi, I'm
      </h1>
      <h1 css={css`
        font-size: 40px;
        font-weight: 700;
        color: #f1f8ff;
      `}>
          Gali Armero.
      </h1>

      <h1 css={css`
        font-size: 40px;
        font-weight: 700;
        color: #959da5;
      `}>
        I build things that simplify.
      </h1>

      <button>Get In Touch</button>
    </section>
  )
}