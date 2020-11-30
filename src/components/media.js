import React from "react";
import logo from "../images/icon.png";
import cx from "classnames";

const socials = [
  { icon: "fab fa-facebook", url: "https://www.facebook.com/DSCMcMasterU/ ", color: "text-blue-800", hover: "hover:text-gray-500"},
  { icon: "fab fa-instagram", url: "https://www.instagram.com/dscmcmasteru/", color: "text-pink-600", hover: "hover:text-gray-500"},
  { icon: "fab fa-linkedin", url: "https://ca.linkedin.com/company/dscmcmasteru", color: "text-blue-600", hover: "hover:text-gray-500" },
  { icon: "fab fa-twitter", url: "https://twitter.com/DSCMcMaster", color: "text-blue-400", hover: "hover:text-gray-500"},
  { icon: "fab fa-github", url: "https://github.com/DSC-McMaster-U/", color: "text-gray-800", hover: "hover:text-gray-500"},
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
          <div className="grid grid-cols-3 md:grid-cols-5">
            {socials.map(social => {
              return (
                <div className="px-10 text-6xl mb-5 md:mb-0">
                  <a href={social.url}>
                    <i className={cx(social.icon, social.color, social.hover)}></i>
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
