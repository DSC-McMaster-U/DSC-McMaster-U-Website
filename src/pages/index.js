import React from "react";
import Layout from "../layouts";
import SEO from "../components/Seo";
import Media from "../components/media";
import Splash from "../components/Splash";
import Events from "../components/Events";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Splash subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ligula, hendrerit eu turpis id, feugiat mattis nulla. Integer pretium, sem id vestibulum vestibulum, magna est elementum mauris, id sollicitudin eros libero vitae enim." />
      <Events />
      <Media></Media>
    </Layout>
  );
};

export default IndexPage;
