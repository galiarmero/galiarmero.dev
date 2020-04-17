import React, { useState } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import IntersectionObserver from "@researchgate/react-intersection-observer"

import { Section } from "../styles/Containers"
import { SectionHeading } from "../styles/Headings"
import { BulletItem } from "../styles/Lists"
import settings from "../config/settings"


export default ({ handleIntersection, intro, techSkills, more }) => {
  const [isVisible, setIsVisible] = useState(false)
  const onChange = ({ time, isIntersecting, intersectionRatio }) => {
    if (isIntersecting) {
      setIsVisible(true)
    }
    handleIntersection({
      about: { time, isIntersecting, intersectionRatio },
    })
  }
  const options = {
    onChange: onChange,
    threshold: settings.intersectionObserverThreshold,
  }

  return (
    <IntersectionObserver {...options}>
      <Section>
        <SectionHeading isVisible={isVisible}>About Me</SectionHeading>

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
