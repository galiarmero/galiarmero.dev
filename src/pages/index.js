import React, { useState } from "react"
import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/about"
import BlogPosts from "../components/blog-posts"
import Footer from "../components/footer"
import { Global, css } from "@emotion/core"

export default () => {
  const [isMenuVisible, toggleMenu] = useState(false)
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

          body {
            background: #15181c;
            color: #dbedff;
          }

          html {
            line-height: 1.6;
          }

          h1,
          h2,
          h3,
          h4,
          h5 {
            line-height: 1.2;
            color: #2188ff;
          }
        `}
      />
      <Nav isMenuVisible={isMenuVisible} onBurgerClick={() => toggleMenu(!isMenuVisible)} />
      <main css={css`
        padding: 0 25px;
      `}>
        <Hero />
        <About />
        <BlogPosts />
        <Footer />
      </main>
    </div>
  )
}
