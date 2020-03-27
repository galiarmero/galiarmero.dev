import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Section } from "../styles/Containers"
import { SectionHeading } from "../styles/Headings"
import { BulletItem } from "../styles/Lists"


export default (props) => {
  return (
    <Section>
      <SectionHeading>About Me</SectionHeading>

      <SubSection>
        <div dangerouslySetInnerHTML={{ __html: paragraphify(props.intro) }} />

        <ul css={css`
          columns: 2;
          -webkit-columns: 2;
          -moz-columns: 2;
        `}>
          {props.techSkills.map((skill, i) => (
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

      <SubSection dangerouslySetInnerHTML={{ __html: paragraphify(props.more) }} />
    </Section>
  )
}

const SubSection = styled.div`
  margin: 30px 0;
`

const paragraphify = (text) => (
  text.split('\n\n').map(p => `<p>${p}</p><br />`).join(``)
)
