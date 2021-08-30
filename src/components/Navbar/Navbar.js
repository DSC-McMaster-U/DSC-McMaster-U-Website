import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Scroll from "./Scroll";
import logo from "../../images/DSCLogo.png";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";

export default function Navbar({ links }) {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    if (!showScroll) {
      window.addEventListener(`scroll`, checkScrollTop);
      return () => window.removeEventListener(`scroll`, checkScrollTop);
    }
  });

  return (
    <>
      <header className="md:px-6 px-6 border-b-2 bg-white flex flex-wrap items-center py-4">
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
        {links && (
          <>
            <div className="hidden md:flex">
              {links.map(link => (
                <Link
                  activeClass="active"
                  to={link}
                  spy
                  smooth
                  offset={-150}
                  duration={500}
                  delay={200}
                  className="md:p-4 pl-2 py-3 px-0 block border-b-2 border-transparent width:1px text-gray-700 tracking-wider rounded-md"
                  href="#"
                >
                  {link}
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
                {links.map(link => (
                  <Link
                    activeClass="active"
                    to={link}
                    spy
                    smooth
                    offset={-150}
                    duration={500}
                    delay={200}
                    className="md:p-4 pl-2 py-3 px-0 block border-b-2 border-transparent width:1px text-gray-700 tracking-wider rounded-md"
                    href="#"
                  >
                    {link}
                  </Link>
                ))}
              </Dropdown>
            </div>
          </>
        )}
      </header>
      <Scroll showBelow={300} />
    </>
  );
}
Navbar.propTypes = {
  links: PropTypes.array,
};
