import React from "react";
import Particles from "react-particles-js";
import { particleParams } from "./config";

const SplashParticle = () => {
  return (
    <Particles
      className="z-10 absolute mt-0 bg-local h-full lg:h-5/4 lg:w-5/4 lg:-top-9/8 lg:-left-9/8"
      width="100%"
      height="100%"
      params={particleParams}
    />
  );
};

export default SplashParticle;
