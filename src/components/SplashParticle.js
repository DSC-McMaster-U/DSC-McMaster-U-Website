import React from "react";
import Particles from "react-particles-js";

const SplashParticle = () => {
  return (
    <Particles
      className="z-10 absolute mt-0 bg-local h-full lg:h-5/4 lg:w-5/4 lg:-top-9/8 lg:-left-9/8"
      width="100%"
      height="100%"
      params={{
        particles: {
          move: {
            bounce: false,
            speed: 2,
          },
          number: {
            value: 5,
            density: {
              enable: true,
              value_area: 300,
            },
          },
          opacity: {
            value: 0.6,
            anim: {
              enable: false,
            },
          },
          color: {
            value: ["#FBBC04", "#4285F4", "#34A853", "#EA4335"],
          },
          size: {
            value: 70,
            random: true,
            anim: {
              enable: true,
              speed: 5,
              size_min: 45,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
          },
        },
      }}
    />
  );
};

export default SplashParticle;
