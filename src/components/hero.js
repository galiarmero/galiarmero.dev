import React, { useState, useEffect }  from "react"
import { css } from "@emotion/core"
import IntersectionObserver from "@researchgate/react-intersection-observer"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import settings from "../config/settings"


export default (props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1500);
    return () => clearTimeout(timeout);
  }, []);

  const onChange = ({ time, isIntersecting, intersectionRatio }) => {
    props.handleIntersection({
      hero: { time, isIntersecting, intersectionRatio },
    })
  }
  const options = {
    onChange: onChange,
    threshold: settings.intersectionObserverThreshold,
  }

  const greeting = (
    <div css={css`transition-delay: 50ms`}>
      <span css={css`
        padding: 0 0 10px 3px;
        color: var(--accentColor);
        font-family: 'JetBrainsMono-Regular';
        font-size: 0.9rem;
      `}>
        {props.greeting}
      </span>
    </div>
  )

  const name = (
    <div css={css`transition-delay: 200ms`}>
      <h1 css={css`
        font-size: 2.5rem;
      `}>
        {props.name}.
      </h1>
    </div>
  )

  const tagline = (
    <div css={css`transition-delay: 350ms`}>
      <h1 css={css`
        font-size: 2.5rem;
        font-family: 'Gilroy-Light', sans-serif;
        font-weight: 300;
      `}>
        {props.tagline}
      </h1>
    </div>
  )

  const items = [greeting, name, tagline]

  return (
    <IntersectionObserver {...options}>
      <TransitionGroup component="section" css={css`
        min-height: 140vh;
        display: flex;
        flex-direction: column;
        justify-content: start;
        padding-top: 30vh;
      `}>
        { isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={3000}>
              {item}
            </CSSTransition>
          ))
        }
        <div css={css`
          width: 30px;
          position: absolute;
          bottom: -40vh;
          left: 15px;
          right: auto;
          z-index: 200;
          color: var(--headingColor);
        `}>
          <div css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;

            &:after {
              content: "";
              display: block;
              width: 1.5px;
              height: 50vh;
              margin: 0px auto;
              background-color: var(--headingColor);
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
      </TransitionGroup>
    </IntersectionObserver>
  )
}