module.exports = {
  siteMetadata: {
    title: `Gali Armero`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/content/blog`,
      },
    },
  ],
}
