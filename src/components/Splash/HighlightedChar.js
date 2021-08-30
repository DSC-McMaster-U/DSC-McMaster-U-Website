import React from "react";

const highlights = {
  red: { textShadow: "0 0 12px RGBA(234,67,53,0.6)" },
  blue: { textShadow: "0 0 12px RGBA(66,133,244,0.6)" },
  green: { textShadow: "0 0 12px RGBA(52,168,83,0.6)" },
  yellow: { textShadow: "0 0 12px RGBA(251,188,4,0.6)" },
};

const HighlightedChar = ({ color, char }) => {
  return (
    <span style={highlights[color]} className={`font-bold text-${color}-400`}>
      {char}
    </span>
  );
};
export default HighlightedChar;
