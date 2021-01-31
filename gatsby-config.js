const { blue } = require("./src/utils/colors");
module.exports = {
  siteMetadata: {
    title: `McMaster Developer Student Club`,
    description: `McMaster Student Developer Club, an inclusive and collaborative environment that helps students bridge the gap between theory and practice.`,
    author: `McMaster DSC`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        analyzerPort: 3000,
        production: true,
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
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
  ],
};
