/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Andrew Peterson Portfolio`,
    description: `Creative Engineer, Adventurous Endurance Athlete, Full-Stack Wannabe...a Portfolio`,
    author: `Andrew Peterson`,
    keywords: ["Mechanical Engineer", "Solidworks", "CAD", "OnShape", "Developer", "React", "React Native", "Fullstack", "GraphQL", "Gatsby", "Adventure Racing", "Endurance", "Mountain Biking", "Portfolio"]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/portfolio`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rubik`,
            variants: [`400`]
          },
        ],
      },
    },
  ],
}
