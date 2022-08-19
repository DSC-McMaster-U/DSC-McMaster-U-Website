import React from "react";
import SplashParticle from "./SplashParticle";
import Button from "../core/Button";
import HighlightedChar from "./HighlightedChar";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Typography from "../core/Typography";
import Section from "../core/Section";

const Splash = () => {
  const data = useStaticQuery(graphql`
    query SplashImage {
      image: file(relativePath: { eq: "splash.png" }) {
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
    <Section className="pt-20">
      {/* first row - splash content */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-20">
        {/* splash text */}
        <div className="flex flex-col">
          <div
            className="mb-12"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h1 className="mb-16 text-5xl leading-tight">
              <HighlightedChar color="red" char="G" />
              oogle <HighlightedChar color="green" char="D" />
              eveloper <HighlightedChar color="blue" char="S" />
              tudent <br className="hidden md:block" />{" "}
              <HighlightedChar color="yellow" char="C" />
              lubs <HighlightedChar color="red" char="M" />
              cMaster <HighlightedChar color="green" char="U" />
            </h1>
            <Typography>
              Google Developer Student Club (GDSC) is a Google Developers
              program for university students to learn web, mobile, and google
              technologies in a peer-to-peer learning environment.
            </Typography>
          </div>

          <div className="md:flex">
            <Button
              bg="blue"
              size="lg"
              type="button"
              variant="fill"
              className="md:mr-10 mb-5 md:mb-0 block mr-0"
              float
              node="a"
              href="https://discord.gg/qxFbbd7RMY"
            >
              Join Our Discord
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
              objectPosition="100% 100%"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Splash;
