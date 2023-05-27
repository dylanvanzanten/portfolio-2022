import React from "react";
import { ITypography } from "@/components/Typography/interface/ITypography";

const Typography = ({
  variant = "h1",
  color = "black",
  className,
  as,
  children,
}: ITypography) => {
  let Component: React.ElementType;

  switch (as || variant) {
    case "h1":
      Component = "h1";
      break;
    case "h2":
      Component = "h2";
      break;
    case "h3":
      Component = "h3";
      break;
    case "h4":
      Component = "h4";
      break;
    case "h5":
      Component = "h5";
      break;
    case "h6":
      Component = "h6";
      break;
    case "intro":
    case "body":
      Component = "p";
      break;
    case "text-caption-large":
    case "text-caption":
    case "text-caption-small":
      Component = "span";
      break;
    default:
      Component = "h1";
      break;
  }

  const classNames = [`color-${color}`, className].filter(Boolean).join(" ");

  return <Component className={classNames}>{children}</Component>;
};

export default Typography;
