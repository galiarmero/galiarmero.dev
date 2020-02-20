import React from "react"

export default (props) => {
  return (
    <section>
      <h1>About me</h1>

      <div dangerouslySetInnerHTML={{ __html: doubleNewlineToBr(props.intro) }} />

      <ul>
        {props.techSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
        ))}
      </ul>
      <br />

      <div dangerouslySetInnerHTML={{ __html: doubleNewlineToBr(props.outro) }} />
      <hr />
      <div dangerouslySetInnerHTML={{ __html: doubleNewlineToBr(props.more) }} />
    </section>
  )
}

const doubleNewlineToBr = (text) => (
  text.split('\n\n').map(p => `<p>${p}</p><br />`).join(``)
)