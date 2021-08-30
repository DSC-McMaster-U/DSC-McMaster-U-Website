import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <FaArrowCircleUp
          className="fixed w-full bottom-0 z-20 cursor-pointer right-0 opacity-50 hover:opacity-100"
          onClick={handleClick}
          style={{ height: 40 }}
        />
      )}
    </div>
  );
};
export default Scroll;
