import React from "react"
import { Section } from "../styles/Containers"
import { SectionHeading } from "../styles/Headings"

export default (props) => {
  return (
    <Section>
      <SectionHeading>About me</SectionHeading>

      <div dangerouslySetInnerHTML={{ __html: paragraphify(props.intro) }} />

      <ul>
        {props.techSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
        ))}
      </ul>
      <br />

      <div dangerouslySetInnerHTML={{ __html: paragraphify(props.outro) }} />
      <hr />
      <div dangerouslySetInnerHTML={{ __html: paragraphify(props.more) }} />
    </Section>
  )
}

const paragraphify = (text) => (
  text.split('\n\n').map(p => `<p>${p}</p><br />`).join(``)
)
