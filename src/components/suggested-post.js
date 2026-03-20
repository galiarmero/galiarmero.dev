import React from "react"
import { navigate } from "gatsby"
import { css } from "@emotion/react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

import { SubHeading } from "../styles/Headings"

const SuggestedPost = ({ isPrevious, slug, title }) => {
  const Icon = isPrevious ? FaArrowLeft : FaArrowRight
  const onClick = () => navigate(slug)
  return (
    <aside
      css={css`
        display: flex;
        flex-direction: column;
        text-align: ${isPrevious ? `left` : `right`};
        margin: 20px 0;
      `}
    >
      <span>
        <Icon className="clickable-icon" onClick={onClick} />
      </span>
      <SubHeading
        onClick={onClick}
        css={css`
          cursor: pointer;
          &:hover {
            color: var(--accentColor);
          }
        `}
      >
        {title}
      </SubHeading>
    </aside>
  )
}

export default SuggestedPost
