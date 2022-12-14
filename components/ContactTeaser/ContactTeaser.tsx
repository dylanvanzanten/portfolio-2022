import Button from "../Button/Button";

const ContactTeaser = () => {
  return (
    <>
      <div className="contact-teaser">
        <div className="contact-teaser__content">
          <h3>Interested?</h3>
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
