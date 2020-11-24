import React from "react";
import logo from "../images/icon.png";
import cx from "classnames";

const socials = [
  { icon: "fab fa-facebook", url: "#", color: "text-blue-400" },
  { icon: "fab fa-discord", url: "#", color: "text-blue-400" },
  { icon: "fab fa-instagram", url: "#", color: "text-blue-400" },
  { icon: "fab fa-linkedin", url: "#", color: "text-blue-400" },
  { icon: "fab fa-github", url: "#", color: "text-blue-400" },
  { icon: "fab fa-twitter", url: "#", color: "text-blue-400" },
];

function Media() {
  return (
    <section id = "Media" className="relative mt-32 pt-32 mb-10 border-t-4 border-blue-400">
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
          <div className="grid grid-cols-2 md:grid-cols-6">
            {socials.map(social => {
              return (
                <div className="px-10 text-6xl mb-5 md:mb-0">
                  <a href={social.url}>
                    <i className={cx(social.icon, social.color)}></i>
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