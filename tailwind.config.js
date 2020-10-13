const { green, blue, red, yellow } = require("./src/asset/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
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
