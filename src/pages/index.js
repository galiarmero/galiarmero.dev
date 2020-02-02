import React from "react"
import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/about"
import BlogPosts from "../components/blog-posts"

export default () => {
    return (
        <div>
            <Nav />
            <main>
                <Hero />
                <About />
                <BlogPosts />
            </main>
        </div>
    )
}
