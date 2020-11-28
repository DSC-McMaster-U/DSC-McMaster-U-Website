import React from "react";
import cx from "classnames";

const highlights = {
  red: { textShadow: "0 0 10px RGBA(234,67,53,0.5)" },
  blue: { textShadow: "0 0 10px RGBA(66,133,244,0.5)" },
  green: { textShadow: "0 0 10px RGBA(52,168,83,0.5)" },
  yellow: { textShadow: "0 0 10px RGBA(251,188,4,0.5)" },
};

const HighlightedChar = ({ color, children }) => {
  return (
    <span style={highlights[color]} className={`font-bold text-${color}-400`}>
      {children}
    </span>
  );
};
export default HighlightedChar;
