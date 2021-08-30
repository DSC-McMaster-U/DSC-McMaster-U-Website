import React from "react";
import Layout from "../layouts";
import About from "../components/About";
import Media from "../components/media";
import Splash from "../components/Splash";
import Events from "../components/Events";
import Navbar from "../components/Navbar";

const links = ["About", "Events", "Media"];
const IndexPage = () => {
  return (
    <Layout page="Home">
      <Navbar links={links} />
      <Splash />
      <About />
      <Events />
      <Media last />
    </Layout>
  );
};

export default IndexPage;
