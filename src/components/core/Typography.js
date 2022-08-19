import React from "react";
import cx from "classnames";
import PropType from "prop-types";
const Typography = ({ children, className, variant }) => {
  const variants = {
    h1: "text-5xl mb-5",
    h2: "text-4xl mb-4",
    h3: "text-3xl mb-3",
    p: "text-lg text-gray-600 mb-5",
  };

  const Root = variant;
  return (
    <Root className={cx("leading-relaxed", variants[variant], className)}>
      {children}
    </Root>
  );
};
Typography.propTypes = {
  variant: PropType.oneOf(["p", "h1", "h2", "h3"]),
};
Typography.defaultProps = {
  variant: "p",
};

export default Typography;
