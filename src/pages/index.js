import React from "react";
import Layout from "../layouts";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello World!</h1>
      <p>Welcome to the site.</p>      
    </Layout>
  );
};

export default IndexPage;
