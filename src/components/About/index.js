import React from "react";
import AboutCard from "./AboutCard";
import ReactCardCarousel from "react-card-carousel";
import Button from "../Button";
import { cards } from "./config";
import { useViewport } from "../../utils/useViewport";
const About = () => {
  const colorTray = ["red", "blue", "green", "yellow"];
  let oneColor = colorTray[Math.floor(Math.random() * colorTray.length)];

  return (
    <div className="border-t-4 border-blue-400 container mx-auto border-bottom-about mt-32 pt-32">
      <section className="my-6 grid grid-rows-5 md:grid-rows-1 md:grid-cols-10 py-6">
        <div className="flex flex-col row-span-2 md:col-span-4">
          <div className="text-5xl flex content-end flex-wrap mb-5">
            About Us
          </div>
          <p className="mb-2 text-xl text-gray-700 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
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

        <div className="row-span-3 md:col-span-6">
          <div className="relative h-full w-full mt-20 md:mt-0 hidden md:block">
            <ReactCardCarousel
              autoplay={true}
              spread="wide"
              alignment="horizontal"
            >
              {cards.map(card => {
                return (
                  <AboutCard
                    title={card.title}
                    body={card.body}
                    image={card.image}
                  />
                );
              })}
            </ReactCardCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
