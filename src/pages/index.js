import React, { useState } from "react"
import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/about"
import BlogPosts from "../components/blog-posts"
import Footer from "../components/footer"
import GlobalStyles from "../styles/GlobalStyles"

// TODO: Remove usage of css here if possible
import { css } from '@emotion/core'

export default () => {
  const [isMenuVisible, toggleMenu] = useState(false)
  const navHeight = '75px'
  return (
    <div>
      <GlobalStyles />
      <Nav isMenuVisible={isMenuVisible} navHeight={navHeight} onBurgerClick={() => toggleMenu(!isMenuVisible)} />
      <main css={css`
        padding: 0 25px;
      `}>
        <Hero heightOffset={navHeight} />
        <About />
        <BlogPosts />
        <Footer />
      </main>
    </div>
  )
}
