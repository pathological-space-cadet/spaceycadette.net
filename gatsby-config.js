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
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-transformer-remark",
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-ramda",
  ],
}
