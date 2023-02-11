// Libs
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

// Types
import Iheader from "../../interface/Iheader";

// Components
import Navigation from "../Navigation/Navigation";

// Resources
import Logo from "/public/logo.svg";

// Component
const Header = ({ innerRef }: Iheader) => {
  const header = useTranslations("Header");

  return (
    <header className="header" ref={innerRef}>
      <div data-grid data-cols="12" className="container">
        <span className="header__logo">
          <Logo />
          <Link className="header__home-link" href="/">
            {header("logoTitle")}
          </Link>
        </span>
        <Navigation />
      </div>
    </header>
  );
};

// Props
Header.defaultProps = {
  navigation: true,
};

export default Header;
