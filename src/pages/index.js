import React from "react";

import Layout from "../layouts";
import SEO from "../components/seo";
import Splash from "../components/splash";
import Content from './../asset/content.json';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hello World!</h1>
    <p>Welcome to the site.</p> */}
    <Splash title={Content.splashTitle} 
            subTitle={Content.splashSubTitle}
            />
  </Layout>
);

export default IndexPage;
