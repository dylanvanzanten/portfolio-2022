import React, { useEffect } from "react";

// Components
import Navigation from "../Navigation/Navigation";

// Resources
import Logo from "/public/logo.svg";

// Component
const Header = ({}) => {
  useEffect(() => {
    const header = document.querySelector(".header");
    if (!header) return;

    const isSticky = () => {
      const scrollTop = window.scrollY;

      scrollTop >= 50
        ? header.classList.add("header--sticky")
        : header.classList.remove("header--sticky");
    };

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  return (
    <header className="header">
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
