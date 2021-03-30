import React from "react";
import cx from "classnames";

const Typography = ({ children, className }) => {
  return (
    <p className={cx("text-gray-700 text-lg mb-5 leading-relaxed", className)}>
      {children}
    </p>
  );
};
export default Typography;
