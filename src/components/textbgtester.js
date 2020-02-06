import React from "react"
import { css } from "@emotion/core"
import TextWithBg from "./textwithbg"

export default () => {
    return (
        <div css={css`
            display: flex;
            justify-content: space-between;
        `}>
            <TextWithBg bgColor="#1e1e2c" fontColor="#285bd4">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#1e1e2c" fontColor="#85EDEE">Gali Armero</TextWithBg>
            <TextWithBg bgColor="#1e1e2c" fontColor="#33E1ED">Gali Armero</TextWithBg>
        </div>
    )
}