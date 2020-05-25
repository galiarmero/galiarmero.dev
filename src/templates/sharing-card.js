import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import GlobalStyles from "../styles/GlobalStyles"
import { nakedDomain } from "../config/site-meta.yml"
import Logo from "../../static/icons/logo.svg"

const Card = styled.div`
  width: ${props => props.width || 800}px;
  height: ${props => props.height || 400}px;
  background: var(--bgColor);
  padding: 75px 85px 70px;
`

const CardMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  height: 100%;
`

const CardBody = styled.div`
  padding: 0 12px 0;
`

const CardFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Domain = styled.span`
  font-size: 1.5rem;
  color: var(--headingColor);
  letter-spacing: 0.5px;
  margin-left: 10px;
`

const Greeting = styled.span`
  padding: 0 0 10px 3px;
  color: var(--accentColor);
  font-family: 'JetBrainsMono-Regular';
  font-size: 1.2rem;
`

const Name = styled.h1`
  font-size: 4.3rem;
`

const Tagline = styled.h1`
  font-family: 'Gilroy-Light', sans-serif;
  font-weight: 300;
  color: var(--textColor);
  font-size: 4.3rem;
`

export default() => {
  const width = 1200
  const height = 628

  return (
    <div>
      <GlobalStyles bgColor={`#fff`} />
      <Card width={width} height={height}>
        <CardMain>
          <CardBody>
            <Greeting>Hi, I'm</Greeting>
            <Name>Gali Armero.</Name>
            <Tagline>I build things that simplify.</Tagline>
          </CardBody>
          <CardFooter>
            <Logo
              css={css`
                height: 56px;
                width: 56px;
              `}
            />
            <Domain>{nakedDomain}</Domain>
          </CardFooter>
        </CardMain>
      </Card>
    </div>
  )
}