import React, { useEffect, useState } from "react";
import Link from "next/link";

import toggleScrollLock from "../../public/js/ui/toggleScrolLock.js";

// Component
const Navigation = ({}) => {
  const [isOpen, setIsopen] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-nav-is-open", JSON.stringify(isOpen));
    toggleScrollLock(isOpen);
  }, [isOpen]);

  return (
    <nav className="site-nav">
      <button
        className="site-nav-open"
        data-is-open={isOpen}
        onClick={() => setIsopen(!isOpen)}
        data-site-nav-toggle
      >
        <span>Open</span>
      </button>
      <div className="site-nav-overlay">
        <div className="site-nav-overlay__container">
          <div className="container">
            <h2>Menu</h2>
            <button
              className="site-nav-overlay__close"
              data-is-open={isOpen}
              onClick={() => setIsopen(!isOpen)}
              data-site-nav-toggle
            >
              <span>Close</span>
            </button>
          </div>
        </div>
        <ul className="site-nav__list">
          <li className="site-nav__list-item">
            <Link className="site-nav__list-link" href="">
              Link
            </Link>
          </li>
          <li className="site-nav__list-item">
            <Link className="site-nav__list-link" href="">
              Link
            </Link>
          </li>
          <li className="site-nav__list-item">
            <Link className="site-nav__list-link" href="">
              Link
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
