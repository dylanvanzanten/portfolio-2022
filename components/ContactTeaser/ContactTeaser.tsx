import Link from "next/link";

const ContactTeaser = () => {
  return (
    <>
      <div className="contact-teaser">
        <div className="contact-teaser__content">
          <h3></h3>
          <p></p>
          <Link href="/about">Get to know me</Link>
        </div>
      </div>
    </>
  );
};

export default ContactTeaser;
