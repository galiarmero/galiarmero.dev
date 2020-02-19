import React from "react"
import { LargeHeader } from "../styles/Header"
import { css } from "@emotion/core"

export default (props) => {
  return (
    <section css={css`
      min-height: calc(100vh - ${props.heightOffset});
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}>
      <h5 css={css`
        font-weight: 400;
        padding: 0 0 10px 3px;
        color: var(--textColor)
      `}>
        Hi, I'm
      </h5>

      <LargeHeader>Gali Armero.</LargeHeader>

      <LargeHeader css={css`
        color: var(--textColor)
      `}>
        I build things that simplify.
      </LargeHeader>

      <button>Get In Touch</button>
    </section>
  )
}