import React from "react"
import { css } from "@emotion/core"

export default (props) => {
    return (
        <h1 css={css`
            color: ${props.fontColor};
            background: ${props.bgColor};
            width: 300px;
            padding: 40px;
            font-family: 'Barlow-900', sans-serif;
        `}>
            {props.children}
        </h1>
    )
}