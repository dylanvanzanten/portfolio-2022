import React from "react";
import Link from "next/link";

// Components
import Navigation from "../Navigation/Navigation";

// Resources
import Logo from "/public/logo.svg";

// Component
const Header = ({ innerRef }) => {
  return (
    <header className="header" ref={innerRef}>
      <div data-grid data-cols="12" className="container">
        <span className="header__logo">
          <Logo />
          <Link className="header__home-link" href="/">
            Go home
          </Link>
        </span>
        <Navigation />
      </div>
    </header>
  );
};

Header.defaultProps = {
  navigation: true,
};

export default Header;
