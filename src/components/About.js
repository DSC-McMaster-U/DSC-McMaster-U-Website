import React from "react";
import path from "../images/path.png";
import About_Card from "./About_Card";

import rocket from "../images/rocket.png";

const About = () => {
  return (
    <section className="grid grid-cols-10 gap-6">
      <div className="grid grid-rows-5 col-span-3">
        <div className="row-span-1"></div>
        <div className="row-span-1">
          <div className="text-5xl">About Us</div>
        </div>
        <div className="row-span-2">
          <p className="mb-2 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg my-5">
            View Wiki
          </button>
        </div>
      </div>
      <div className="flex col-span-3">
        <span className="m-auto">
          <img
            className="h-100"
            src={path}
            alt="Designed by slidesgo / Freepik"
          />
        </span>
      </div>
      <div className="col-span-4 py-5">
        <About_Card />
      </div>
    </section>
  );
};

export default About;
