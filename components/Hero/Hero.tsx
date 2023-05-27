// Libs
import React from "react";
import Image from "next/image";

// Interfaces
import IHero from "@/components/Hero/interface/IHero";
import IButton from "@/components/Button/interface/IButton";

// Components
import Typography from "@/components/Typography/Typography";
import Button from "@/components/Button/Button";

// Resources
import profilePicture from "@/public/img/dylan.webp";
import fallBackProfilePicture from "@/public/img/dylan.jpeg";
import { IoArrowForwardOutline } from "react-icons/io5";

// Component
const Hero = ({
  innerRef,
  heroIcon = <IoArrowForwardOutline />,
  src = "./../public/img/dylan.webp",
}: IHero & IButton) => {
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
              // For Safari
              maxWidth: "500px",
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
          <Typography variant="h1" color="white">
            Hey, nice to meet you!
          </Typography>
          <Typography variant="h2" color="white">
            I’m Dylan
          </Typography>
          <Typography variant="body" color="white" className="hero__lead">
            {" "}
            A digital creative with a passion for digital products that involve
            design, branding and code — loves to work in a cross-functional team
            towards a shared vision.
          </Typography>
          <Button
            type="text"
            label={`Get to know me`}
            icon={heroIcon}
            href="/about"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
