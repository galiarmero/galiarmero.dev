import React from "react"
import { Helmet } from "react-helmet"

import { colors } from "../styles/theme"

export default (props) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{props.title}</title>

    <meta name="theme-color" content={colors.bg} />
    <meta name="msapplication-navbutton-color" content={colors.bg} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  </Helmet>
)
