import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer";
import SEO from "../components/Seo";

const Layout = ({ children, page }) => {
  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    // Initialize animation library
    const AOS = isBrowser ? require("aos") : undefined;
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    });
    AOS.refresh();
  });

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-screen-xl my-0 mx-auto py-0 px-4">
        <SEO title={page} />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string,
  disableLinks: PropTypes.bool,
};

Layout.defaultProps = {
  disableLinks: true,
};
export default Layout;
