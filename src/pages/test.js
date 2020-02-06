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
            <TextWithBg bgColor="#1e1e2c" fontColor="#285bd4">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#1e1e2c" fontColor="#85EDEE">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#1e1e2c" fontColor="#33E1ED">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#1e1e2c" fontColor="#0253b3">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#1e1e2c" fontColor="#479aff">Gali Armero</TextWithBg>
        </div>

        <div css={css`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        `}>
            <TextWithBg bgColor="#141c2d" fontColor="#285bd4">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#141c2d" fontColor="#85EDEE">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#141c2d" fontColor="#33E1ED">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#141c2d" fontColor="#0253b3">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#141c2d" fontColor="#479aff">Gali Armero</TextWithBg>
        </div>

        <div css={css`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        `}>
            <TextWithBg bgColor="#020c23" fontColor="#285bd4">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#020c23" fontColor="#85EDEE">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#020c23" fontColor="#33E1ED">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#020c23" fontColor="#0253b3">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#020c23" fontColor="#479aff">Gali Armero</TextWithBg>
        </div>
    </div>
  )
}
