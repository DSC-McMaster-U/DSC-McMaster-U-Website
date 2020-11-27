import React from "react";
import PropTypes from "prop-types";
import SplashParticle from "./SplashParticle";
import Button from "../Button";
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
    <div className="lg:container md:container sm:container mt-20">
      {/* first row - splash content */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-20">
        {/* splash text */}
        <div className="grid grid-rows-3">
          <div>
            <h1 className="text-4xl">McMaster Developer Student Club</h1>
          </div>
          <div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tortor ligula, hendrerit eu turpis id, feugiat mattis nulla.
              Integer pretium, sem id vestibulum vestibulum, magna est elementum
              mauris, id sollicitudin eros libero vitae enim."
            </p>
          </div>
          <div>
            <Button
              bg="blue"
              size="lg"
              type="button"
              variant="fill"
              className="mr-10"
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
    </div>
  );
};

export default Splash;
