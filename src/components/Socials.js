import React from "react";
import logo from "../images/icon.png";
import cx from "classnames";
import socials from "../content/socials.json";
import Section from "./core/Section";
import Typography from "./core/Typography";

function Socials(props) {
  return (
    <Section id="Socials" {...props}>
      <div className="container mx-auto">
        <div className="flex items-center flex-col">
          <div className="flex md:mb-12 mb-8">
            {/* Follow Us + Updates*/}
            <div className="w-auto text-center">
              <Typography variant="h1">Follow Us</Typography>
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
            {socials.map((social, i) => {
              return (
                <div
                  className="md:px-10 px-3 text-6xl mb-5 md:mb-0 flex justify-center"
                  key={social.name}
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={`${100 * i}`}
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

export default Socials;
