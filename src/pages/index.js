import React from "react";
import Layout from "../layouts";
import SEO from "../components/seo";
import Media from "../components/media";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello World!</h1>
      <p>Welcome to the site.</p>
      <Media></Media>
    </Layout>
  );
};

export default IndexPage;
