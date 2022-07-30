import React from "react"
import { Link, navigate } from "gatsby"
import { css } from "@emotion/react"

import profilePic from "../../static/images/profile-pic.jpg"

export default (props) => (
  <aside
    css={css`
      display: flex;
      align-items: start;
    `}
  >
    <img
      src={profilePic}
      alt={props.author}
      onClick={() => navigate("/")}
      css={css`
        margin: 0.2rem 1rem 0 0;
        height: 3.75rem;
        border-radius: 50%;
      `}
    />

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
          <Link to="/">{props.author}</Link> is a full stack software engineer
          from the Philippines. He is amused by elegant software solutions, new
          places, ugly delicious food, and the sound of a basketball swishing
          through the hoop.
        </p>
      )}
    </span>
  </aside>
)
