// Components
import Typography from "@/components/Typography/Typography";
import Button from "@/components/Button/Button";

// Component
const ContactTeaser = () => {
  return (
    <>
      <div className="contact-teaser">
        <div className="contact-teaser__content">
          <Typography variant="h1" as="h3" color="white">
            Interested?
          </Typography>
          <Typography variant="body" color="white">
            I&apos;m happy to talk about a possible project, working together,
            looking for new opportunities or just to catch up. If you&apos;d
            like to get in touch, just shoot me an message!
          </Typography>
          <Button label={`Let's talk!`} href="/contact" />
        </div>
      </div>
    </>
  );
};

export default ContactTeaser;
