import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import idgen from "../../utils/idgen";

export const TextField = props => {
  const {
    children,
    className,
    focusColor,
    iconClasses,
    id,
    label,
    onChange,
    onBlur,
    onFocus,
    placeholder,
    value,
    ...other
  } = props;

  const [focus, setFocus] = React.useState(false);
  const handleFocus = () => {
    onFocus && onFocus();
    setFocus(true);
  };
  const handleBlur = () => {
    onBlur && onBlur();
    setFocus(false);
  };
  const identifier = id || idgen();

  const rootClasses = `flex items-left border-b-three-halves ${
    focus ? `border-${focusColor}-500` : "border-gray-500"
  } py-2 flex-col`;
  const selectClasses =
    "appearance-none bg-transparent border-none w-full text-gray-700 py-1 pl-1 pr-8 leading-tight focus:outline-none";
  const postfixClasses = `pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ${
    focus ? `text-${focusColor}-500` : "text-gray-700"
  }`;

  return (
    <div className={cx(rootClasses, className)}>
      {label && (
        <label
          htmlFor={identifier}
          className={`mb-3 text-lg ${focus ? `text-${focusColor}-500` : ""}`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          onChange={e => {
            onChange && onChange(e);
          }}
          id={identifier}
          value={value}
          placeholder={placeholder}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={selectClasses}
          {...other}
        ></input>
        <div className={postfixClasses}>
          <i class={iconClasses}></i>
        </div>
      </div>
    </div>
  );
};

TextField.defaultProps = {
  className: "",
  value: "",
  focusColor: "blue",
};

TextField.propTypes = {
  /**
   * ClassNames to apply to root element
   */
  className: PropTypes.string,
  focusColor: PropTypes.oneOf(["red", "green", "blue", "yellow"]),
  id: PropTypes.string,
  /**
   * Label text
   */
  label: PropTypes.string,
  /**
   * onChange event hook
   */
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  /**
   * Color of select element upon user focus
   */
};

export default TextField;
