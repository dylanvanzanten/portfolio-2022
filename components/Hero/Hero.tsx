import React from "react";
import Image from "next/image";

// Component
const Hero = ({}) => {
  return (
    <div className="hero">
      <Image src={""} alt="Dylan van Zanten" layout="fill" objectFit="cover" />
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
  );
};

export default Hero;
