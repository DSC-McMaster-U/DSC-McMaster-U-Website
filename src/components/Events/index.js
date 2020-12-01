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
          <div className="text-5xl mb-5 flex content-end flex-wrap">
            Events & Workshops
          </div>
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
                {EventData.sort(
                  (a, b) => new Date(b.jsDate) - new Date(a.jsDate)
                )
                  .filter((event, i) => {
                    return i < maxEvents;
                  })
                  .map(card => {
                    return (
                      <EventCard
                        title={card.title}
                        body={card.body}
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
          {EventData.sort((a, b) => new Date(b.jsDate) - new Date(a.jsDate))
            .filter((event, i) => {
              return i < maxEvents;
            })
            .map(card => {
              return (
                <div className="flex justify-center md:col-span-6 md:hidden">
                  <div className="relative h-full w-11/12 sm:w-8/12  md:w-full mt-20 md:mt-0  md:hidden">
                    <EventCard
                      title={card.title}
                      body={card.body}
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
    </section>
  );
}

export default Events;
