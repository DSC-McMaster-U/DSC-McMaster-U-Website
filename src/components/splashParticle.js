import React from "react";
import { red, yellow, green, blue } from "../asset/colors";
import Particles from "react-particles-js";

const SplashParticle = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 10,
        },
        color: {
          value: [yellow[4], blue[4], green[4], red[4]],
        },
        size: {
          value: 10,
        },
        // "line_linked": {
        //     "enable": true,
        //     "distance": 150,
        //     "color": "#c8c8c8",
        //     "opacity": 0.4,
        //     "width": 1
        // },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
        },
      },
    }}
  />
);

export default SplashParticle;
