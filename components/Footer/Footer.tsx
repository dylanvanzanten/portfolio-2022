// Resources
import Logo from "/public/logo.svg";

const Footer = () => {
  const footercopy = new Date();
  return (
    <footer className="footer">
      <div data-grid data-cols="12" className="container">
        <span className="footer__logo">
          <Logo />
          <a className="footer__home-link" href="">
            Go home
          </a>
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
