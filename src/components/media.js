import React from "react";
import logo from "../images/icon.png";

const socials = [
  { icon: "fab fa-facebook", url: "#" },
  { icon: "fab fa-discord", url: "#" },
  { icon: "fab fa-instagram", url: "#" },
  { icon: "fab fa-linkedin", url: "#" },
  { icon: "fab fa-github", url: "#" },
  { icon: "fab fa-twitter", url: "#" },
];

function Media() {
  return (
    <section className="relative mt-20 mb-10">
      <div className="container mx-auto">
        <div className="flex items-center flex-col">
          <div className="flex md:mb-12 mb-8">
            {/* Follow Us + Updates*/}
            <div className="w-auto">
              <h1 className="text-5xl mb-1 md:text-6xl mt-0 text-center">
                Follow Us
              </h1>
              <div className="inline-flex items-center">
                <img className="inline-block mr-4" src={logo}></img>
                <p className="text-xl text-gray-600 lg:text-2xl">
                  Get the latest updates
                </p>
              </div>
            </div>
          </div>
          {/* Media Handles */}
          <div className="grid grid-cols-2 md:grid-cols-6">
            {socials.map(social => {
              return (
                <div className="px-10 text-4xl md:text-6xl mb-5 md:mb-0">
                  <a href={social.url}>
                    <i class={`${social.icon} text-blue-500`}></i>
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
