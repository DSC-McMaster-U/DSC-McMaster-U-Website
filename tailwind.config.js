const { green, blue, red, yellow } = require("./src/utils/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    options: {
      whitelistPatterns: [
        /(bg|text)-(red|blue|yellow|green)/,
        /outline-(red|blue|yellow|green)/,
        /border-(red|blue|yellow|green)/,
      ],
    },
  },
  theme: {
    borderWidth: {
      default: "1px",
      0: "0",
      "three-halves": "1.5px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    boxShadow: {
      xs:
        "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",
      sm:
        "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)",
      shadow:
        "0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20)",
      md:
        "0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)",
      lg:
        "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20)",
      xl:
        "0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20)",
      "2xl":
        "0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)",
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
      minWidth: {
        12: "3rem",
      },
      inset: {
        "-9/8": "-12.5%",
      },
      width: {
        "5/4": "125%",
      },
      height: {
        "5/4": "125%",
      },
    },
  },
  variants: {},
  plugins: [],
};
