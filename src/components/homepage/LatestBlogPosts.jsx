import React, { useState } from "react"
import IntersectionObserver from "@researchgate/react-intersection-observer"
import SectionHeading from "./SectionHeading"
import PostPreview from "./PostPreview"
import { appearanceObserverOpts } from "../../utils"

const TRANSITION_TIMING = "cubic-bezier(0.645, 0.045, 0.355, 1)"

const LatestBlogPosts = ({
  handleIntersection,
  posts,
  intersectionThreshold,
}) => {
  const initialPostAppearance = posts.reduce(
    (obj, post) => ({ ...obj, [post.slug]: false }),
    {}
  )
  const [hasPostAppeared, setPostAppeared] = useState(initialPostAppearance)
  const [hasHeaderAppeared, setHeaderAppeared] = useState(false)

  const postObserverOpts = (slug) => ({
    onChange: ({ isIntersecting }) => {
      if (isIntersecting) {
        setPostAppeared((prev) => ({ ...prev, [slug]: true }))
      }
    },
    threshold: 0.4,
  })

  const sectionObserverOpts = {
    onChange: ({ time, isIntersecting, intersectionRatio }) => {
      handleIntersection({
        latestBlogPosts: { time, isIntersecting, intersectionRatio },
      })
    },
    threshold: intersectionThreshold,
  }

  return (
    <IntersectionObserver {...sectionObserverOpts}>
      <section id="latestBlogPosts" className="hp-section">
        <IntersectionObserver {...appearanceObserverOpts(setHeaderAppeared, 0)}>
          <span>
            <SectionHeading hasNotAppeared={!hasHeaderAppeared}>
              Latest Blog Posts
            </SectionHeading>
          </span>
        </IntersectionObserver>

        <div className="hp-section-body">
          <div className="auto-fit-grid">
            {posts.map((post) => (
              <IntersectionObserver
                key={post.slug}
                {...postObserverOpts(post.slug)}
              >
                <div
                  style={{
                    opacity: hasPostAppeared[post.slug] ? 1 : 0,
                    transform: hasPostAppeared[post.slug]
                      ? "translateY(0px)"
                      : "translateY(40px)",
                    transition: `opacity 300ms ${TRANSITION_TIMING}, transform 300ms ${TRANSITION_TIMING}`,
                    transitionDelay: "200ms",
                  }}
                >
                  <PostPreview
                    slug={post.slug}
                    title={post.title}
                    datePublished={post.datePublished}
                    timeToRead={post.timeToRead}
                    teaser={post.teaser}
                  />
                </div>
              </IntersectionObserver>
            ))}
          </div>
          <button
            className="hp-button"
            onClick={() => (window.location = "/blog")}
            style={{ margin: "42px auto 0" }}
          >
            View More
          </button>
        </div>
      </section>
    </IntersectionObserver>
  )
}

export default LatestBlogPosts
