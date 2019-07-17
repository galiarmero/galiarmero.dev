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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              quality: 100,
            }
          },
        ]
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-twitter`,
  ],
}
