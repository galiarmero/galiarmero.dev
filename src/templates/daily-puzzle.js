import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Twemoji from "react-twemoji"

import Helmet from "../components/helmet"
import Header from "../components/header"
import Footer from "../components/footer"
// import Engage from "../components/engage"
import { Main, AutoFitGrid } from "../styles/Containers"
import GlobalStyles from "../styles/GlobalStyles"
import DailyPuzzleStyles from "../styles/DailyPuzzleStyles"
import { SectionHeading } from "../styles/Headings"
import { colors, breakpoint } from "../styles/theme"
import siteData from "../config/site-data.yml"
import { formatDateWithDayName, newlineToBr } from "../utils"

const { profile, siteBaseUrl } = siteData
const HEADER_HEIGHT = 75

const DailyPuzzle = ({ data, pageContext }) => {
  const puzzles = data.allPuzzleScores.edges
  const { slug, date } = pageContext
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
      <Header height={HEADER_HEIGHT} navBackground={colors.lighterBg} />
      <Main marginTop={`${HEADER_HEIGHT}px`}>
        <div
          css={css`
            margin: 35px 0 60px;

            ${breakpoint.media9} {
              margin: 70px 0;
            }
          `}
        >
          <SectionHeading fontSize={`1rem`}>
            Puzzle Scores for {date}
          </SectionHeading>
        </div>

        <AutoFitGrid marginTop={`50px`}>
          {puzzles.length > 0 &&
            puzzles.map(({ node }, i) => (
              <div key={node.id}>
                <h3>
                  {node.puzzle} {node.dayNumber}
                </h3>
                <div class="puzzle-score">
                  {renderPuzzleResult(node.resultText)}
                </div>
              </div>
            ))}
        </AutoFitGrid>
      </Main>
      <Footer />
    </div>
  )
}

const renderPuzzleResult = (text) => {
  const lines = text.split("\n")
  const result = lines.map((line) => (
    <Twemoji
      options={{ className: "twemoji-puzzle", folder: "svg", ext: ".svg" }}
    >
      {line}
    </Twemoji>
  ))
  return result
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
