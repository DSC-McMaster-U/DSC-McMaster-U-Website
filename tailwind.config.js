const { green, blue, red, yellow } = require("./src/utils/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    colors: {
      aboutBorder: "#ea4335",
      aboutBottomBorder: "#FBBC04",
    },
    borderRadius: {
      lg: "1rem",
      md: "0.45rem",
    },
    borderWidth: {
      default: "1px",
      0: "0",
      "three-halves": "1.5px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    extend: {
      boxShadow: {
        "outline-red": "0 0 0 3px rgba(92, 26, 21, 0.2)",
        "outline-green": "0 0 0 3px rgba(30, 142, 62, 0.5)",
        "outline-blue": "0 0 0 3px rgba(66, 153, 225, 0.5)",
        "outline-yellow": "0 0 0 3px rgba(249, 171, 0, 0.5)",
      },
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
