import React from "react";
import logo from "../images/icon.png";
import cx from "classnames";
import { socials } from "../content/socials";

function Media() {
  return (
    <section
      id="Media"
      className="relative mt-32 pt-32 mb-10 border-t-4 border-blue-400"
    >
      <div className="container mx-auto">
        <div className="flex items-center flex-col">
          <div className="flex md:mb-12 mb-8">
            {/* Follow Us + Updates*/}
            <div className="w-auto">
              <h1 className="text-5xl mb-2 mt-0 text-center">Follow Us</h1>
              <div className="inline-flex items-center">
                <img className="inline-block mr-4" src={logo}></img>
                <p className="text-gray-700 text-2xl">Get the latest updates</p>
              </div>
            </div>
          </div>
          {/* Media Handles */}
          <div className="flex flex-wrap justify-center md:justify-start">
            {socials.map(social => {
              return (
                <div className="md:px-10 px-3 text-6xl mb-5 md:mb-0 w-1/3 md:w-1/5 flex justify-center">
                  <a href={social.url}>
                    <i
                      className={cx(social.icon, social.color, social.hover)}
                    ></i>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Media;
