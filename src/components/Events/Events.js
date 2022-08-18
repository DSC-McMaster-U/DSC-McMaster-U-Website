import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import Button from "../core/Button";
import { stringToDate } from "../../utils/date";
import EventItem from "./EventItem";
import Section from "../core/Section";
import Typography from "../core/Typography";

function Events() {
  const maxEvents = 6;
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
  ("");

  const EventData = data.allEventsJson.edges;
  return (
    <Section id="Events">
      <div className="h-full md:h-1/2">
        <Typography variant="h1">Events & Workshops</Typography>
        <div className="px-8 text-xl text-gray-700">
          Join us for upcoming workshops!
        </div>
        <div className="py-2 w-full">
          <ul className="pt-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:pl-8 pb-12">
            {EventData.filter(edge => {
              return stringToDate(edge.node.date) >= new Date();
            }).map((edge, i) => {
              return i < maxEvents && <EventItem {...edge} />;
            })}
          </ul>
        </div>
        <div className="self-baseline">
          <Button node="a" href="https://dsc.community.dev/mcmaster-university">
            View Events
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default Events;
