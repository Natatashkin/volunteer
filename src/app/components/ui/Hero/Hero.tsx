"use client";
import React from "react";
import LinkButton from "../LinkButton/LinkButton";
import Image from "next/image";
import styles from "./hero.module.scss";
import Container from "../../Container/Container";
import { useAppContext } from "@/app/context/appContext";
import { getLink } from "@/app/utils/helpers";

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
  const { navData } = useAppContext();

  const heroActionLink = getLink(navData, actionLink);

  return (
    <section className={styles.hero}>
      <Image src={heroImage} className={styles.hero_image} fill alt="" />
      <div className={styles.hero_info}>
        <h1 className={styles.hero_info_title}>{heroTitle}</h1>
        <div>
          <div className={styles.hero_info_text}>{heroDescription}</div>
          <div className={styles.hero_info_linkWrapper}>
            <LinkButton
              title={actionText}
              link={heroActionLink}
              variant="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
