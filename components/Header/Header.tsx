import React from "react";

// Components
import Navigation from "../Navigation/Navigation";

// Resources
import Logo from "/public/logo.svg";

// Component
const Header = ({ innerRef }) => {
  return (
    <header className="header" ref={innerRef}>
      <div className="container">
        <span className="header__logo">
          <Logo />
          <a className="header__home-link" href="">
            Go home
          </a>
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
