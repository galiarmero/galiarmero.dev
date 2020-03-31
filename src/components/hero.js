import React from "react"
import { css } from "@emotion/core"
import VizSensor from "react-visibility-sensor"

export default ({ greeting, name, tagline, onChangeVisiblity }) => {
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
        font-size: 0.9rem;
      `}>
        {greeting}
      </span>

      <VizSensor onChange={onChangeVisiblity}>
        <h1 css={css`
          font-size: 2.5rem;
        `}>
          {name}.
        </h1>
      </VizSensor>

      <h1 css={css`
        font-size: 2.5rem;
        font-family: 'Gilroy-Light', sans-serif;
        font-weight: 300;
      `}>
        {tagline}
      </h1>

      <div css={css`
        width: 30px;
        position: absolute;
        bottom: 0;
        left: auto;
        right: 15px;
        z-index: 200;
        color: var(--textColor);
      `}>
        <div css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;

          &:after {
            content: "";
            display: block;
            width: 2px;
            height: 45px;
            margin: 0px auto;
            background-color: var(--textColor);
          }
        `}>
          <span css={css`
            writing-mode: vertical-rl;
            font-size: 0.65rem;
            letter-spacing: 0.3rem;
            font-family: 'JetBrainsMono-Regular';
          `}>SCROLL</span>
        </div>
      </div>
    </section>
  )
}