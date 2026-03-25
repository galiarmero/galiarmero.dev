import React, { useState, useEffect } from "react"
import IntersectionObserver from "@researchgate/react-intersection-observer"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import IconLink from "./IconLink"

const TRANSITION_TIMING = "cubic-bezier(0.645, 0.045, 0.355, 1)"

const Hero = ({
  handleIntersection,
  greeting,
  name,
  tagline,
  headerHeight,
  socialMediaLinks,
  intersectionThreshold,
  isPageReady,
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (!isPageReady) return
    const timeout = setTimeout(() => setIsMounted(true), 200)
    return () => clearTimeout(timeout)
  }, [isPageReady])

  const onChange = ({ time, isIntersecting, intersectionRatio }) => {
    handleIntersection({
      hero: { time, isIntersecting, intersectionRatio },
    })
  }

  const greetingEl = (
    <div style={{ transitionDelay: "200ms" }}>
      <span className="hero-greeting">{greeting}</span>
    </div>
  )

  const nameEl = (
    <div style={{ transitionDelay: "350ms" }}>
      <h1 className="hero-large-heading">{name}.</h1>
    </div>
  )

  const taglineEl = (
    <div style={{ transitionDelay: "500ms" }}>
      <h1 className="hero-large-heading hero-tagline">{tagline}</h1>
    </div>
  )

  const items = [greetingEl, nameEl, taglineEl]

  const visibleSocials = socialMediaLinks.filter(({ isHidden }) => !isHidden)

  return (
    <IntersectionObserver onChange={onChange} threshold={intersectionThreshold}>
      <section
        id="hero"
        className="hero-section"
        style={{ marginTop: headerHeight, minHeight: "140vh" }}
      >
        <TransitionGroup component="div" className="hero-transition-group">
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                {item}
              </CSSTransition>
            ))}
        </TransitionGroup>

        <aside
          className="sideline-container sideline-left-container"
          style={{
            position: "absolute",
            bottom: isMounted ? "-40vh" : "-100vh",
          }}
        >
          <div className="sideline sideline-left">
            {isMounted && <div className="scroll-text">SCROLL</div>}
          </div>
        </aside>

        <aside
          className="sideline-container sideline-right-container"
          style={{
            position: "fixed",
            bottom: isMounted ? "0" : "-100vh",
          }}
        >
          <div className="sideline sideline-right">
            {isMounted &&
              visibleSocials.map(({ id, link }) => (
                <IconLink
                  key={id}
                  icon={id}
                  link={link}
                  className="hero-icon-link"
                />
              ))}
          </div>
        </aside>
      </section>
    </IntersectionObserver>
  )
}

export default Hero
