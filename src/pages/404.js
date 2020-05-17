import React from "react"
import { navigate } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Helmet from "../components/helmet"
import Header from "../components/header"
import { Main } from "../styles/Containers"
import Button from "../styles/Buttons"
import GlobalStyles from "../styles/GlobalStyles"
import { colors, breakpoint } from "../styles/theme"

import { indexMeta } from "../config/site-meta.yml"

export default ({ data }) => {
  const author = indexMeta.name
  const headerHeight = 75

  const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
  `

  const textStyle = (sizeDivisor = 1) => css`
    color: ${props => props.color || `inherit`};
    font-size: calc(6rem / ${sizeDivisor});
    ${breakpoint.media4} {
      font-size: calc(7rem / ${sizeDivisor});
    }

    ${breakpoint.media7} {
      font-size: calc(9rem / ${sizeDivisor});
    }

    ${breakpoint.media12} {
      font-size: calc(11rem / ${sizeDivisor});
    }
  `
  const Divider = styled.div`
    width: 20%;
    height: 3px;
    background: var(--accentColor);
    margin: 0.5rem 0 1.4rem;
  `

  return (
    <div>
      <Helmet title={`404 - Page Not Found · ${author}`} />
      <GlobalStyles />
      <Header height={headerHeight} navBackground={colors.lighterBg} />
      <Main>
        <CenteredContainer>
          <h1
            css={css`
              ${textStyle()};
            `}
          >404</h1>
          <Divider />

          <span
            css={css`
              margin-bottom: 3rem;
              ${textStyle(4)};
            `}
          >Page Not Found</span>
          <Button onClick={() => navigate(`/`)}>Go Home</Button>
        </CenteredContainer>
      </Main>
    </div>
  )
}
