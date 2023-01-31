import Image from "next/image";
import Button from "../Button/Button";

const ContactTeaser = () => {
  return (
    <>
      <div className="contact-teaser">
        <div className="contact-teaser__image">
          <Image
            src="/img/wave-contact.svg"
            alt="Dylan van Zanten"
            quality={100}
            width={120}
            height={100}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="contact-teaser__content">
          <h1>Interested?</h1>
          <p>
            I&apos;m happy to talk about a possible project, working together,
            looking for new opportunities or just to catch up. If you&apos;d
            like to get in touch, just shoot me an message!
          </p>
          <Button label={`Let's talk!`} element="link" href="/contact" />
        </div>
      </div>
    </>
  );
};

export default ContactTeaser;
