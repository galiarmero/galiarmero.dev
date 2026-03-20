import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const Label = styled.span`
  box-sizing: border-box;
  display: inline-block;
  font-size: 0.6rem;
  text-align: center;
  line-height: 1.5;
  vertical-align: center;
  font-family: "JetBrainsMono-Regular", monospace;
`

const PairLabel = ({ left, right }) => (
  <div
    css={css`
      line-height: 1;
    `}
  >
    <Label
      css={css`
        border-radius: 8px 0 0 8px;
        padding: 0.05rem 0.3rem 0.04rem 0.5rem;
        background-color: var(--softTextColor);
        color: var(--bgColor);
      `}
    >
      {left}
    </Label>
    <Label
      css={css`
        border-radius: 0 8px 8px 0;
        padding: 0.05rem 0.35rem 0.04rem 0.3rem;
        background-color: #57a44d;
        color: var(--softTextColor);
      `}
    >
      {right}
    </Label>
  </div>
)

export default PairLabel
