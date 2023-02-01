// Libs
import Link from "next/link";

// Resources
import Logo from "/public/logo.svg";

// Component
const Footer = () => {
  const footercopy = new Date();
  return (
    <footer className="footer">
      <div data-grid data-cols="12" className="container">
        <span className="footer__logo">
          <Logo />
          <Link className="footer__home-link" href="/">
            Go home
          </Link>
        </span>
        <p>
          &copy; Copyleft {footercopy.getFullYear()} — website is in tinkering
          mode
        </p>
      </div>
    </footer>
  );
};

export default Footer;
