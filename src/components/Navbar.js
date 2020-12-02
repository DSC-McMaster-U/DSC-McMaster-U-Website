import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Scroll from "./Scroll";

export default function Navbar({ disableLinks }) {
  const [isExpanded, toggleExpansion] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!showScroll) {
      window.addEventListener(`scroll`, checkScrollTop);
      return () => window.removeEventListener(`scroll`, checkScrollTop);
    }
  });

  return (
    <>
      <header className="md:px-6 px-6 border-b-2 bg-white flex flex-wrap items-center pt-4 pb-3">
        <div className="flex-1 flex justify-between items-center">
          <a href="/">
            <img
              className="Logo pb-2"
              src={require("../images/DSCLogo.png")}
              alt="Logo"
            />
          </a>
        </div>
        <div class="block md:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            class="transition duration-700 ease-in-out hover:bg-gray-300 rounded flex items-center px-3 py-2 text-gray-700"
          >
            <svg
              class="h-4 w-4"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className={`${isExpanded ? `hidden` : `block`}`}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={`${isExpanded ? `block` : `hidden`}`}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {!disableLinks && (
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } top-navbar border-gray-900 w-full md:inline-flex md:w-auto px-2 pt-2 pb-3`}
            id="menu"
          >
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={200}
              className="md:p-4 pl-2 py-3 px-0 block border-b-2 border-transparent transition duration-150 hover:bg-gray-100 ease-in-out width:1px"
              href="#"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="Events"
              spy={true}
              smooth={true}
              offset={50}
              duration={600}
              delay={200}
              className="md:p-4 pl-2 py-3 px-0 block border-b-2 border-transparent transition duration-150 hover:bg-gray-100 ease-in-out width:1px"
              href="#"
            >
              Events
            </Link>
            <Link
              activeClass="active"
              to="Media"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
              delay={200}
              className="md:p-4 pl-2 py-3 px-0 block border-b-2 border-transparent transition duration-150 hover:bg-gray-100 ease-in-out width:1px"
              href="#"
            >
              Contact
            </Link>
          </div>
        )}
      </header>
      <Scroll showBelow={300} />
    </>
  );
}
