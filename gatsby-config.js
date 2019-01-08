
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
 })

module.exports = {
    siteMetadata: {
      title: 'How Neighborly',
    },
  
    plugins: [
      'gatsby-plugin-react-helmet',

      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'How Neighborly App',
          short_name: 'How-Neighorly',
          start_url: '/',
          background_color: '#ececec',
          theme_color: '#ff1e4e',
          display: 'standalone',
          splash_screen: 'icons',
          icon: 'src/images/hn-icon.jpg', // This path is relative to the root of the site.
        },
      },

      { resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/components/utils/typography.js`,
      },
    },
      
      'gatsby-plugin-offline',
    ],
  }

