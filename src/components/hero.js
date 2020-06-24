import React, { useState, useEffect }  from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import IntersectionObserver from "@researchgate/react-intersection-observer"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import IconLink from "../components/icon-link"
import settings from "../config/settings"
import { breakpoint, transitionTiming } from "../styles/theme"
import { socialMediaMeta } from "../config/site-meta.yml"

const TransitionWrapper = styled.div`
  transition-delay: ${props => props.delay || `0ms`};
`

const SidelineContainer = styled.aside`
  width: 30px;
  position: ${props => props.position || `fixed`};
  bottom: ${props => props.isMounted ? props.bottomOffset : `-100vh`};
  transition: 400ms;
  transition-delay: 650ms;
  right: ${props => props.rightOffset || `auto`};
  left: ${props => props.leftOffset || `auto`};
  z-index: 200;
  color: var(--headingColor);
  ${props => props.customCss};
`

const Sideline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 1.5px;
    height: ${props => props.lineLength};
    margin: 10px auto 0;
    background-color: var(--headingColor);
  }
`

const largeHeading = css`
  font-size: 2.7rem;

  ${breakpoint.media4} {
    font-size: 3rem;
  }

  ${breakpoint.media7} {
    font-size: 3.5rem;
  }

  ${breakpoint.media9} {
    font-size: 3.8rem;
  }
`

export default (props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 200);
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
    <TransitionWrapper delay={`200ms`}>
      <span css={css`
        padding: 0 0 10px 3px;
        color: var(--accentColor);
        font-family: 'JetBrainsMono-Regular';
        font-size: 0.9rem;

        ${breakpoint.media4} {
          font-size: 1rem;
        }
      `}>
        {props.greeting}
      </span>
    </TransitionWrapper>
  )

  const name = (
    <TransitionWrapper delay={`350ms`}>
      <h1 css={css`
        ${largeHeading};
      `}>
        {props.name}.
      </h1>
    </TransitionWrapper>
  )

  const tagline = (
    <TransitionWrapper delay={`500ms`}>
      <h1 css={css`
        font-family: 'Gilroy-Light', sans-serif;
        font-weight: 300;
        color: var(--textColor);
        ${largeHeading};
      `}>
        {props.tagline}
      </h1>
    </TransitionWrapper>
  )

  const items = [greeting, name, tagline]

  return (
    <IntersectionObserver {...options}>
      <section
        id="hero"
        css={css`
          min-height: 140vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin-top: ${props.headerHeight}px;
        `}
      >
        <TransitionGroup component="div"
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 50vh;
          `}
        >
          { isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                {item}
              </CSSTransition>
            ))
          }
        </TransitionGroup>
        <SidelineContainer
          isMounted={isMounted}
          position={`absolute`}
          bottomOffset={`-40vh`}
          leftOffset={`15px`}
          rightOffset={`auto`}
          customCss={css`
            ${breakpoint.media7} {
              left: 40px;
            }
          `}
        >
          <Sideline lineLength={`50vh`}>
            { isMounted &&
              <div css={css`
                writing-mode: vertical-rl;
                font-size: 0.65rem;
                letter-spacing: 0.3rem;
                font-family: 'JetBrainsMono-Regular';
              `}>SCROLL</div>
            }
          </Sideline>
        </SidelineContainer>

        <SidelineContainer
          isMounted={isMounted}
          bottomOffset={`0`}
          leftOffset={`auto`}
          rightOffset={`15px`}
          customCss={css`
            display: none;
            ${breakpoint.media7} {
              display: block;
              right: 40px;
            }
          `}
        >
          <Sideline lineLength={`10vh`}>
            { isMounted &&
              socialMediaMeta.filter(({ isInvisible }) => !isInvisible).map(({ id, link }) => (
                <IconLink
                  icon={id}
                  link={link}
                  onClick={props.onToggleMenu}
                  customCss={css`
                    font-size: 1.2rem;
                    margin: 10px 0;
                    color: var(--headingColor);
                    transition: all 0.25s ${transitionTiming} 0s;

                    &:hover {
                      color: var(--accentColor);
                      transform: translateY(-3px);
                    }
                  `}
                />
              ))
            }
          </Sideline>
        </SidelineContainer>
      </section>
    </IntersectionObserver>
  )
}