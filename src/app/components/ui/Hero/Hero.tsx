"use client";
import React from "react";
import LinkButton from "../LinkButton/LinkButton";
import Image from "next/image";
import styles from "./hero.module.scss";
import Container from "../../Container/Container";
import { useAppContext } from "@/app/context/appContext";
import { getLink } from "@/app/utils/helpers";

export interface IHeroProps {
  pageTitle: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  heroButtonTitle: string;
  heroButtonLink: string;
}

const Hero = ({
  heroImage,
  heroTitle,
  heroButtonLink,
  heroDescription,
  heroButtonTitle
}: IHeroProps) => {
  const { navData } = useAppContext();
  const heroLink = getLink(navData, heroButtonLink);

  return (
    <section className={styles.hero}>

      <Image src={heroImage} className={styles.hero_image} fill alt="" />
      <div className={styles.hero_info}>
       
          <h1 className={styles.hero_info_title}>{heroTitle}</h1>
          <p className={styles.hero_info_text}>{heroDescription}</p>
          <div className={styles.hero_info_linkWrapper}>
            <LinkButton
              title={heroButtonTitle}
              link={heroLink}
              variant="hero"
            />
          </div>
      </div>
    </section>
  );
};

export default Hero;
