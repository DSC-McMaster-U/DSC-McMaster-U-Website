import React from "react";
import Layout from "../layouts";
import About from "../components/About";
import Media from "../components/Media";
import Splash from "../components/Splash";
import Events from "../components/Events";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Splash />
      <About />
      <Events />
      <Media last />
    </Layout>
  );
};

export default IndexPage;
