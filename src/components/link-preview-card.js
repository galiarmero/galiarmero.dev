import React from "react"
import { navigate } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"

const CardWrapper = styled.div`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
`

const hover = css`
  &:hover {
    background: var(--bgColor);
  }
`

const LinkPreviewCard = ({ image, title, description, url, domain }) => {
  return (
    <CardWrapper>
      <div
        css={css`
          max-width: 100%;
          border-radius: 1rem;
          ${hover}
        `}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={url}
          className="no-style"
        >
          <div
            css={css`
              max-width: 100%;
              border-radius: 0.5rem 0.5rem 0 0;
              border: 1px solid var(--lightestBgColor);
              border-bottom: none;
              margin: 0;
            `}
          >
            <img
              css={css`
                max-width: 100%;
                border-radius: 0.5rem 0.5rem 0 0;
              `}
              src={image}
              alt={title}
            />
          </div>
          <div
            css={css`
              max-width: 100%;
              border-radius: 0 0 0.5rem 0.5rem;
              border: 1px solid var(--lightestBgColor);
              border-top: none;
              color: var(--textColor);

              display: flex;
              align-items: stretch;
              flex-direction: column;
              padding: 0.2rem 0.8rem 0.7rem;
              ${hover}
            `}
          >
            <span
              css={css`
                text-transform: uppercase;
                font-size: 0.7rem;
              `}
            >
              {domain.replace("www.", "")}
            </span>
            <span
              css={css`
                color: var(--headingColor);
                font-size: 1rem;
              `}
            >
              {title}
            </span>
            <span
              css={css`
                font-size: 0.7rem;
              `}
            >
              {description}
            </span>
          </div>
        </a>
      </div>
    </CardWrapper>
  )
}

export default LinkPreviewCard
