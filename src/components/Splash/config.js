import { red, blue, green, yellow } from "../../utils/colors";

export const particleParams = {
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
      value: [red[400], blue[400], green[400], yellow[400]],
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
};
