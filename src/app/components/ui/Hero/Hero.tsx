import React from "react";
import LinkButton from "../LinkButton/LinkButton";

export interface IHeroProps {
  pageTitle?: string;
  actionText: string;
  actionLink: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  heroButtonTitle: string;
}

const Hero = ({
  heroImage,
  actionText,
  actionLink,
  heroTitle,
  heroDescription,
}: IHeroProps) => {
  console.log(heroTitle);

  return (
    <section className="hero">
      <h1 className="hero_title">{heroTitle}</h1>
      <div className="hero_info">
        <div className="heroImage">{`${heroImage}`}</div>
        <div className="hero_text">{heroDescription}</div>
        <LinkButton title={actionText} link={actionLink} variant="filled" />
      </div>
    </section>
  );
};

export default Hero;
