import React from "react";
import Layout from "../layouts";
import SEO from "../components/Seo";
import Media from "../components/Media";
import Splash from "../components/Splash";
import Events from "../components/Events";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Splash />
      <Events />
      <Media></Media>
    </Layout>
  );
};

export default IndexPage;
