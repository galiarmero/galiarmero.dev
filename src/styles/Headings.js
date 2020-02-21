import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const LargeHeading = styled.h1`
  font-size: 40px;
`

export const SectionHeading = props => (
  <h1 css={css`
    font-size: 36px;
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
    <span css={css`color: var(--accentColor)`}>.</span>
  </h1>
)