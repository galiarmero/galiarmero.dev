import React, { useState } from "react"
import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/about"
import BlogPosts from "../components/blog-posts"
import Footer from "../components/footer"
import TextBgTester from "../components/textbgtester"
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
        `}
      />
      <Nav isMenuVisible={isMenuVisible} onBurgerClick={() => toggleMenu(!isMenuVisible)} />
      <main>
        <Hero />
        <About />
        <BlogPosts />
        <Footer />
        <TextBgTester />
      </main>
    </div>
  )
}
