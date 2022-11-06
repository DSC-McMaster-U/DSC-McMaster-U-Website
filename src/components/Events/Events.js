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
  const testdata = [
    {
      title: "Test Event1",
      date: "2022-12-3",
      time: "6:00PM",
      location: "Virtual",
      link: "https://www.google.ca",
    },
    {
      title: "Test Event2",
      date: "2022-12-4",
      time: "6:00PM",
      location: "Virtual",
      link: "www.google.ca",
    },
    {
      title: "Test Event3",
      date: "2022-12-5",
      time: "6:00PM",
      location: "Virtual",
      link: "www.google.ca",
    },
    {
      title: "Test Event4",
      date: "2022-12-6",
      time: "6:00PM",
      location: "Virtual",
      link: "www.google.ca",
    },
    {
      title: "Test Event5",
      date: "2022-12-7",
      time: "6:00PM",
      location: "Virtual",
      link: "www.google.ca",
    },
    {
      title: "Test Event6",
      date: "2022-12-8",
      time: "6:00PM",
      location: "Virtual",
      link: "www.google.ca",
    },
    {
      title: "Test Event X",
      date: "2022-12-1",
      time: "6:00PM",
      location: "Virtual",
      link: "www.google.ca",
    },
  ];
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
  console.log(EventData);
  return (
    <Section id="Events">
      <div className="h-full md:h-1/2">
        <Typography variant="h1">Events & Workshops</Typography>
        <div className="px-8 text-xl text-gray-700">
          Join us for upcoming workshops!
        </div>
        <div className="py-2 w-full">
          <ul className="pt-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:pl-8 pb-12">
            {/* {EventData.filter(edge => {
              return stringToDate(edge.node.date) >= new Date();
            })
              .sort(
                (edgeA, edgeB) =>
                  Number(stringToDate(edgeA.node.date)) -
                  Number(stringToDate(edgeB.node.date))
              )
              .map((edge, i) => {
                return i < maxEvents && <EventItem {...edge.node} key={i} />;
              })} */}

            {testdata
              .filter(edge => {
                return stringToDate(edge.date) >= new Date();
              })
              .sort(
                (edgeA, edgeB) =>
                  Number(stringToDate(edgeA.date)) -
                  Number(stringToDate(edgeB.date))
              )
              .map((edge, i) => {
                return i < maxEvents && <EventItem {...edge} key={i} />;
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
