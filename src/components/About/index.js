import React from "react";
import AboutCard from "./AboutCard";
import ReactCardCarousel from "react-card-carousel";
import Button from "../Button";
import { cards } from "./config";
const About = () => {
  const colorTray = ["red", "blue", "green", "yellow"];
  let oneColor = colorTray[Math.floor(Math.random() * colorTray.length)];

  return (
    <div className="border-t-2 border-top-about container mx-auto border-bottom-about my-6">
      <section className="my-6 grid grid-rows-5 md:grid-rows-1 md:grid-cols-10 py-6">
        <div className="flex flex-col row-span-2 md:col-span-4">
          <div className="text-5xl flex content-end flex-wrap">About Us</div>
          <div className="flex flex-row mb-5">
            <span className="red-dot pr-4 py-2 m-2 ml-0"></span>
            <span className="yellow-dot pr-4 py-2 m-2"></span>
            <span className="blue-dot pr-4 py-2 m-2"></span>
            <span className="green-dot pr-4 py-2 m-2"></span>
          </div>
          <p className="mb-2 text-2xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-3">
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
          <div className="relative h-full w-full">
            <ReactCardCarousel
              autoplay={true}
              spread="wide"
              alignment="horizontal"
            >
              {cards.map(card => {
                return <AboutCard card={card} />;
              })}
            </ReactCardCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
