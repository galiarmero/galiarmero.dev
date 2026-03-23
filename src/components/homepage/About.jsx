import React, { useState } from "react"
import IntersectionObserver from "@researchgate/react-intersection-observer"
import SectionHeading from "./SectionHeading"
import { appearanceObserverOpts } from "../../utils"

const TRANSITION_TIMING = "cubic-bezier(0.645, 0.045, 0.355, 1)"

const About = ({
  handleIntersection,
  intro,
  body,
  techSkills,
  closing,
  intersectionThreshold,
}) => {
  const [hasHeaderAppeared, setHeaderAppeared] = useState(false)
  const [hasIntroAppeared, setIntroAppeared] = useState(false)
  const [hasDividerAppeared, setDividerAppeared] = useState(false)
  const [hasBodyAppeared, setBodyAppeared] = useState(false)
  const [hasClosingAppeared, setClosingAppeared] = useState(false)

  const sectionObserverOpts = {
    onChange: ({ time, isIntersecting, intersectionRatio }) => {
      handleIntersection({
        about: { time, isIntersecting, intersectionRatio },
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
      <section id="about" className="hp-section about-section">
        <IntersectionObserver {...appearanceObserverOpts(setHeaderAppeared, 0)}>
          <span>
            <SectionHeading hasNotAppeared={!hasHeaderAppeared}>
              About Me
            </SectionHeading>
          </span>
        </IntersectionObserver>

        <div className="hp-section-body">
          <IntersectionObserver
            {...appearanceObserverOpts(setIntroAppeared, 0.2)}
          >
            <div style={appearingStyle(hasIntroAppeared)}>
              <div dangerouslySetInnerHTML={{ __html: paragraphify(intro) }} />
            </div>
          </IntersectionObserver>

          <IntersectionObserver
            {...appearanceObserverOpts(setDividerAppeared, 0.2)}
          >
            <hr
              className="about-hr"
              style={{ width: hasDividerAppeared ? "100%" : "0.1px" }}
            />
          </IntersectionObserver>

          <IntersectionObserver {...appearanceObserverOpts(setBodyAppeared)}>
            <div style={appearingStyle(hasBodyAppeared)}>
              <div dangerouslySetInnerHTML={{ __html: paragraphify(body) }} />
              <ul className="tech-skills-list">
                {techSkills.map((skill, i) => (
                  <li key={i} className="bullet-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </IntersectionObserver>

          <IntersectionObserver {...appearanceObserverOpts(setClosingAppeared)}>
            <div style={appearingStyle(hasClosingAppeared)}>
              <div
                dangerouslySetInnerHTML={{ __html: paragraphify(closing) }}
              />
            </div>
          </IntersectionObserver>
        </div>
      </section>
    </IntersectionObserver>
  )
}

const paragraphify = (text) =>
  text
    .split("\n\n")
    .map((p) => `<p>${p}</p>`)
    .join("")

export default About
