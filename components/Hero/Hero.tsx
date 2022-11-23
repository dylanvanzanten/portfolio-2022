import React from "react";
import Image from "next/image";
import profilePicture from "../../public/img/dylan.jpg";
import Wave from "../../public/img/wave.svg";

// Component
const Hero = ({}) => {
  return (
    <div className="hero">
      <div className="container">
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
          <Wave />
        </div>

        <div className="hero__content">
          <h6>Hey, nice to meet you!</h6>
          <h1>I’m Dylan</h1>
          <p>
            A digital creative with a passion for digital products that involve
            design, branding and code — loves to work in a cross-functional team
            towards a shared vision.
          </p>
          <a href="#">Get to know me</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
