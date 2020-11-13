import React from "react";
import Layout from "../layouts";
import About from "../components/About";
import SEO from "../components/Seo";
import Splash from "../components/Splash";
import Events from "../components/Events";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Splash subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ligula, hendrerit eu turpis id, feugiat mattis nulla. Integer pretium, sem id vestibulum vestibulum, magna est elementum mauris, id sollicitudin eros libero vitae enim." />
      <About />
      <Events />
    </Layout>
  );
};

export default IndexPage;
