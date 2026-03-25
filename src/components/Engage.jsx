import React from "react"
import { FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa"
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share"

const Engage = ({
  slug,
  title,
  teaser,
  editUrl,
  siteBaseUrl,
  twitterUsername,
}) => {
  const url = `${siteBaseUrl}${slug}`
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(url)}`

  return (
    <div>
      <div style={boxStyle}>
        <span style={boxLabelStyle}>Share this post</span>
        <div
          style={{ fontSize: "1.5rem", margin: "0.3rem 0", lineHeight: "0.8" }}
        >
          <TwitterShareButton
            url={url}
            title={title}
            via={twitterUsername}
            style={{ marginRight: "12px" }}
          >
            <FaTwitter className="engage-icon" />
          </TwitterShareButton>
          <LinkedinShareButton
            url={url}
            title={title}
            summary={teaser}
            style={{ marginRight: "12px" }}
          >
            <FaLinkedin className="engage-icon" />
          </LinkedinShareButton>
          <FacebookShareButton url={url}>
            <FaFacebookSquare className="engage-icon" />
          </FacebookShareButton>
        </div>
      </div>

      <div style={boxStyle}>
        <span style={boxLabelStyle}>Contribute to the discussion</span>
        <div style={{ fontSize: "0.9rem", margin: "0.3rem 0" }}>
          <a target="_blank" rel="noopener noreferrer" href={discussUrl}>
            Discuss on Twitter
          </a>
          &nbsp;&middot;&nbsp;
          <a target="_blank" rel="noopener noreferrer" href={editUrl}>
            Edit on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

const boxStyle = {
  padding: "0.9rem 0 0.7rem",
  display: "flex",
  flexDirection: "column",
}

const boxLabelStyle = {
  color: "var(--headingColor)",
  fontSize: "0.8rem",
  textTransform: "uppercase",
}

export default Engage
