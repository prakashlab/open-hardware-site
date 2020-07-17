require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Open Hardware Site",
    description: "Starter for open hardware project sites.",
    siteUrl: process.env.SITE_URL || "https://ethanjli.github.io",
  },
  pathPrefix: "/open-hardware-site",
  plugins: [
    `@reflexjs/gatsby-theme-base`,
    `@reflexjs/gatsby-theme-doc`,
    {
      resolve: `@reflexjs/gatsby-plugin-metatags`,
      options: {
        types: [
          `Page`,
          `Post`
        ],
        debug: false
      }
    },
    {
      resolve: `@reflexjs/gatsby-theme-post`,
      options: {
        basePath: "/updates",
        postsPerPage: 8
      }
    },
    `@reflexjs/gatsby-theme-styleguide`,
    {
      resolve: `gatsby-source-notionso`,
      options: {
        name: 'Doc',
        rootPageUrl: 'https://www.notion.so/Open-Hardware-Site-Notion-Docs-df9ac3ecdd14491d91253aaa0adadbce',
        debug: false
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}
