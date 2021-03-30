import React from "react";
import Card from "./Card";
import ReactCardCarousel from "react-card-carousel";
import Button from "../Button";
import { cards } from "./content";
import Typography from "../Typography";
import Section from "../Section";

const About = () => {
  return (
    <Section id="About">
      <div className="md:my-12 grid flex flex-row md:grid-rows-1 md:grid-cols-10 md:py-6">
        <div
          className="flex flex-col md:row-span-2 md:col-span-4"
          data-aos="fade-right"
        >
          <div className="text-5xl flex content-end flex-wrap mb-5">
            About Us
          </div>
          <Typography>
            Our club is a space for students to explore new ideas and
            collaborate. Check out our wiki to learn more about our inclusive
            environment.
          </Typography>
          <div className="grid grid-cols-5">
            <div className="col-span-2">
              <Button
                node="a"
                href="https://www.notion.so/DSC-McMasterU-Wiki-f39c9ea5e7b141fba08cfc01588d92c4"
              >
                View Wiki
              </Button>
            </div>
          </div>
        </div>

        <div className="row-span-3 md:col-span-6 hidden md:block">
          <div className="relative h-full w-full mt-20 md:mt-0 hidden md:block ">
            <ReactCardCarousel
              autoplay={true}
              spread="wide"
              alignment="horizontal"
            >
              {cards.map(card => {
                return (
                  <Card
                    title={card.title}
                    body={card.body}
                    image={card.image}
                    key={card.title}
                  />
                );
              })}
            </ReactCardCarousel>
          </div>
        </div>
        {cards.map(card => {
          return (
            <div
              className="flex justify-center md:col-span-6 md:hidden"
              key={card.title}
            >
              <div className="relative h-full w-11/12 sm:w-8/12  md:w-full mt-20 md:mt-0  md:hidden">
                <Card title={card.title} body={card.body} image={card.image} />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default About;
