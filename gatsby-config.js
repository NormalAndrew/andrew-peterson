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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800,
              ratio: 1.77, // Optional, Defaults to 16/9 = 1.77
              related: false,  // Optional, Will remove related videos from the end of an embedded Youtube video
              noIframeBorder: true, // Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                }
              ] // Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            },
          },
        ]
      },
    },
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
