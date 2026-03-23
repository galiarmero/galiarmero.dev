import React from "react"
import IntersectionObserver from "@researchgate/react-intersection-observer"

const Footer = ({
  onVisibilityChange,
  projectSourceUrl,
  profileName,
  copyrightYear,
}) => {
  const content = (
    <footer className="home-footer">
      <span>
        Built with <a href="https://astro.build/">Astro</a> · Hosted on{" "}
        <a href="https://www.netlify.com/">Netlify</a>
      </span>
      <span>
        <a href={projectSourceUrl}>Crafted by {profileName}</a>
      </span>
      <span>&copy; {copyrightYear}. All Rights Reserved.</span>
    </footer>
  )

  if (onVisibilityChange) {
    const options = {
      onChange: ({ isIntersecting }) => {
        onVisibilityChange(isIntersecting)
      },
    }

    return <IntersectionObserver {...options}>{content}</IntersectionObserver>
  }

  return content
}

export default Footer
