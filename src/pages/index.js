import React from "react";

import Layout from "../layouts";
import SEO from "../components/seo";
import Splash from "../components/splash";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello World!</h1>
      <p>Welcome to the site.</p>
      <Splash title="Google Student Club McMaster U"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor ligula, hendrerit eu turpis id, feugiat mattis nulla. Integer pretium, sem id vestibulum vestibulum, magna est elementum mauris, id sollicitudin eros libero vitae enim."
      />
    </Layout>
  );
};

export default IndexPage;
