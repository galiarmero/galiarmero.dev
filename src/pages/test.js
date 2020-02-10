import React from "react"
import TextWithBg from "../components/textwithbg"
import { Global, css } from "@emotion/core"

export default () => {
  return (
    <div>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          @font-face {
            font-family: "Barlow-900";
            src: url(https://fonts.googleapis.com/css?family=Barlow:900&display=swap)
          }
        `}
      />
        <div css={css`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        `}>
          <TextWithBg bgColor="#1b1f23" fontColor="#2188ff" font="Barlow-900">Gali Armero</TextWithBg>
          <TextWithBg bgColor="#15181c" fontColor="#2188ff" font="Barlow-900">Gali Armero</TextWithBg>
          <TextWithBg bgColor="#12151a" fontColor="#2188ff" font="Barlow-900">Gali Armero</TextWithBg>
          <TextWithBg bgColor="#011223" fontColor="#2BD6F2" font="Barlow-900">Gali Armero</TextWithBg>
        </div>
    </div>
  )
}
