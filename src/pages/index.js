import React from "react";
import Layout from "../layouts";
import SEO from "../components/seo";
import Navbar from "../components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import tw, { styled } from "twin.macro";

const Button = tw.button`
  bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Button>Activate</Button>
    <Navbar/>
  </Layout>
);

export default IndexPage;