// Libs
import React, { FC } from "react";
import Image from "next/image";

// Resources
import profilePicture from "../../public/img/dylan.webp";
import fallBackProfilePicture from "../../public/img/dylan.jpeg";
import { IoArrowForwardOutline } from "react-icons/io5";

// Components
import Button from "../Button/Button";

// Types
type IHero = {
  innerRef?: any;
  heroIcon?: any;
  src?: any;
};

// Component
const Hero: FC<IHero> = ({
  innerRef,
  heroIcon = <IoArrowForwardOutline />,
  src,
}) => {
  return (
    <div className="hero" ref={innerRef}>
      <div
        data-grid
        data-cols="12"
        className="container"
        data-container-size="l"
      >
        <div className="hero__image">
          <Image
            src={profilePicture ? fallBackProfilePicture : src}
            alt="Dylan van Zanten"
            quality={100}
            style={{
              maxHeight: "750px",
              width: "100%",
              objectFit: "cover",
            }}
            placeholder="blur"
            sizes="(min-width: 768px) 100vw,
              (min-width: 1200px) 50vw,
              33vw"
          />
        </div>

        <div className="hero__content">
          <h1>Hey, nice to meet you!</h1>
          <h2>I’m Dylan</h2>
          <p className="hero__lead">
            A digital creative with a passion for digital products that involve
            design, branding and code — loves to work in a cross-functional team
            towards a shared vision.
          </p>
          <Button
            type="text"
            label={`Get to know me`}
            icon={heroIcon}
            element="link"
            href="/about"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
