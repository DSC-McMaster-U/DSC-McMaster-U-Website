import React from "react";
import About_Card from "./About_Card";

const About = () => {
  return (
    <div className="border-t-2 border-top-about container mx-auto border-bottom-about my-6">
      <section className="my-6 grid grid-cols-10 py-6">
        <div className="flex flex-col col-span-4">
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
              <button className="bg-transparent text-lg hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-6 border border-blue-500 hover:border-transparent rounded-md my-5">
                View Wiki
              </button>
            </div>
          </div>
        </div>

        <div className="grid gird-rows-5 col-span-6 ">
          <div className="row-span-1"></div>
          <div className="row-span-2">
            <About_Card />
          </div>
          <div className="row-span-1"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
