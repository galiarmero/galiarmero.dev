import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'


export default styled.h1`
  font-size: 1.7rem;
`

export const SectionHeading = props => (
  <h1 css={css`
    font-size: 2.2rem;
    margin-bottom: 80px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -25px;
      height: 3px;
      width: 70px;
      background: var(--accentColor);
    }
  `}>
    {props.children}
    <span css={css`
      color: var(--accentColor);
      font-size: 50px;
    `}>.</span>
  </h1>
)