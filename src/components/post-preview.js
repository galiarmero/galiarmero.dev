import React from "react"
import { navigate, Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import dayjs from "dayjs"

import { linkReset } from "../styles/GlobalStyles"
import Heading from "../styles/Headings"
import IconEyeglasses from "../../static/icons/circular-eyeglasses.svg"
import IconRightArrow from "../../static/icons/right-arrow.svg"

const PreviewBox = styled.article`
  margin: 1rem 0;
  background: var(--lighterBgColor);
  border-radius: 4px;
  padding: 32px 25px;
  box-shadow: 0px 8px 11px -6px var(--boxShadowColor);
`

export default ({ key, data }) => {
  const slug = data.fields.slug
  return (
    <PreviewBox key={key}>
      <Heading onClick={() => navigate(slug)} css={css`
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      `}>
        {data.frontmatter.title}
      </Heading>
      <span css={css`
        font-size: 0.7rem;
      `}>
        <span css={css`margin-right: 15px;`}>
          {dayjs(data.frontmatter.datePublished).format('DD MMMM YYYY')}
        </span>
        <IconEyeglasses css={css`
          position: relative;
          top: 0.3rem;
          font-size: 1.1rem;
          margin-right: 5px;
        `} />{data.timeToRead} min
      </span>
      <p css={css`margin: 30px 0;`}>{data.frontmatter.teaser}</p>

      <Link css={css`
        ${linkReset};
        font-family: 'JetBrainsMono-Regular';
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 0.12rem;
        vertical-align: middle;
        &:hover {
          opacity: 0.8;
        }
      `} to={slug}>
        read
        <IconRightArrow css={css`
          margin: 0 5px 0 10px;
          font-size: 1rem;
          position: relative;
          top: 0.4rem;
        `}/>
      </Link>
    </PreviewBox>
  )
}