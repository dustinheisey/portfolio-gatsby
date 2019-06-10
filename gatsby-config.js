const Config = require('./config/meta')

module.exports = {
  siteMetadata: {
    siteUrl: Config.siteUrl,
    siteTitle: Config.siteTitle,
    siteTitleShort: Config.siteTitleShort,
    siteDescription: Config.siteDescription
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/media/images`,
        name: 'images'
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/_posts/blog`,
    //     name: 'blog'
    //   }
    // },
    // 'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: './config/typography'
      }
    },

    'gatsby-plugin-eslint',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /inline/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: Config.googleAnalyticsId
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: Config.siteUrl
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: Config.manifest.themeColor,
        showSpinner: false
      }
    },
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: Config.siteTitle,
        short_name: Config.siteTitleShort,
        description: Config.siteDescription,
        start_url: '/',
        background_color: Config.manifest.backgroundColor,
        theme_color: Config.manifest.themeColor,
        display: 'standalone',
        icon: Config.logo
      }
    }
  ]
}
