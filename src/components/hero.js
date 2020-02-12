import React from "react"
import { css } from "@emotion/core"

export default (props) => {
  return (
    <section css={css`
      min-height: calc(100vh - ${props.heightOffset});
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}>
      <h1 css={css`
        font-size: 20px;
        font-weight: 400;
        color: #dbedff;
        margin-bottom: 15px;
      `}>
        Hi, I'm
      </h1>
      <h1 css={css`
        font-size: 60px;
        font-weight: 700;
        text-align: center;
      `}>
          Gali Armero
        <span css={css`color: #18EBBF`}>.</span>
      </h1>

      <h2 css={css`
        font-size: 28px;
        font-weight: 700;
        color: #dbedff;
        text-align: center;
        margin: 15px 0;
      `}>
        I code things that make life easier.
      </h2>

      <p css={css`
        text-align: center;
        margin: 40px 0 30px 0;
      `}>
        I enjoy building complex systems with simple, elegant user interfaces.
      </p>

      <button>Get In Touch</button>
    </section>
  )
}