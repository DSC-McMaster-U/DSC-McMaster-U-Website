import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import Button from "./Button"
function Events ({ siteTitle }) {
  const data = useStaticQuery(graphql`
  query ProfilePic {
    image: file(relativePath: {eq: "events.png"}) {
      id
      childImageSharp {
        fixed (quality: 100) {
          ...GatsbyImageSharpFixed
        }
        fluid (quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
    <section className="relative" >
      <div className="container mx-auto">
        <div className="border-t-4 border-blue-400">
          <div className="border-b-4 border-gray-200">
            <div className="items-center flex flex-wrap px-8">
              <div className="w-6/12 h-full py-8">
                <div className="text-4xl">
                  Events & Workshops
                </div>
                <div className="text-2xl py-4">
                  Join us for upcoming workshops!
                </div>
                <a href="https://dsc.community.dev/mcmaster-university">
                  <Button >
                    View Events
                  </Button>
                </a>
              </div>
              <Img fluid={data.image.childImageSharp.fluid}  className="bg-auto" style={{ height: "50%", width: "50%", position: "relative", top: 0, right: 0}} />
              {/* <div className="w-6/12 py-8">
                <div className="rounded-lg bg-coreGray text-white py-2 px-2 text-xs">
                  Upcoming Events
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

Events.propTypes = {
  siteTitle: PropTypes.string,
};

Events.defaultProps = {
  siteTitle: ``,
};

export default Events;
