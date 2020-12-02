import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Button = React.forwardRef((props, ref) => {
  const {
    bg,
    children,
    className,
    color,
    disabled,
    float,
    node,
    onClick,
    size,
    type,
    variant,
    href,
    ...other
  } = props;

  const C = node;

  const classes = {
    base: [
      "rounded-sm",
      "uppercase",
      `focus:shadow-outline-${bg}`,
      "focus:outline-none",
      "cursor-pointer",
    ],
    fill: [
      `bg-${bg}-500`,
      `hover:bg-${bg}-600`,
      color ? `text-${color}-500` : "text-white",
    ],
    outline: [
      "bg-transparent",
      `hover:bg-${bg}-600`,
      color ? `text-${color}-500` : `text-${bg}-500`,
      `border-${bg}-500`,
      "border",
      "hover:text-white",
    ],
    sm: ["px-4", "py-3", "text-sm"],
    md: ["px-5", "py-4", "text-md"],
    lg: ["px-6", "py-4", "text-lg"],
    xl: ["px-6", "py-4", "text-xl"],
    disabled: ["cursor-not-allowed", "opacity-50"],
  };
  if (node == "a")
    return (
      <a href={href}>
        <button
          {...other}
          disabled={disabled}
          onClick={onClick}
          ref={ref}
          type={type}
          className={cx(
            classes["base"],
            className,
            classes[variant],
            classes[size],
            float ? "shadow-lg" : "shadow-none",
            disabled ? classes["disabled"] : []
          )}
        >
          {children}
        </button>
      </a>
    );
  return (
    <button
      {...other}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      type={type}
      className={cx(
        classes["base"],
        className,
        classes[variant],
        classes[size],
        float ? "shadow-lg" : "shadow-none",
        disabled ? classes["disabled"] : []
      )}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  /**
   * Background color
   */
  bg: PropTypes.oneOf(["blue", "yellow", "green", "red"]),
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Font color
   */
  color: PropTypes.oneOf(["red", "green", "yellow", "blue"]),
  disabled: PropTypes.bool,
  /**
   * The element used for the root node.
   */
  node: PropTypes.oneOf(["a"]),
  onClick: PropTypes.func,

  /**
   * Determines font & padding size
   */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
};

Button.defaultProps = {
  bg: "blue",
  children: undefined,
  className: "",
  color: undefined,
  disabled: false,
  node: "button",
  onClick: null,
  size: "md",
  type: "button",
  variant: "fill",
};

export default Button;
