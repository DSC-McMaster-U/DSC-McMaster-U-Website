import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import Button from "../Button";
import EventData from "../../content/events.json";
import EventCard from "./EventCard";
import ReactCardCarousel from "react-card-carousel";

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
        <div className="md:w-4/12 w-full h-full md:pl-8 md:mb-0 mb-6">
          <div className="text-5xl mb-5 flex content-end flex-wrap">Events & Workshops</div>
          <div className="text-xl mb-5 text-gray-800 flex content-end flex-wrap">
            Join us for upcoming workshops!
          </div>
          <Button node="a" href="https://dsc.community.dev/mcmaster-university">
            View Events
          </Button>
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt=""
            objectPosition="100% 100%"
            className="lg:block hidden"
          />
        </div>

        <div className="md:w-8/12 w-full md:pl-8 md:mb-0 mb-6">
          <div className="relative h-full w-full mt-20 md:mt-0 hidden md:block ">
          <div className="row-span-3 md:col-span-6 hidden md:block">
            <ReactCardCarousel
              autoplay={true}
              spread="wide"
              alignment="horizontal"
            >
              {EventData.sort((a, b) => b.date - a.date)
                // .filter(event => {
                //   return new Date(event.jsDate) > new Date();
                // })
                .map((card, i) => {
                  return (
                    <EventCard
                      title={card.title}
                      body={'card.body'}
                      image={card.image}
                      link={card.link}
                      date={card.date}
                      location={card.location}
                      time={card.time}
                      jsDate={card.jsDate}
                    />
                  );
                })}
            </ReactCardCarousel>
          </div>
        </div>
        {EventData.sort((a, b) => b.jsDate - a.jsDate)
          // .filter((event, i) => {
          //   return new Date(event.jsDate) > new Date();
          // })
          .map((card, i) => {
            console.log(card)
            return (
              <div className="flex justify-center md:col-span-6 md:hidden">
                <div className="relative h-full w-11/12 sm:w-8/12  md:w-full mt-20 md:mt-0  md:hidden">
                  <EventCard
                    title={card.title}
                    body={'card.body'}
                    image={card.image}
                    link={card.link}
                    date={card.date}
                    location={card.location}
                    time={card.time}
                    jsDate={card.jsDate}
                  />
                </div>
              </div>
            );
          })}
      </div>
      </div>
      {/* </div> */}
      {/* <ul className="pt-8 md:pl-8">
            {EventData.filter(event => {
              return new Date(event.jsDate) > new Date();
            }).map((event, i) => {
              return (
                i < maxEvents && (
                  <li className={i === 0 ? "mx-auto" : "mx-auto pt-12"}>
                    <div className="flex flex-row">
                      <div>
                        <img
                          src={require("../../images/dscIcon.png")}
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
      </div> */}
    </section>
  );
}

export default Events;
