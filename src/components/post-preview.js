import React from "react"
import { navigate, Link } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Card } from "../styles/Containers"
import PostDetails from "../components/post-details"
import { linkReset } from "../styles/Links"
import { BoxHeading } from "../styles/Headings"
import { breakpoint } from "../styles/theme"
import IconRightArrow from "../../static/icons/right-arrow.svg"

const PreviewBox = styled(Card)`
  justify-content: space-between;
`

const PostPreview = ({ key, data }) => {
  const slug = data.fields.slug
  return (
    <PreviewBox key={key}>
      <div>
        <BoxHeading
          onClick={() => navigate(slug)}
          css={css`
            cursor: pointer;
            &:hover {
              color: var(--accentColor);
            }
          `}
        >
          {data.frontmatter.title}
        </BoxHeading>
        <PostDetails
          datePublished={data.frontmatter.datePublished}
          timeToRead={data.timeToRead}
        />
        <p
          css={css`
            margin: 30px 0;
            font-size: 1rem;

            ${breakpoint.media9} {
              font-size: 1.05rem;
            }
          `}
        >
          {data.frontmatter.teaser}
        </p>
      </div>

      <Link
        css={css`
          ${linkReset};
          font-family: "JetBrainsMono-Regular";
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.05rem;
          vertical-align: middle;
          &:hover {
            svg {
              margin-left: 12px;
            }
          }
        `}
        to={slug}
      >
        read
        <IconRightArrow
          css={css`
            margin: 0 5px 0 7px;
            font-size: 1rem;
            position: relative;
            top: 0.4rem;
            transition: 100ms ease-out;
          `}
        />
      </Link>
    </PreviewBox>
  )
}

export default PostPreview
