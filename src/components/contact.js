import React, { useState } from "react"
import { css } from "@emotion/react"
import IntersectionObserver from "@researchgate/react-intersection-observer"

import Button from "../styles/Buttons"
import { Section, SectionBody, AppearingContainer } from "../styles/Containers"
import { SectionHeading } from "../styles/Headings"
import settings from "../config/settings"
import { breakpoint } from "../styles/theme"
import { appearanceObserverOpts } from "../utils"

export default ({ handleIntersection }) => {
  const [hasHeaderAppeared, setHeaderAppeared] = useState(false)
  const [hasBodyAppeared, setBodyAppeared] = useState(false)

  const sectionObserverOpts = {
    onChange: ({ time, isIntersecting, intersectionRatio }) => {
      handleIntersection({
        contact: { time, isIntersecting, intersectionRatio },
      })
    },
    threshold: settings.intersectionObserverThreshold,
  }

  return (
    <IntersectionObserver {...sectionObserverOpts}>
      <Section
        id="contact"
        customCss={css`
          padding: 75px 5% 125px;
          ${breakpoint.media9} {
            padding: 75px 20% 125px;
          }
        `}
      >
        <IntersectionObserver {...appearanceObserverOpts(setHeaderAppeared, 0)}>
          <span>
            <SectionHeading
              hasNotAppeared={!hasHeaderAppeared}
              isCentered={true}
            >
              Get In Touch
            </SectionHeading>
          </span>
        </IntersectionObserver>

        <SectionBody marginTop={`80px`}>
          <IntersectionObserver {...appearanceObserverOpts(setBodyAppeared, 0.1)}>
            <AppearingContainer hasNotAppeared={!hasBodyAppeared}>
              <p
                css={css`
                  text-align: center;
                `}
              >
                Feel free to slide into my inbox if you have a question or just want to get in touch.
              </p>
              <Button
                onClick={() => window.location = "mailto:hi@galiarmero.dev"}
                css={css`
                  margin: 60px auto 0;
                `}
              >
                Say Hello
              </Button>
            </AppearingContainer>
          </IntersectionObserver>
        </SectionBody>
      </Section>
    </IntersectionObserver>
  )
}