import React from "react";
import Image from "next/image";
import profilePicture from "../../public/img/dylan.jpg";

// Component
const Hero = ({ innerRef }) => {
  return (
    <div className="hero" ref={innerRef}>
      <div className="container" data-container-size="l">
        <div className="hero__image">
          <Image
            src={profilePicture}
            alt="Dylan van Zanten"
            quality={100}
            style={{
              maxHeight: "750px",
              width: "100%",
              objectFit: "cover",
            }}
            placeholder="blur"
            priority
          />
        </div>

        <div className="hero__content">
          <h1>Hey, nice to meet you!</h1>
          <h6>I’m Dylan</h6>
          <p className="hero__lead">
            A digital creative with a passion for digital products that involve
            design, branding and code — loves to work in a cross-functional team
            towards a shared vision.
          </p>
          <a href="/about">Get to know me</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
