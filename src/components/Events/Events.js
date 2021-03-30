import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import Button from "../Button";
import { stringToDate } from "../../utils/date";
import EventItem from "./EventItem";
import Section from "../Section";

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
      allEventsJson {
        edges {
          node {
            title
            link
            time
            location
            date
          }
        }
      }
    }
  `);
  const EventData = data.allEventsJson.edges;
  return (
    <Section id="Events">
      <div className="flex flex-wrap flex-row-reverse">
        <div className="md:w-6/12 w-full h-full md:pl-8 md:mb-0 mb-6">
          <div className="text-5xl mb-5">Events & Workshops</div>
          <div className="text-xl mb-5 text-gray-700">
            Join us for upcoming workshops!
          </div>
          <Button node="a" href="https://dsc.community.dev/mcmaster-university">
            View Events
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
          <ul className="pt-8 md:pl-8">
            {EventData.filter(edge => {
              return stringToDate(edge.node.date) > new Date();
            }).map((edge, i) => {
              return i < maxEvents && <EventItem {...edge.node} />;
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Events;
