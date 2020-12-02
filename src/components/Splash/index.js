import React from "react";
import PropTypes from "prop-types";
import SplashParticle from "./SplashParticle";
import Button from "../Button";
import HighlightedChar from "./HighlightedChar";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Splash = () => {
  const data = useStaticQuery(graphql`
    query SplashImage {
      image: file(relativePath: { eq: "splash-alt.png" }) {
        id
        childImageSharp {
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed
          }
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className="lg:container md:container sm:container mt-20">
      {/* first row - splash content */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-24">
        {/* splash text */}
        <div className="flex flex-col">
          <h1 className="md:text-5xl mb-16 text-5xl">
            <HighlightedChar color="red">D</HighlightedChar>eveloper{" "}
            <HighlightedChar color="green">S</HighlightedChar>tudent{" "}
            <br className="hidden md:block" />
            <HighlightedChar color="blue">C</HighlightedChar>lubs{" "}
            <HighlightedChar color="yellow">M</HighlightedChar>cMaster U
          </h1>
          <p className="text-gray-700 text-lg mb-16 leading-relaxed">
            Developer Student Club (DSC) is a Google Developers program for
            university students to learn web, mobile, and google technologies in
            a peer-to-peer learning environment.
          </p>
          <div>
            <Button
              bg="blue"
              size="lg"
              type="button"
              variant="fill"
              className="mr-10"
              float
              node="a"
              href="/form"
            >
              sign up
            </Button>

            <Button
              bg="blue"
              size="lg"
              type="button"
              variant="outline"
              node="a"
              href="mailto:dscmcmaster@email.ca"
            >
              contact us
            </Button>
          </div>
        </div>
        {/* splash graphic image */}
        <div className="relative h-full">
          <SplashParticle />
          <div className="z-20 relative">
            <Img
              alt="team working"
              fluid={data.image.childImageSharp.fluid}
              alt=""
              objectPosition="100% 100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Splash;
