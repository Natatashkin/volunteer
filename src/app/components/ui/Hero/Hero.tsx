"use client";
import React from "react";
import LinkButton from "../LinkButton/LinkButton";
import Image from "next/image";
import styles from "./hero.module.scss";
import Container from "../../Container/Container";
import { useAppContext } from "@/app/context/appContext";
import { getLink, getStrapiMedia } from "@/app/utils/helpers";
import { IHeroProps } from "@/types";

const Hero = ({
  image,
  title,
  buttonLink,
  description,
  buttonTitle,
}: IHeroProps) => {
  const { navData } = useAppContext();

  // const heroLink = getLink(navData, buttonLink);
  const heroImagePath = getStrapiMedia(image.data[0].attributes.url);

  return (
    <section className={styles.hero}>
      <Image src={heroImagePath} className={styles.hero_image} fill alt="" priority/>
      <div className={styles.hero_info}>
        <h1 className={styles.hero_info_title}>{title}</h1>
        <p className={styles.hero_info_text}>{description}</p>
        <div className={styles.hero_info_linkWrapper}>
          <LinkButton title={buttonTitle} link={buttonLink} variant="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
