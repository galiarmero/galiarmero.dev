import styled from "@emotion/styled"

import { breakpoint } from "../styles/theme"

export const Section = styled.section`
  margin: 0px auto;
  position: relative;
  padding: 75px 0px 125px;
`

export const Main = styled.main`
  margin-top: ${props => props.marginTop ? props.marginTop : `0`};
  padding: 0 25px;
  overflow-x: hidden;

  ${breakpoint.media4} {
    padding: 0 15%;
  }
`