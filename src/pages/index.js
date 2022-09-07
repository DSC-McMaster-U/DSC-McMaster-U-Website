import React from "react";
import Layout from "../layouts";
import About from "../components/About";
import Socials from "../components/Socials";
import Splash from "../components/Splash";
import Events from "../components/Events";
import Navbar from "../components/Navbar";
import Promotion from "../components/Promotion";
import Sponsors from "../components/Sponsors";
import Seo from "../components/Seo";

const links = ["About", "Events", "Socials"];
const IndexPage = () => {
  return (
    <>
      {false && (
        <Promotion
          action="Attend"
          link="https://gdsc.community.dev/events/details/developer-student-clubs-mcmaster-university-presents-building-robots-with-robot-operating-system-ros/"
        >
          <p className="text-white text-md font-bold ml-5 sm:text-lg">
            Building robots with Robot Operating System (ROS)
            <span className="font-normal hidden md:inline">
              {" "}
              - Sat, Feb 12th 5:00pm - 7:00pm
            </span>
          </p>
        </Promotion>
      )}
      <Layout page="Home">
        <Navbar links={links} />
        <Splash />
        <About />
        <Events />
        <Sponsors />
        <Socials last />
      </Layout>
    </>
  );
};

export const Head = () => <Seo />;
export default IndexPage;
