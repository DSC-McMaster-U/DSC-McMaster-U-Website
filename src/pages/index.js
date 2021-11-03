import React from "react";
import Layout from "../layouts";
import About from "../components/About";
import Socials from "../components/Socials";
import Splash from "../components/Splash";
import Events from "../components/Events";
import Navbar from "../components/Navbar";
import Promotion from "../components/Promotion";
const links = ["About", "Events", "Socials"];
const IndexPage = () => {
  return (
    <>
      <Layout page="Home">
        <Navbar links={links} />
        <Splash />
        <About />
        <Events />
        <Socials last />
      </Layout>
    </>
  );
};

export default IndexPage;
