import styled from "@emotion/styled"

import { breakpoint, transitionTiming } from "../styles/theme"

export const Section = styled.section`
  margin: 0px auto;
  position: relative;
  padding: 75px 0px 125px;
  ${(props) => props.customCss || null};
`

export const SectionBody = styled.div`
  margin-top: ${(props) => props.marginTop || `100px`};
`

export const Main = styled.main`
  margin-top: ${(props) => props.marginTop || `0`};
  padding: 0 25px;
  overflow-x: hidden;

  ${breakpoint.media4} {
    padding: 0 12%;
  }

  ${breakpoint.media7} {
    padding: 0 16%;
  }

  ${breakpoint.media12} {
    padding: 0 20%;
  }
`

export const AutoFitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${(props) => props.gap || `15px`};
  margin-top: ${(props) => props.marginTop || `0`};
`

export const Masonry = styled(AutoFitGrid)`
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-auto-rows: min-content;
  grid-auto-flow: dense;
`

export const AppearingContainer = styled.div`
  opacity: ${(props) => (props.hasNotAppeared ? `0` : `1`)};
  transform: ${(props) =>
    props.hasNotAppeared ? `translateY(40px)` : `translateY(0px)`};
  transition: opacity 300ms ${transitionTiming},
    transform 300ms ${transitionTiming};
  transition-delay: 400ms;
  margin: 30px 0;
`

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  background: var(--lighterBgColor);
  border-radius: 4px;
  padding: 32px 25px;
  box-shadow: 0px 8px 11px -6px var(--boxShadowColor);
  height: 100%;
`
