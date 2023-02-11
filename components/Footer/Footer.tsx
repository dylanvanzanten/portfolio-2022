// Libs
import { useTranslations } from "next-intl";
import Link from "next/link";

// Resources
import Logo from "/public/logo.svg";

// Component
const Footer = () => {
  const navigationLogo = useTranslations("Header");
  const footerContent = useTranslations("Footer");
  const footercopy = new Date();
  return (
    <footer className="footer">
      <div data-grid data-cols="12" className="container">
        <span className="footer__logo">
          <Logo />
          <Link className="footer__home-link" href="/">
            {navigationLogo("logoTitle")}
          </Link>
        </span>
        <p>
          &copy; {footerContent("copy")} {footercopy.getFullYear()}{" "}
          {footerContent("content")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
