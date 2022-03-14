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
      <Promotion action="Attend" link="https://gdsc.community.dev/e/m6695n/">
        <p className="text-white text-md font-bold ml-5 sm:text-lg">
          Git & Github Bootcamp!
          <span className="font-normal hidden md:inline">
            {" "}
            - Thur, Nov 4th 6:00pm - 7:00pm
          </span>
        </p>
      </Promotion>
      <Layout page="Home">
        <Navbar links={links} />
        <Splash />
        <Events />
        <About />
        <Socials last />
      </Layout>
    </>
  );
};

export default IndexPage;
