import React from "react";
import cx from "classnames";
const Section = ({ id, children, className, last }) => {
  return (
    <section
      id={id}
      className={cx(
        "relative container mx-auto",
        { "mb-32 pb-32 border-b-4 border-blue-400": !last },
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
