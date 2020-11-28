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
            <HighlightedChar color="yellow">C</HighlightedChar>lubs{" "}
            <HighlightedChar color="blue">M</HighlightedChar>cMaster U
          </h1>
          <p className="text-gray-800 text-lg mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor
            ligula, hendrerit eu turpis id, feugiat mattis nulla. Integer
            pretium, sem id vestibulum vestibulum, magna est elementum mauris,
            id sollicitudin eros libero vitae enim.
          </p>
          <div>
            <Button
              bg="blue"
              size="lg"
              type="button"
              variant="fill"
              className="mr-10"
              float
            >
              sign up
            </Button>

            <Button bg="blue" size="lg" type="button" variant="outline">
              contact us
            </Button>
          </div>
        </div>
        {/* splash graphic image */}
        <div className="relative h-full">
          <SplashParticle />
          <div className="z-20 relative">
            <Img
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
