import React, { FC } from "react";
import Image from "next/image";
import Emoji from "react-emojis";

import Button from "../Button/Button";

type ICaseTeaserProps = {
  caseColor?: string;
  caseImage?: string;
  caseImageAlt?: string;
  caseIcon?: any;
  caseTitle?: string;
  caseContent?: string;
  caseTags?: string[];
  caseLink?: string;
  caseLinkIcon?: any;
};

// Component
const CaseTeaser: FC<ICaseTeaserProps> = ({
  caseColor = "#000",
  caseImage = "https://via.placeholder.com/450.png",
  caseImageAlt = "Placeholder image",
  caseIcon = <Emoji emoji="man-superhero" />,
  caseTitle = "A project title",
  caseContent = "Project content here",
  caseTags = ["Branding", "Design", "Development"],
  caseLink = "https://dylanvanzanten.nl.nl",
  caseLinkIcon = <ion-icon name="arrow-forward-outline" />,
}) => {
  return (
    <div
      className="case-teaser"
      data-span="12"
      style={{ ["--span"]: 12, ["--start"]: 1 }}
    >
      <div className="case-teaser__image" style={{ background: caseColor }}>
        <Image
          alt={caseImageAlt}
          src={caseImage}
          quality={100}
          blurDataURL="https://via.placeholder.com/450.png"
          placeholder="blur"
          width={450}
          height={450}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
          priority
        />
      </div>
      <div className="case-teaser__container">
        <h1 className="case-teaser__title">
          <span className="case-teaser__icon">{caseIcon}</span> {caseTitle}
        </h1>
        <p className="case-teaser__content">{caseContent}</p>

        <ul className="case-teaser__tags">
          {caseTags.map((tag: string) => (
            <li className="case-teaser__tags-item" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
        <Button
          type="icon"
          label={`View project`}
          icon={caseLinkIcon}
          element="link"
          href={caseLink}
        />
      </div>
    </div>
  );
};

export default CaseTeaser;
