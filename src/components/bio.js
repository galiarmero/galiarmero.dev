import React from "react"
import { Link, navigate } from "gatsby"
import { css } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = (props) => (
  <aside
    css={css`
      display: flex;
      align-items: start;
    `}
  >
    <div css={css`width: 64px; margin: 0.2rem 1rem 0 0;`}>
      <StaticImage
        src="../../static/images/profile-pic.jpg"
        alt={props.author}
        placeholder="blurred"
        layout="constrained"
        onClick={() => navigate("/")}
        aspectRatio={1/1}
        style={{
          "border-radius": "50%",
          width: "3.75rem",
        }}
      />
    </div>

    <span
      css={css`
        font-size: 0.9rem;
        margin-bottom: 0;
        line-height: 1.4;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
      `}
    >
      {props.children ? (
        props.children
      ) : (
        <p
          css={css`
            margin-bottom: 0;
          `}
        >
          <Link to="/">{props.author}</Link> {props.descriptionAfterName}
        </p>
      )}
    </span>
  </aside>
)

export default Bio
