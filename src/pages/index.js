import React from "react"
import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/about"
import BlogPosts from "../components/blog-posts"
import Footer from "../components/footer"
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
        `}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <BlogPosts />
        <Footer />
      </main>
    </div>
  )
}
