import React from "react";
import PropTypes from "prop-types";
import SplashParticle from "./SplashParticle";
import Button from "./Button";

import SplashGraph from "./../images/splash-alt.png";

const Splash = ({ subTitle }) => {
  return (
    <div className="lg:container md:container sm:container mt-20">
      {/* first row - splash content */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-20">
        {/* splash text */}
        <div className="grid grid-rows-3">
          <div>
            <h1 className="text-4xl">McMaster Developer Student Club</h1>
          </div>
          <div>
            <p>{subTitle}</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <Button
                bg="blue"
                children="Register Here"
                size="lg"
                type="button"
                variant="fill"
              />
            </div>
            <div>
              <Button
                bg="blue"
                children="contact us..."
                size="lg"
                type="button"
                variant="outline"
              />
            </div>
          </div>
        </div>
        {/* splash graphic image */}
        <div className="relative h-full">
          <div className="z-20 absolute ml-1 mt-0 bg-local h-full w-full">
            <SplashParticle />
          </div>
          <div className="z-10">
            <img src={SplashGraph} />
          </div>
        </div>
      </div>
    </div>
  );
};

Splash.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

Splash.defaultProps = {
  title: ``,
  subTitle: ``,
};

export default Splash;
