import React from "react";

import Layout from "../layouts";
import SEO from "../components/seo";
import Events from "../components/Events";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello World!</h1>
      <p>Welcome to the site.</p>
      <Events />
    </Layout>
  );
};

export default IndexPage;
