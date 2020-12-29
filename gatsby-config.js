/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: `${__dirname}/content/articles/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "stories",
        path: `${__dirname}/content/stories/`,
      },
    },
    "gatsby-plugin-postcss",
  ],
}
