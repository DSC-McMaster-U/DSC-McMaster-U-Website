import React from "react";

import Layout from "../layouts";
import SEO from "../components/seo";
import Splash from "../components/splash";
import Content from './../asset/content.json';

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
