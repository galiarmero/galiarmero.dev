import React, { useState } from "react"
import { css } from "@emotion/react"
import IntersectionObserver from "@researchgate/react-intersection-observer"

import { Section, SectionBody, AppearingContainer } from "../styles/Containers"
import { SectionHeading } from "../styles/Headings"
import { BulletItem } from "../styles/Lists"
import settings from "../config/settings"
import { breakpoint } from "../styles/theme"
import { appearanceObserverOpts } from "../utils"

const About = ({ handleIntersection, intro, body, techSkills, closing }) => {
  const [hasHeaderAppeared, setHeaderAppeared] = useState(false)
  const [hasIntroAppeared, setIntroAppeared] = useState(false)
  const [hasDividerAppeared, setDividerAppeared] = useState(false)
  const [hasBodyAppeared, setBodyAppeared] = useState(false)
  const [hasClosingAppeared, setClosingAppeared] = useState(false)

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
      <Section
        id="about"
        customCss={css`
          ${breakpoint.media9} {
            padding: 75px 12% 125px;
          }
        `}
      >
        <IntersectionObserver {...appearanceObserverOpts(setHeaderAppeared, 0)}>
          <span>
            <SectionHeading hasNotAppeared={!hasHeaderAppeared}>
              About Me
            </SectionHeading>
          </span>
        </IntersectionObserver>

        <SectionBody>
          <IntersectionObserver
            {...appearanceObserverOpts(setIntroAppeared, 0.2)}
          >
            <AppearingContainer hasNotAppeared={!hasIntroAppeared}>
              <div dangerouslySetInnerHTML={{ __html: paragraphify(intro) }} />
            </AppearingContainer>
          </IntersectionObserver>

          <IntersectionObserver
            {...appearanceObserverOpts(setDividerAppeared, 0.2)}
          >
            <hr
              css={css`
                width: ${hasDividerAppeared ? `100%` : `0.1px`};
                transition: width 400ms;
                transition-delay: 200ms;
              `}
            />
          </IntersectionObserver>

          <IntersectionObserver {...appearanceObserverOpts(setBodyAppeared)}>
            <AppearingContainer hasNotAppeared={!hasBodyAppeared}>
              <div dangerouslySetInnerHTML={{ __html: paragraphify(body) }} />

              <ul
                css={css`
                  max-width: 500px;
                  columns: 2;
                  -webkit-columns: 2;
                  -moz-columns: 2;
                `}
              >
                {techSkills.map((skill, i) => (
                  <BulletItem
                    key={i}
                    css={css`
                      font-family: "JetBrainsMono-Regular", monospace;
                      font-size: 0.95rem;
                    `}
                  >
                    {skill}
                  </BulletItem>
                ))}
              </ul>
            </AppearingContainer>
          </IntersectionObserver>

          <IntersectionObserver {...appearanceObserverOpts(setClosingAppeared)}>
            <AppearingContainer hasNotAppeared={!hasClosingAppeared}>
              <div dangerouslySetInnerHTML={{ __html: paragraphify(closing) }} />
            </AppearingContainer>
          </IntersectionObserver>
        </SectionBody>
      </Section>
    </IntersectionObserver>
  )
}

const paragraphify = (text) =>
  text
    .split("\n\n")
    .map((p) => `<p>${p}</p>`)
    .join(``)

export default About
