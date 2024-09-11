const path = require("path");

module.exports = {
  siteMetadata: {
    title: `GDSC McMaster U`,
    description: `McMaster Student Developer Club, an inclusive and collaborative environment that helps students bridge the gap between theory and practice.`,
    author: `McMaster DSC`,
  },
  plugins: [
    // Existing configuration
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`, // Existing images path
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/_content/events`, // Existing events path
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newsletters`,
        path: `${__dirname}/_content/newsletters`, // Existing newsletters path
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Developer Student Club McMaster U",
        short_name: "DSC McMaster U",
        start_url: "/",
        background_color: "#4285F4", // Existing theme color
        theme_color: "#4285F4",
        display: "minimal-ui",
        icon: "static/images/icon.png", // Existing icon path
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-transformer-json`, // Existing transformer for JSON files
    `gatsby-transformer-sharp`, // Required for image processing
    `gatsby-plugin-sharp`, // Required for image transformations

    // New plugin for handling images in Markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false, // Prevent linking to full-size image
              showCaptions: true, // Optionally show captions for images
              backgroundColor: "transparent", // Background color of images
              withWebp: true, // Enable WebP support
            },
          },
        ],
      },
    },

    // Existing Netlify CMS plugin
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        // Existing Netlify CMS options
      },
    },
  ],
};
