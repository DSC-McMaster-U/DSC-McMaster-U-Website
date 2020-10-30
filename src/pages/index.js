import React from "react";

import Layout from "../layouts";
import SEO from "../components/seo";
import About from "../components/About";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello World!</h1>
      <p>Welcome to the site.</p>
      <About />
    </Layout>
  );
};

export default IndexPage;
