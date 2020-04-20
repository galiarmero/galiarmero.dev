import React, { useState } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import IntersectionObserver from "@researchgate/react-intersection-observer"

import { Section } from "../styles/Containers"
import { SectionHeading } from "../styles/Headings"
import { BulletItem } from "../styles/Lists"
import settings from "../config/settings"
import { appearanceObserverOpts } from "../utils"


export default ({ handleIntersection, intro, techSkills, more }) => {
  const [hasHeaderAppeared, setHeaderAppeared] = useState(false)
  const [hasIntroAppeared, setIntroAppeared] = useState(false)
  const [hasDividerAppeared, setDividerAppeared] = useState(false)
  const [hasMoreAppeared, setMoreAppeared] = useState(false)

  const sectionObserverOpts = {
    onChange: ({ time, isIntersecting, intersectionRatio }) => {
      handleIntersection({
        about: { time, isIntersecting, intersectionRatio },
      })
    },
    threshold: settings.intersectionObserverThreshold,
  }

  return (
    <IntersectionObserver {...sectionObserverOpts}>
      <Section padding="50px 0 100px">
        <IntersectionObserver {...appearanceObserverOpts(setHeaderAppeared, 0)}>
          <span>
            <SectionHeading hasNotAppeared={!hasHeaderAppeared}>About Me</SectionHeading>
          </span>
        </IntersectionObserver>

        <IntersectionObserver {...appearanceObserverOpts(setIntroAppeared, 0.5)}>
          <SubSection hasNotAppeared={!hasIntroAppeared}>
            <div dangerouslySetInnerHTML={{ __html: paragraphify(intro) }} />

            <ul css={css`
              columns: 2;
              -webkit-columns: 2;
              -moz-columns: 2;
            `}>
              {techSkills.map((skill, i) => (
                  <BulletItem key={i} css={css`
                    font-family: 'Source Code Pro', monospace;
                    font-size: 0.9rem;
                  `}>
                    {skill}
                  </BulletItem>
              ))}
            </ul>
          </SubSection>
        </IntersectionObserver>

        <IntersectionObserver {...appearanceObserverOpts(setDividerAppeared, 0.3)}>
          <hr css={css`
            width: ${hasDividerAppeared ? `100%` : `0.1px`};
            transition: width 400ms;
            transition-delay: 200ms;
          `}/>
        </IntersectionObserver>

        <IntersectionObserver {...appearanceObserverOpts(setMoreAppeared)}>
          <SubSection hasNotAppeared={!hasMoreAppeared} dangerouslySetInnerHTML={{ __html: paragraphify(more) }} />
        </IntersectionObserver>
      </Section>
    </IntersectionObserver>
  )
}

const SubSection = styled.div`
  opacity: ${props => props.hasNotAppeared ? `0.01` : `1`};
  transform: ${props => props.hasNotAppeared ? `translateY(40px)` : `translateY(0px)`};
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 400ms;
  margin: 30px 0;
`

const paragraphify = (text) => (
  text.split('\n\n').map(p => `<p>${p}</p>`).join(``)
)
