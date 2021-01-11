import React from "react";
import logo from "../images/icon.png";
import cx from "classnames";
import socials from "../content/socials.json";
import Section from "./Section";

function Media(props) {
  return (
    <Section id="Media" {...props}>
      <div className="container mx-auto">
        <div className="flex items-center flex-col">
          <div className="flex md:mb-12 mb-8">
            {/* Follow Us + Updates*/}
            <div className="w-auto">
              <h1 className="text-5xl mb-2 mt-0 text-center">Follow Us</h1>
              <div className="inline-flex items-center">
                <img
                  className="inline-block mr-4"
                  src={logo}
                  alt="DSC logo"
                ></img>
                <p className="text-gray-700 text-2xl">Get the latest updates</p>
              </div>
            </div>
          </div>
          {/* Media Handles */}
          <div className="flex flex-wrap justify-center md:justify-start">
            {socials.map(social => {
              return (
                <div
                  className="md:px-10 px-3 text-6xl mb-5 md:mb-0 w-1/3 md:w-1/5 flex justify-center"
                  key={social.name}
                >
                  <a href={social.url}>
                    <i
                      className={cx(social.icon, social.color, social.hover)}
                      aria-hidden="true"
                    ></i>
                    <span className="sr-only">{social.name}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Media;
