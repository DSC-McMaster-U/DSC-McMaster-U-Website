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
    <section
      id="Events"
      className="relative mt-32 pt-32 container mx-auto border-t-4 border-blue-400"
    >
      <div className="flex flex-wrap flex-row-reverse">
        <div className="md:w-6/12 w-full h-full md:pl-8 md:mb-0 mb-6">
          <div className="text-5xl mb-5">Events & Workshops</div>
          <div className="text-xl mb-5 text-gray-700">
            Join us for upcoming workshops!
          </div>
          <Button node="a" href="https://dsc.community.dev/mcmaster-university">
            View All Events
          </Button>
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="Students coding"
            objectPosition="100% 100%"
            className="md:block hidden"
          />
        </div>
        <div className="py-8 w-full md:w-6/12">
          <div>
            <span className="rounded-lg bg-gray-700 text-white py-2 px-2 text-xs">
              Upcoming Events
            </span>
          </div>
          <ul className="pt-4 flex flex-col">
            {EventData.filter(event => {
              return new Date(event.jsDate) > new Date();
            }).map((event, i) => {
              return (
                i < maxEvents && (
                  <li
                    className={
                      "mr-auto mt-10 shadow-sm hover:shadow-lg cursor-pointer"
                    }
                    key={event.title}
                  >
                    <a href={event.link} className="p-6 block">
                      <div className="flex flex-row">
                        <div>
                          <img
                            src={require("../images/dscIcon.png")}
                            alt="DSC Icon"
                          />
                        </div>
                        <p className="pl-2 font-semibold">{event.title}</p>
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
                    </a>
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
