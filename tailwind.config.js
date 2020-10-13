const { green, blue, red, yellow } = require("./src/utils/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    borderWidth: {
      default: "1px",
      0: "0",
      "three-halves": "1.5px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    extend: {
      colors: {
        green,
        blue,
        red,
        yellow,
      },
    },
  },
  variants: {},
  plugins: [],
};
