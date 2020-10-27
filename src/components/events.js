import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image/withIEPolyfill";
import Button from "./Button"
import EventData from "../content/events.json"

function Events ({ siteTitle }) {
  const maxEvents = 3
  let eventCounter = 0
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
            <div className="flex flex-wrap px-8">
              <div className="w-6/12 h-full pt-8">
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
                <Img fixed={data.image.childImageSharp.fixed} alt="" objectFit="cover" className="" objectPosition="100% 100%" />           
          </div>
          <div className="py-8 w-6/12">
            <div className="pl-8">
                <span className="rounded-lg bg-gray-500 text-white py-2 px-2 text-xs">
                    Upcoming Events
                </span>
            </div>
            <ul className="pt-8 pl-8">
                {EventData.filter(event => {
                    const currentTime = new Date()
                    const eventTime = new Date(event.jsDate)
                    if (eventTime > currentTime && eventCounter<maxEvents){
                        eventCounter++
                        return true
                    }
                    return false
                }).map((event,i) => {
                    return (<li className={ i === 0 ? "mx-auto" : "mx-auto pt-12"}>
                    <div className="flex flex-row">
                        <div>
                            <img 
                                src={require("../images/dscIcon.png")}
                                alt="DSC Icon"
                            />
                        </div>
                        <a href={event.link} className="pl-2 hover:underline"> 
                        {event.title}
                        </a>
                        </div>
                    <div className="flex flex-row pl-10 pt-2">
                        <span className="text-gray-500 mr-2 text-xs">
                            <i className="fill-current far fa-calendar-alt text-blue-400 fa-lg pt-2 pr-2"></i>
                            {event.date}
                        </span>
                        <span className="text-gray-500 mr-2 text-xs">
                            <i className="fill-current far fa-clock text-green-400 fa-lg pt-2 pr-2"></i>
                            {event.time}
                        </span>
                        <span className="text-gray-500 mr-2 text-xs">
                            <i className="fill-current fas fa-map-marker-alt text-red-400 fa-lg pt-2 pr-2"></i>
                            {event.location}
                        </span>
                    </div>
                </li>)
                })}  
            </ul>
            </div>
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
