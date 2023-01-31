import React, { FC } from "react";
import Image from "next/image";
import profilePicture from "../../public/img/dylan.jpg";
import Button from "../Button/Button";

import { IoIosArrowRoundForward } from "react-icons/io";

type IHeroProps = {
  innerRef?: any;
  heroIcon?: any;
};

// Component
const Hero: FC<IHeroProps> = ({
  innerRef,
  heroIcon = <IoIosArrowRoundForward />,
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
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
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
