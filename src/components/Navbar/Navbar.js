import React from "react";
import logo from "../../../static/images/DSCLogo.png";
import PropTypes from "prop-types";
import Dropdown from "../core/Dropdown";
import { Link } from "gatsby";
import { SiInstagram, SiDiscord, SiLinkedin } from "react-icons/si";

export default function Navbar({ items }) {
  const socialMedia = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/gdscmcmasteru/",
      icon: <SiInstagram />,
    },
    {
      name: "Discord",
      url: "https://discord.gg/XtYqWmJmh7",
      icon: <SiDiscord />,
    },
    {
      name: "LinkedIn",
      url: "https://www.instagram.com/gdscmcmasteru/",
      icon: <SiLinkedin />,
    },
  ];

  return (
    <>
      <header className="md:px-6 px-6 border-b-2 bg-white flex flex-wrap items-center py-4 gap-x-8">
        <div className="flex-1 flex justify-between items-center">
          <a href="/" className="py-3">
            <img
              className="h-6 w-auto"
              src={logo}
              alt="DSC Logo"
              data-aos="fade-right"
            />
          </a>
        </div>
        {items && (
          <>
            <div className="hidden md:flex">
              {items.map(item => (
                <Link
                  to={item.link}
                  className="block border-b-2 border-transparent width:1px text-gray-600 tracking-wider rounded-md"
                  key={item.link}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="block md:hidden">
              <Dropdown
                button={
                  <i
                    className="fas fa-bars w-4"
                    aria-label="navigation menu"
                  ></i>
                }
              >
                {items.map(item => (
                  <Link
                    className="md:p-4 pl-2 py-3 px-0 block border-b-2 border-transparent width:1px text-gray-600 tracking-wider rounded-md"
                    to={item.link}
                    key={item.link}
                  >
                    {item.title}
                  </Link>
                ))}
              </Dropdown>
            </div>
          </>
        )}
        <div className="flex flex-row px-4 gap-x-4">
          {socialMedia.map(({ name, url, icon }) => (
            <a
              href={url}
              key={name}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600"
            >
              {icon}
            </a>
          ))} 
        </div>
      </header>
    </>
  );
}
Navbar.propTypes = {
  links: PropTypes.array,
};
