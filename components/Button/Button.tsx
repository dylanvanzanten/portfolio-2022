// Libs
import React from "react";
import Link from "next/link";

// Interfaces
import IButton from "@/components/Button/interface/IButton";

// Component
const Button = ({
  classNames,
  label,
  type,
  buttonType,
  href = "",
  tstId,
  icon,
  target,
  isLoading,
  isDisabled,
  ...attributes
}: IButton) => {
  return (
    <>
      <Link
        className={`button ${
          type ? `button--${type}` : ""
        } ${classNames}`.trim()}
        type={buttonType || undefined}
        href={href}
        data-test-id={tstId}
        target={target}
        disabled={isDisabled || isLoading}
        {...attributes}
      >
        {label && type !== "icon" && label}
        {label && type === "icon" && <label>{label}</label>}
        <span className="button__icon">{icon}</span>
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
  isLoading: false,
};

export default Button;
