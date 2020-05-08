import styled from "@emotion/styled"

import { breakpoint } from "../styles/theme"

export const Section = styled.section`
  margin: 0px auto;
  position: relative;
  padding: 75px 0px 125px;
  ${props => props.customCss || null};
`

export const SectionBody = styled.div`
  margin-top: ${props => props.marginTop || `100px`};
`

export const Main = styled.main`
  margin-top: ${props => props.marginTop || `0`};
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
  gap: ${ props => props.gap || `15px` };
  margin-top: ${ props => props.marginTop || `0` };
`

export const AppearingContainer = styled.div`
  opacity: ${props => props.hasNotAppeared ? `0` : `1`};
  transform: ${props => props.hasNotAppeared ? `translateY(40px)` : `translateY(0px)`};
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 400ms;
  margin: 30px 0;
`