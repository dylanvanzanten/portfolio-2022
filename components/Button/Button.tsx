// Libs
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

// Component
const Button = ({
  classNames,
  element,
  label,
  type,
  buttonType,
  href,
  tstId,
  icon,
  handleClick,
  target,
  isLoading,
  isDisabled,
  ...attributes
}) => {
  return (
    <>
      <Link
        className={`button ${
          type ? `button--${type}` : ""
        } ${classNames}`.trim()}
        type={buttonType || undefined}
        href={href}
        data-test-id={tstId}
        onClick={handleClick}
        target={target}
        disabled={isDisabled || isLoading}
        {...attributes}
      >
        {label && type !== "icon" && label}
        {label && type === "icon" && <label>{label}</label>}
        <span className="button__icon">{icon && icon}</span>
      </Link>
    </>
  );
};

// Props
Button.defaultProps = {
  classNames: "",
  label: "",
  buttonType: "",
  href: "",
  handleClick: function defaultFunction() {},
  isLoading: false,
};

const { bool, func, string, object } = PropTypes;

Button.propTypes = {
  classNames: string,
  element: string,
  label: string,
  type: string,
  buttonType: string,
  href: string,
  tstId: string,
  icon: object,
  handleClick: func,
  target: string,
  isLoading: bool,
  disabled: string,
  isDisabled: bool,
};

export default Button;
