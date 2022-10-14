import React from "react"
import { graphql } from "gatsby"

const DailyPuzzle = ({ data, pageContext }) => {
  const puzzles = data.allPuzzleScores.edges
  const { slug, date } = pageContext

  return (
    <div>
      <h1>{ date }</h1>

      {puzzles.length > 0 &&
        puzzles.map(({ node }, i) => (
          <div key={node.id}>
            <h3>{ node.puzzle } { node.dayNumber }</h3>
            <p>{ node.resultText }</p>
          </div>
        )
      )}
    </div>
  )
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
