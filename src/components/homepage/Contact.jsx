import React, { useState } from "react"
import IntersectionObserver from "@researchgate/react-intersection-observer"
import SectionHeading from "./SectionHeading"
import { appearanceObserverOpts } from "../../utils"

const TRANSITION_TIMING = "cubic-bezier(0.645, 0.045, 0.355, 1)"

const Contact = ({ handleIntersection, intersectionThreshold }) => {
  const [hasHeaderAppeared, setHeaderAppeared] = useState(false)
  const [hasBodyAppeared, setBodyAppeared] = useState(false)

  const sectionObserverOpts = {
    onChange: ({ time, isIntersecting, intersectionRatio }) => {
      handleIntersection({
        contact: { time, isIntersecting, intersectionRatio },
      })
    },
    threshold: intersectionThreshold,
  }

  const appearingStyle = (hasAppeared) => ({
    opacity: hasAppeared ? 1 : 0,
    transform: hasAppeared ? "translateY(0px)" : "translateY(40px)",
    transition: `opacity 300ms ${TRANSITION_TIMING}, transform 300ms ${TRANSITION_TIMING}`,
    transitionDelay: "400ms",
    margin: "30px 0",
  })

  return (
    <IntersectionObserver {...sectionObserverOpts}>
      <section id="contact" className="hp-section contact-section">
        <IntersectionObserver {...appearanceObserverOpts(setHeaderAppeared, 0)}>
          <span>
            <SectionHeading
              hasNotAppeared={!hasHeaderAppeared}
              isCentered={true}
            >
              Get In Touch
            </SectionHeading>
          </span>
        </IntersectionObserver>

        <div className="hp-section-body" style={{ marginTop: "80px" }}>
          <IntersectionObserver
            {...appearanceObserverOpts(setBodyAppeared, 0.1)}
          >
            <div style={appearingStyle(hasBodyAppeared)}>
              <p style={{ textAlign: "center" }}>
                Feel free to slide into my inbox if you have a question or just
                want to get in touch.
              </p>
              <button
                className="hp-button"
                onClick={() => (window.location = "mailto:hi@galiarmero.dev")}
                style={{ margin: "60px auto 0" }}
              >
                Say Hello
              </button>
            </div>
          </IntersectionObserver>
        </div>
      </section>
    </IntersectionObserver>
  )
}

export default Contact
