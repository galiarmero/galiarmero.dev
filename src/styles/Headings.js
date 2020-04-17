import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'


export default styled.h1`
  font-size: 1.4rem;
  letter-spacing: 0.08rem;
`

export const SectionHeading = props => (
  <h1 css={css`
    font-size: 2rem;
    margin-bottom: 100px;
    position: relative;
    opacity: ${props.isVisible ? `1` : `0.01`};
    transform: ${props.isVisible ? `translateY(0px)` : `translateY(40px)`};
    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 500ms;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -20px;
      height: 2px;
      width: 60px;
      background: var(--accentColor);
      border-radius: 6px;
      transform: ${props.isVisible ? `translateX(0px)` : `translateX(-80px)`};
      opacity: ${props.isVisible ? `1` : `0.01`};
      transition: all 200ms;
      transition-delay: 800ms;
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
      transform: ${props.isVisible ? `translateX(0px)` : `translateX(80px)`};
      opacity: ${props.isVisible ? `1` : `0`};
      transition: all 200ms;
      transition-delay: 500ms;
    }
  `}>
    {props.children}
    <span css={css`
      color: var(--accentColor);
      font-size: 50px;
    `}>.</span>
  </h1>
)