import React from "react"
import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/about"

export default () => {
    return (
        <div>
            <Nav />
            <main>
                <Hero />
                <About />
            </main>
        </div>
    )
}
