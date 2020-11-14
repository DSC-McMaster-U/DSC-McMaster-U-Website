import React from "react";
import Layout from "../layouts";
import SEO from "../components/seo";
import Media from "../components/media";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Media></Media>
    </Layout>
  );
};

export default IndexPage;
