import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default({ data }) => {
  const post = data.markdownRemark
  // TODO: Fix images not loading
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <h5>{post.frontmatter.datePublished} | {post.timeToRead} minute read</h5>

      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  )
}


export const query = graphql`
  query loadBlogPost ($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        datePublished
        title
      }
      html
      timeToRead
    }
  }
`