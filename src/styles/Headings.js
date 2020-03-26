import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'


export default styled.h1`
  font-size: 1.5rem;
`

export const SectionHeading = props => (
  <h1 css={css`
    font-size: 2rem;
    margin-bottom: 80px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -20px;
      height: 2px;
      width: 60px;
      background: var(--accentColor);
      border-radius: 6px;
    }

    &:after {
      content: "";
      position: absolute;
      left: 30px;
      bottom: -30px;
      height: 2px;
      width: 60px;
      background: var(--accentColor);
      border-radius: 6px;
    }
  `}>
    {props.children}
    <span css={css`
      color: var(--accentColor);
      font-size: 50px;
    `}>.</span>
  </h1>
)