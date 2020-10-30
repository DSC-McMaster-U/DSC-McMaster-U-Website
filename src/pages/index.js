import React from "react";

import Layout from "../layouts";
import SEO from "../components/seo";
import About from "../components/About";
import About_Card from "../components/About_Card";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello World!</h1>
      <p>Welcome to the site.</p>
      <About />
      {/* <About_Card /> */}
    </Layout>
  );
};

export default IndexPage;
