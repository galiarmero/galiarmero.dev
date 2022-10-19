import React, { useState } from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Linkify from "linkify-react"
import "linkify-plugin-mention"
import "linkify-plugin-hashtag"
import styled from "@emotion/styled"
import Twemoji from "react-twemoji"

import Helmet from "../components/helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import PairLabel from "../components/pair-label"
import PuzzleScoresNav from "../components/puzzle-scores-nav"
// import Engage from "../components/engage"
import { Main, Masonry, Card } from "../styles/Containers"
import GlobalStyles from "../styles/GlobalStyles"
import DailyPuzzleStyles from "../styles/DailyPuzzleStyles"
import { colors, breakpoint } from "../styles/theme"
import siteData from "../config/site-data.yml"
import { formatDateWithDayName } from "../utils"

const { profile, siteBaseUrl } = siteData
const HEADER_HEIGHT = 75
const PUZZLE_ORDER = [
  "wordle",
  "quordle",
  "worldle",
  "saltong",
  "saltong-mini",
  "waffle",
]
const PUZZLE_LABELS = {
  wordle: "Wordle",
  quordle: "Quordle",
  worldle: "Worldle",
  saltong: "Saltong",
  "saltong-mini": "Saltong Mini",
  waffle: "Waffle",
}

const PuzzleBox = styled(Card)`
  justify-content: flex-start;
  grid-row: span ${(props) => props.rowSpan};
  padding-top: 28px;
  padding-bottom: 28px;
`

const DailyPuzzle = ({ data, pageContext }) => {
  const [isMenuOpen, toggleMenu] = useState(false)

  const puzzles = data.allPuzzleScores.edges.sort((a, b) => {
    return (
      PUZZLE_ORDER.indexOf(a.node.puzzle) - PUZZLE_ORDER.indexOf(b.node.puzzle)
    )
  })
  const { slug, date, prevDate, nextDate, prevSlug, nextSlug } = pageContext
  const displayDate = formatDateWithDayName(date)

  return (
    <div>
      <Helmet
        pageTitle={`Puzzle Scores - ${displayDate} · ${profile.name}`}
        title={`Puzzle Scores for ${displayDate} · ${profile.name}`}
        description="Puzzles iz life"
        pageUrl={`${siteBaseUrl}${slug}`}
        // sharingCard={`${siteBaseUrl}${sharingCard}`}
        // sharingAltText={`${profile.greeting} ${profile.name}. ${profile.tagline}`}
      />
      <GlobalStyles />
      <DailyPuzzleStyles />
      <Header
        currentPage={`/puzzle-scores`}
        height={HEADER_HEIGHT}
        navBackground={colors.lighterBg}
        hasMenu={true}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => toggleMenu(!isMenuOpen)}
      />
      <Main marginTop={`${HEADER_HEIGHT}px`}>
        <div
          css={css`
            margin: 35px 0 60px;

            ${breakpoint.media9} {
              margin: 50px 0 70px;
            }
          `}
        >
          <PuzzleScoresNav
            date={date}
            prevDate={prevDate}
            nextDate={nextDate}
            prevSlug={prevSlug}
            nextSlug={nextSlug}
          />
        </div>

        <Masonry marginTop={`50px`}>
          {puzzles.length > 0 &&
            puzzles.map(({ node }, i) => (
              <PuzzleBox key={node.id} rowSpan={calculateSpan(node.resultText)}>
                <PairLabel
                  left={PUZZLE_LABELS[node.puzzle]}
                  right={node.dayNumber}
                />
                <div class="puzzle-score">
                  {renderPuzzleResult(node.puzzle, node.resultText)}
                </div>
              </PuzzleBox>
            ))}
        </Masonry>
      </Main>
      <Footer />
    </div>
  )
}

const renderPuzzleResult = (puzzle, text) => {
  text = overridePuzzleResult(puzzle, text)
  const lines = text.split("\n")
  const linkifyOpts = {
    formatHref: {
      mention: (href) => `https://twitter.com/${href}`,
      hashtag: (href) => `https://twitter.com/hashtag/${href.substr(1)}`,
    },
    attributes: {
      target: "_blank",
    },
  }
  const result = lines.map((line) => (
    <Linkify options={linkifyOpts}>
      <Twemoji
        options={{ className: "twemoji-puzzle", folder: "svg", ext: ".svg" }}
      >
        {line}
      </Twemoji>
    </Linkify>
  ))
  return result
}

const overridePuzzleResult = (puzzle, text) => {
  if (puzzle === "wordle") {
    return text.replaceAll("⬛", "⬜")
  }

  return text
}

const calculateSpan = (text) => {
  return text.split("\n").length + 5
}

export default DailyPuzzle

export const query = graphql`
  query loadPuzzleScores($date: Date) {
    allPuzzleScores(filter: { datePlayed: { eq: $date } }) {
      edges {
        node {
          id
          datePlayed
          puzzle
          dayNumber
          resultText
        }
      }
    }
  }
`
