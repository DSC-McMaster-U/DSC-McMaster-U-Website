import React from "react";

const Timeline = ({ children }) => {
  return (
    <div class="relative wrap h-full py-10">
      <div
        class="border-2-2 absolute border-opacity-20 border-blue-200 h-full border bg-blue-200"
        style={{ left: "50%" }}
      ></div>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          index: i + 1,
          ...child.props,
          leftHand: i % 2,
        })
      )}
    </div>
  );
};

export default Timeline;
