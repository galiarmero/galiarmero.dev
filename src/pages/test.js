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
            <TextWithBg bgColor="#1e1e2c" fontColor="#285bd4" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#1e1e2c" fontColor="#85EDEE" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#1e1e2c" fontColor="#33E1ED" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#1e1e2c" fontColor="#0253b3" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#1e1e2c" fontColor="#479aff" font="Barlow-900">Gali Armero</TextWithBg>
        </div>

        <div css={css`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        `}>
            <TextWithBg bgColor="#141c2d" fontColor="#285bd4" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#141c2d" fontColor="#85EDEE" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#141c2d" fontColor="#33E1ED" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#141c2d" fontColor="#0253b3" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#141c2d" fontColor="#479aff" font="Barlow-900">Gali Armero</TextWithBg>
        </div>

        <div css={css`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        `}>
            <TextWithBg bgColor="#020c23" fontColor="#285bd4" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#020c23" fontColor="#85EDEE" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#020c23" fontColor="#33E1ED" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#020c23" fontColor="#0253b3" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#020c23" fontColor="#479aff" font="Barlow-900">Gali Armero</TextWithBg>
        </div>

        <div css={css`
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        `}>
            <TextWithBg bgColor="#011223" fontColor="#1da1f2" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#011223" fontColor="#0b7ced" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#011223" fontColor="#⁣⁣⁣⁣⁣⁣285BD4" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#011223" fontColor="#18EBBF" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#011223" fontColor="#2BD6F2" font="Barlow-900">Gali Armero</TextWithBg>
        </div>

        <div css={css`
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        `}>
            <TextWithBg bgColor="#020e11" fontColor="#1da1f2" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#020e11" fontColor="#0b7ced" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#020e11" fontColor="#⁣⁣⁣⁣⁣⁣285BD4" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#020e11" fontColor="#18EBBF" font="Barlow-900">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#020e11" fontColor="#2BD6F2" font="Barlow-900">Gali Armero</TextWithBg>
        </div>
    </div>
  )
}
