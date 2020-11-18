import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import Button from "./Button";
import EventData from "../content/events.json";

function Events() {
  const maxEvents = 3;
  const data = useStaticQuery(graphql`
    query EventsImage {
      image: file(relativePath: { eq: "events.png" }) {
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
    <section className="relative mt-32 pt-32 container mx-auto border-t-4 border-blue-400">
      <div className="flex flex-wrap">
        <div className="md:w-6/12 w-full h-full pt-8">
          <div className="text-5xl">Events & Workshops</div>
          <div className="text-2xl py-4">Join us for upcoming workshops!</div>
          <Button node="a" href="https://dsc.community.dev/mcmaster-university">
            View Events
          </Button>
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt=""
            objectPosition="100% 100%"
          />
        </div>
        <div className="py-8 w-full md:w-6/12 md:pl-8">
          <div className="md:pl-8">
            <span className="rounded-lg bg-gray-500 text-white py-2 px-2 text-xs">
              Upcoming Events
            </span>
          </div>
          <ul className="pt-8 md:pl-8">
            {EventData.filter(event => {
              return new Date(event.jsDate) > new Date();
            }).map((event, i) => {
              return (
                i < maxEvents && (
                  <li className={i === 0 ? "mx-auto" : "mx-auto pt-12"}>
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
                      <span className="text-gray-700 mr-2 text-xs">
                        <i className="fill-current far fa-calendar-alt text-blue-400 fa-lg pt-2 pr-2"></i>
                        {event.date}
                      </span>
                      <span className="text-gray-700 mr-2 text-xs">
                        <i className="fill-current far fa-clock text-green-400 fa-lg pt-2 pr-2"></i>
                        {event.time}
                      </span>
                      <span className="text-gray-700 mr-2 text-xs">
                        <i className="fill-current fas fa-map-marker-alt text-red-400 fa-lg pt-2 pr-2"></i>
                        {event.location}
                      </span>
                    </div>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Events;
