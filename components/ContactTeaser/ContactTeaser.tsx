// Libs
import { useTranslations } from "next-intl";
import Button from "../Button/Button";

// Component
const ContactTeaser = () => {
  const contactTeaserContent = useTranslations("contactTeaser");
  return (
    <>
      <div className="contact-teaser">
        <div className="contact-teaser__content">
          <h1>{contactTeaserContent("title")}</h1>
          <p>{contactTeaserContent("content")}</p>
          <Button label={`Let's talk!`} element="link" href="/contact" />
        </div>
      </div>
    </>
  );
};

export default ContactTeaser;
