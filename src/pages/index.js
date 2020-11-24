import React from "react";
import Layout from "../layouts";
import About from "../components/About";
import SEO from "../components/Seo";
import Media from "../components/Media";
import Splash from "../components/Splash";
import Events from "../components/Events";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Navbar/>
      <Splash subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ligula, hendrerit eu turpis id, feugiat mattis nulla. Integer pretium, sem id vestibulum vestibulum, magna est elementum mauris, id sollicitudin eros libero vitae enim." />
      <About/>
      <Events/>
      <Media/>
    </Layout>
  );
};

export default IndexPage;
