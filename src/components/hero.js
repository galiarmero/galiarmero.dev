import React from "react"
import { LargeHeading, MediumHeading } from "../styles/Headings"
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
        font-weight: 400;
        padding: 0 0 10px 3px;
        color: var(--textColor);
      `}>
        Hi, I'm
      </h5>

      <LargeHeading>{props.name}.</LargeHeading>

      <MediumHeading css={css`
        color: var(--accentColor);
      `}>
        {props.tagline}
      </MediumHeading>
    </section>
  )
}