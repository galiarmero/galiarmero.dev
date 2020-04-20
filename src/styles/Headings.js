import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'


export default styled.h1`
  font-size: 1.4rem;
  letter-spacing: 0.08rem;
`

export const SectionHeading = ({ hasNotAppeared, children }) => (
  <h1 css={css`
    font-size: 2rem;
    margin-bottom: 100px;
    position: relative;
    opacity: ${hasNotAppeared ? `0` : `1`};
    transform: ${hasNotAppeared ? `translateY(40px)` : `translateY(0px)`};
    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 400ms;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -20px;
      height: 2px;
      width: 60px;
      background: var(--accentColor);
      border-radius: 6px;
      transform: ${hasNotAppeared ? `translateX(-80px)` : `translateX(0px)`};
      opacity: ${hasNotAppeared ? `0.01` : `1`};
      transition: all 300ms;
      transition-delay: 500ms;
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
      transform: ${hasNotAppeared ? `translateX(-180px)` : `translateX(0px)`};
      opacity: ${hasNotAppeared ? `0.01` : `1`};
      transition: all 300ms;
      transition-delay: 650ms;
    }
  `}>
    {children}
    <span css={css`
      color: var(--accentColor);
      font-size: 50px;
    `}>.</span>
  </h1>
)