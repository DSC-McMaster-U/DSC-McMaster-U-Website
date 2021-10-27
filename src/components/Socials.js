import React from "react";
import logo from "../../static/images/icon.png";
import cx from "classnames";
import Section from "./core/Section";
import Typography from "./core/Typography";

export const socials = [
  {
    icon: "fab fa-facebook",
    url: "https://www.facebook.com/DSCMcMasterU/ ",
    color: "text-blue-800",
    hover: "hover:text-gray-500",
    name: "facebook",
  },
  {
    icon: "fab fa-instagram",
    url: "https://www.instagram.com/gdscmcmasteru/",
    color: "text-pink-600",
    hover: "hover:text-gray-500",
    name: "instagram",
  },
  {
    icon: "fab fa-linkedin",
    url: "https://ca.linkedin.com/company/dscmcmasteru",
    color: "text-blue-600",
    hover: "hover:text-gray-500",
    name: "linkedin",
  },
  {
    icon: "fab fa-twitter",
    url: "https://twitter.com/dscmcmasteru",
    color: "text-blue-400",
    hover: "hover:text-gray-500",
    name: "twitter",
  },
  {
    icon: "fab fa-github",
    url: "https://github.com/DSC-McMaster-U/",
    color: "text-gray-800",
    hover: "hover:text-gray-500",
    name: "github",
  },
  {
    icon: "fab fa-youtube",
    url: "https://www.youtube.com/channel/UCyxVVPDEYRCjL0lcwoX9lzA/videos",
    color: "text-red-400",
    hover: "hover:text-gray-500",
    name: "youtube",
  },
  {
    icon: "fab fa-mailchimp",
    url:
      "https://dev.us5.list-manage.com/subscribe/post?u=3b2fa7f815202cd2305c5b41e&amp;id=b7c4bf4434",
    color: "text-black-400",
    hover: "hover:text-gray-500",
    name: "mailchimp",
  },
];

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
