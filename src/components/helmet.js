import React from "react"
import { Helmet } from "react-helmet"

import { colors } from "../styles/theme"

export default (props) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{props.pageTitle}</title>

    <meta name="theme-color" content={colors.bg} />
    <meta name="msapplication-navbutton-color" content={colors.bg} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

    {/* Twitter meta tags */}
    <meta name="twitter:card"           content="summary_large_image" />
    <meta name="twitter:site"           content="@galiarmero" />
    <meta name="twitter:creator"        content="@galiarmero" />
    <meta name="twitter:title"          content={props.title} />
    <meta name="twitter:description"    content={props.description} />
    { props.sharingCard &&
      <meta name="twitter:image"        content={props.sharingCard} />
    }
    { props.sharingAltText &&
      <meta name="twitter:image:alt"    content={props.sharingAltText} />
    }
  </Helmet>
)
