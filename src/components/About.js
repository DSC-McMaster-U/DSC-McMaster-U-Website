import React from "react";
import path from "../images/path.png";
import About_Card from "./About_Card";

import rocket from "../images/rocket.png";

const About = () => {
  return (
    <div className="border-t-2 border-aboutBorder container mx-auto my-6">
      <section className="my-5 grid grid-cols-10 border-b-2 border-aboutBottomBorder">
        <div className="grid grid-rows-5 col-span-4">
          <div className="row-span-1 flex content-end">
            <div className="text-5xl flex content-end flex-wrap">About Us</div>
          </div>
          <div className="flex flex-row">
            <span className="red-dot pr-4 py-2 m-2 ml-0"></span>
            <span className="yellow-dot pr-4 py-2 m-2"></span>
            <span className="blue-dot pr-4 py-2 m-2"></span>
            <span className="green-dot pr-4 py-2 m-2"></span>
          </div>
          <div className="row-span-2">
            <p className="mb-2 text-2xl text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-transparent text-lg hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-6 border border-blue-500 hover:border-transparent rounded-md my-5">
              View Wiki
            </button>
          </div>
        </div>

        <div className="col-span-6 py-5">
          <About_Card />
        </div>
      </section>
    </div>
  );
};

export default About;
