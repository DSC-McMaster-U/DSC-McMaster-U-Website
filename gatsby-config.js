const { blue } = require("./src/utils/colors");
module.exports = {
  siteMetadata: {
    title: `GDSC McMaster U`,
    description: `McMaster Student Developer Club, an inclusive and collaborative environment that helps students bridge the gap between theory and practice.`,
    author: `McMaster DSC`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/_content/events`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newsletters`,
        path: `${__dirname}/_content/newsletters`, // Specify the folder for your Markdown files
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Developer Student Club McMaster U",
        short_name: "DSC McMaster U",
        start_url: "/",
        background_color: blue[500],
        theme_color: blue[500],
        display: "minimal-ui",
        icon: "static/images/icon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /**
         * One convention is to place your Netlify CMS customization code in a
         * `src/cms` directory.
         */
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
  ],
};
