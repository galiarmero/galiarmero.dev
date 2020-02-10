import React from "react"
import { css } from "@emotion/core"

export default (props) => {
    return (
        <h1 css={css`
            color: ${props.fontColor};
            background: ${props.bgColor};
            width: 520px;
            padding: 75px;
            font-size: 50px;
            font-family: '${props.font}', sans-serif;
        `}>
            {props.children}
        </h1>
    )
}