import React from "react"
import Linkify from "linkify-react"
import "linkify-plugin-mention"
import "linkify-plugin-hashtag"
import TwemojiModule from "react-twemoji"

const Twemoji = TwemojiModule.default || TwemojiModule

const linkifyOpts = {
  formatHref: {
    mention: (href) => `https://twitter.com/${href}`,
    hashtag: (href) => `https://twitter.com/hashtag/${href.slice(1)}`,
  },
  attributes: {
    target: "_blank",
    rel: "noopener noreferrer",
  },
}

const twemojiOpts = {
  className: "twemoji-puzzle",
  folder: "svg",
  ext: ".svg",
  base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/",
}

const PuzzleResult = ({ resultText }) => {
  const lines = resultText.split("\n")

  return (
    <div className="puzzle-score">
      {lines.map((line, i) => (
        <Linkify key={i} options={linkifyOpts}>
          <Twemoji options={twemojiOpts}>{line}</Twemoji>
        </Linkify>
      ))}
    </div>
  )
}

export default PuzzleResult
