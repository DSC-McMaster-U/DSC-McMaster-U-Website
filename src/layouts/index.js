import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/Seo";

import "./index.css";

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <SEO title={pageTitle} />
      <div className="flex flex-col min-h-screen pb-5">
        <Navbar disableLinks={pageTitle != "Home"} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
