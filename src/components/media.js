import React from "react";
import announce_freepik from "../images/media_freepik.jpg";
import logo from "../images/icon.png";

function Media() {
  const imageStyle = "mt-12 hidden md:block md:h-350";
  const mediaLinkStyle = "my-2 text-lg lg:inline-block md:text-xl";
  const handleStyle = "hidden ml-2 sm:inline-block sm:text-lg";

  return (
    <section className="relative mt-20 mb-10">
      <div className="container mx-auto">
        <div className="flex pl-12 md:pl-5">
          <div className="w-auto md:w-2/3">
            <div className="flex">
              {/* Follow Us + Updates*/}
              <div className="w-auto lg:w-2/3">
                <h1 className="text-5xl mb-1 text-center md:text-right lg:mr-12 sm:text-6xl">
                  Follow Us{" "}
                </h1>
                <div className="inline-block">
                  <p className="text-xl mb-5 text-gray-600 lg:text-2xl">
                    <img
                      className="inline-block mr-3 lg:ml-16"
                      src={logo}
                    ></img>
                    Get the latest updates
                  </p>
                </div>
              </div>
              {/* Comment Logo */}
              <div className="w-0 lg:w-1/3">
                <p className="hidden lg:block text-6xl mt-16 mr-20">
                  <i class="far fa-comments"></i>
                </p>
              </div>
            </div>
            {/* Media Handles */}
            <div className="flex ">
              {/* left column */}
              <div className="w-1/2">
                <div className={mediaLinkStyle}>
                  <a href="#" className="ml-5">
                    <i class="fab fa-facebook text-4xl text-blue-500"></i>
                    <span className={handleStyle}>DSC_McMaster</span>
                  </a>
                </div>
                <div className={mediaLinkStyle}>
                  <a href="#" className="ml-5">
                    <i class="fab fa-discord text-4xl text-purple-700"></i>
                    <span className={handleStyle}>DSC_McMaster</span>
                  </a>
                </div>
                <div className={mediaLinkStyle}>
                  <a href="#" className="ml-5">
                    <i class="fab fa-instagram text-4xl text-pink-900"></i>
                    <span className={handleStyle}>DSC_McMaster</span>
                  </a>
                </div>
              </div>
              {/* right column */}
              <div className="w-1/2">
                <div className={mediaLinkStyle}>
                  <a href="#" className="ml-5">
                    <i class="fab fa-linkedin text-4xl text-blue-600"></i>
                    <span className={handleStyle}>DSC_McMaster</span>
                  </a>
                </div>
                <div className={mediaLinkStyle}>
                  <a href="#" className="ml-5">
                    <i class="fab fa-github text-4xl "></i>
                    <span className={handleStyle}>DSC_McMaster</span>
                  </a>
                </div>
                <div className={mediaLinkStyle}>
                  <a href="#" className="ml-5">
                    <i class="fab fa-twitter text-4xl text-blue-500"></i>
                    <span className={handleStyle}>DSC_McMaster</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-0 md:w-1/3">
            <div>
              <img
                className={imageStyle}
                src={announce_freepik}
                alt="Designed by slidesgo/Freepik"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Media;
