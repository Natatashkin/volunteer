import React from "react";
import { TTextImageButtonCircleBlockProps } from "@/types";
import Container from "../Container/Container";
import Section from "../Section/Section";

import styles from "./textImageButtonCircleBlock.module.scss";
import LinkButton from "../ui/LinkButton/LinkButton";
import Image from "next/image";
import { getStrapiMedia } from "@/app/utils/helpers";

const TextImageButtonCircleBlock = ({
  title,
  description,
  image,
  button,
}: TTextImageButtonCircleBlockProps) => {
  const { title: buttonTitle, link: buttonLink } = button;
  const { url, alternativeText } = image.data.attributes;
  const imageUrl = getStrapiMedia(url);
  return (
    <Container>
      <Section>
        <div className={styles.textImageButtonCircleBlock}>
          <div className={styles.textImageButtonCircleBlock_content}>
            <div className={styles.textImageButtonCircleBlock_textWrapper}>
              <p className={styles.textImageButtonCircleBlock_text}>
                {description}
              </p>
            </div>
            <div className={styles.textImageButtonCircleBlock_buttonWrapper}>
              <LinkButton
                title={buttonTitle}
                link={buttonLink}
                variant="filled"
              />
            </div>
          </div>
          <div className={styles.textImageButtonCircleBlock_visualContent}>
            <div
              className={styles.textImageButtonCircleBlock_visualContentWrapper}
            >
              <div className={styles.textImageButtonCircleBlock_thumb}>
                <Image src={imageUrl} fill alt={alternativeText} />
              </div>
              <div
                className={styles.textImageButtonCircleBlock_circleBlock}
              ></div>
            </div>
            <h2 className={styles.textImageButtonCircleBlock_title}>{title}</h2>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default TextImageButtonCircleBlock;
