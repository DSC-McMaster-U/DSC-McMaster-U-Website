import React from "react";
import Layout from "../layouts";
import SEO from "../components/Seo";
import Media from "../components/Media";
import Splash from "../components/Splash";
import Events from "../components/Events";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Splash />
      <Events />
      <Media></Media>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
