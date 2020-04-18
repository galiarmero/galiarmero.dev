import React, { useState } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import IntersectionObserver from "@researchgate/react-intersection-observer"

import { Section } from "../styles/Containers"
import { SectionHeading } from "../styles/Headings"
import { BulletItem } from "../styles/Lists"
import settings from "../config/settings"


export default ({ handleIntersection, intro, techSkills, more }) => {
  const [hasHeaderAppeared, setHeaderAppeared] = useState(false)

  const sectionObserverOptions = {
    onChange: ({ time, isIntersecting, intersectionRatio }) => {
      handleIntersection({
        about: { time, isIntersecting, intersectionRatio },
      })
    },
    threshold: settings.intersectionObserverThreshold,
  }

  const headerObserver = {
    onChange: ({ isIntersecting, intersectionRatio }) => {
      if (isIntersecting) {
        setHeaderAppeared(true)
      }
    },
  }

  return (
    <IntersectionObserver {...sectionObserverOptions}>
      <Section padding="50px 0 100px">
        <IntersectionObserver {...headerObserver }>
          <span>
            <SectionHeading hasNotAppeared={!hasHeaderAppeared}>About Me</SectionHeading>
          </span>
        </IntersectionObserver>

        <SubSection>
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

        <hr />

        <SubSection dangerouslySetInnerHTML={{ __html: paragraphify(more) }} />
      </Section>
    </IntersectionObserver>
  )
}

const SubSection = styled.div`
  margin: 30px 0;
`

const paragraphify = (text) => (
  text.split('\n\n').map(p => `<p>${p}</p>`).join(``)
)
