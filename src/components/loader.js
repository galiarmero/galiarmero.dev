import React, { useEffect } from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"

import Logo from "../../static/icons/logo.svg"

const LoaderStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-rendering: optimizeLegibility;
      }

      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    `}
  />
)

const VerticallyCenteredBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  background: var(--lighterBgColor);

  * {
    transition: all 0.3s;
  }

  :after {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em;
  }
`

const VerticallyCenteredContent = styled.div`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-size: 0;
`

const LoaderCircle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.4);
  margin-left: -60px;
  margin-top: -60px;
`

const LoaderLineMask = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60px;
  height: 120px;
  margin-left: -60px;
  margin-top: -60px;
  overflow: hidden;
  transform-origin: 60px 60px;
  mask-image: linear-gradient(top, #fff, rgba(255, 255, 255, 0));
  -webkit-mask-image: -webkit-linear-gradient(
    top,
    #fff,
    rgba(255, 255, 255, 0)
  );
  animation: rotate 1.2s infinite linear;
`

const LoaderLine = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 1);
`

const Loader = ({ finishLoading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => finishLoading(), 800)
    return () => clearTimeout(timeout)
  }, [finishLoading])

  return (
    <div>
      <LoaderStyle />
      <VerticallyCenteredBox>
        <VerticallyCenteredContent>
          <LoaderCircle />
          <LoaderLineMask>
            <LoaderLine />
          </LoaderLineMask>
          <Logo
            css={css`
              height: 60px;
              width: 32px;
            `}
          />
        </VerticallyCenteredContent>
      </VerticallyCenteredBox>
    </div>
  )
}

export default Loader
