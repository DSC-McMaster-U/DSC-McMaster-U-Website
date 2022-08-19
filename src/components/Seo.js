import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <title>{defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={site.siteMetadata?.author || ``} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="1 days" />
      <meta name="distribution" content="global" />
      <meta name="language" content="en" />
      <meta
        name="copyright"
        content="Copyright © 2020 McMaster Developer Student Club"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={metaDescription} />

      <meta name="og:title" content={defaultTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />

      <link
        href="https://fonts.googleapis.com/css?family=Google+Sans:400,500,700|Material+Icons"
        rel="stylesheet"
        type="text/css"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
        crossorigin="anonymous"
      />
    </>
  );
};

export default Seo;
