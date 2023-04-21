// Libs
import React from "react";
import Image from "next/image";
import Emoji from "react-emojis";

// Interfaces
import ICaseTeaser from "../../interface/ICaseTeaser";

// Component
const CaseTeaser = ({
  caseColor = "#000",
  caseImage = "https://via.placeholder.com/450.png",
  caseImageAlt = "Placeholder image",
  caseIcon = <Emoji emoji="man-superhero" />,
  caseTitle = "A project title",
  caseContent = "Project content here",
  caseTags = ["Branding", "Design", "Development"],
  caseLink = "https://dylanvanzanten.nl.nl",
}: ICaseTeaser) => {
  return (
    <a className="case-teaser" href={caseLink}>
      <article className="case-teaser__inner">
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
        </div>
      </article>
    </a>
  );
};

export default CaseTeaser;
