import React from "react"

export default (props) => {
  return (
    <section>
      <h1>About me</h1>

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
    </section>
  )
}

const paragraphify = (text) => (
  text.split('\n\n').map(p => `<p>${p}</p><br />`).join(``)
)
