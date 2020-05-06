import styled from "@emotion/styled"

import { breakpoint } from "../styles/theme"

export const Section = styled.section`
  margin: 0px auto;
  position: relative;
  padding: 75px 0px 125px;
  ${props => props.customCss ? props.customCss : null};
`

export const Main = styled.main`
  margin-top: ${props => props.marginTop ? props.marginTop : `0`};
  padding: 0 25px;
  overflow-x: hidden;

  ${breakpoint.media4} {
    padding: 0 12%;
  }

  ${breakpoint.media7} {
    padding: 0 16%;
  }

  ${breakpoint.media12} {
    padding: 0 22%;
  }
`

export const AutoFitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${ props => props.gap ? props.gap : `15px` };
  margin-top: ${ props => props.marginTop ? props.marginTop : `0` };
`