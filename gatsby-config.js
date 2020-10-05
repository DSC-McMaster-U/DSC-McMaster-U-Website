module.exports = {
  siteMetadata: {
    title: `McMaster Developer Student Club`,
    description: `McMaster Student Developer Club, An inclusive and collaborative environment that helps students bridge the gap between theory and practice`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-styled-components`
  ],
};
