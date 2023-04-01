/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: `M.K`,
    description: `2020年から2023年までの制作実績サイトです。`,
    author: `Mai Kotou`,
    user: { name: 'M.kotou', email: 'm.kotou0715@gmail.com' },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.GATSBY_ADOBE_FONT_PROJECT_ID,
        },
      },
    },
    {
      resolve: 'gatsby-remark-external-links',
      options: {
        target: '_blank',
        rel: 'noopener',
      },
    },
      `gatsby-plugin-transition-link`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-remark-images`,
      `gatsby-plugin-sharp`,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`,`.md`],
          gatsbyRemarkPlugins: [
          {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 680,
                linkImagesToOriginal: true,
              },
            },
        ],
      },
    },
  ],
}
