import React from "react"

export default (props) => {
  return (
    <section>
      <h1>About me</h1>

      <p>
        {props.intro}

        <ul>
          {props.techSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
          ))}
        </ul>

        {props.outro}
      </p>

      <hr />

      <p>{props.more}</p>
    </section>
  )
}