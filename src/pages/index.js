import React from "react";
import Layout from "../layouts";
import SEO from "../components/seo";
import Navbar from "./Navbar";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar/>
  </Layout>
);

export default IndexPage;