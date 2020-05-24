import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa"
import { TwitterShareButton, FacebookShareButton, LinkedinShareButton } from "react-share"

import { indexMeta, siteUrl, socialMediaMeta } from "../config/site-meta.yml"

const Box = styled.div`
  padding: 0.9rem 0 0.7rem;
  display: flex;
  flex-direction: column;
`

const BoxLabel = styled.span`
  color: var(--headingColor);
  font-size: 0.8rem;
  text-transform: uppercase;
`

export default ({ slug, title, teaser, editUrl }) => {

  const url = `${siteUrl}${slug}`
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(url)}`

  const iconHoverStyle = css`
    &:hover {
      color: var(--accentColor);
    }
  `

  return (
    <div>
      <Box>
        <BoxLabel>Share this post</BoxLabel>

        <div css={css`
          font-size: 1.5rem;
          margin: 0.3rem 0;
          line-height: 0.8;
        `}>
          <TwitterShareButton
            url={url}
            title={title}
            via={socialMediaMeta.find(({ id }) => id === `twitter`).username}
            css={css`margin-right: 12px;`}
          >
            <FaTwitter css={iconHoverStyle} />
          </TwitterShareButton>

          { /* TODO: Fix not working share button */}
          <LinkedinShareButton
            url={url}
            title={title}
            summary={teaser}
            source={indexMeta.name}
            css={css`margin-right: 12px;`}
          >
            <FaLinkedin css={iconHoverStyle} />
          </LinkedinShareButton>

          <FacebookShareButton
            url={url}
          >
            <FaFacebookSquare css={iconHoverStyle} />
          </FacebookShareButton>
        </div>
      </Box>

      <Box>
        <BoxLabel>Contribute to the discussion</BoxLabel>
        <div css={css`
          font-size: 0.9rem;
          margin: 0.3rem 0;
        `}>
          <a target="_blank" rel="noopener noreferrer" href={discussUrl}>Discuss on Twitter</a>
          &nbsp;&middot;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href={editUrl}>Edit on GitHub</a>
        </div>
      </Box>
    </div>
  )
}