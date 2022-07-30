import React from "react"
import { Helmet } from "react-helmet"

import { colors } from "../styles/theme"
import favicon from "../../static/favicon.svg"
import faviconPng from "../../static/favicon.png"
import faviconMask from "../../static/favicon-mask.svg"
import faviconAppleTouch from "../../static/favicon-apple-touch.png"

export default props => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{props.pageTitle}</title>

    <meta name="theme-color" content={colors.bg} />
    <meta name="msapplication-navbutton-color" content={colors.bg} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <link rel="icon" href={favicon} />
    <link rel="alternate icon" href={faviconPng} />
    <link rel="mask-icon" href={faviconMask} color={colors.bg} />
    <link rel="apple-touch-icon" href={faviconAppleTouch} />

    {/* Twitter meta tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@galiarmero" />
    <meta name="twitter:creator" content="@galiarmero" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.description} />
    {props.sharingCard && (
      <meta name="twitter:image" content={props.sharingCard} />
    )}
    {props.sharingAltText && (
      <meta name="twitter:image:alt" content={props.sharingAltText} />
    )}

    {/* Open Graph meta tags */}
    <meta property="og:url" content={props.pageUrl} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="fb:app_id" content={process.env.FB_APP_ID} />
    {props.sharingCard && (
      <meta property="og:image" content={props.sharingCard} />
    )}
  </Helmet>
)
