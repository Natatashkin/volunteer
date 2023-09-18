"use client";

import styles from "./featuresItem.module.scss";
import Image from "next/image";
import { getStrapiMedia } from "@/app/utils/helpers";

export interface IFeaturesItemProps {
  title: string;
  description: string;
  icon: any;
}

const FeaturesItem = ({ title, description, icon }: IFeaturesItemProps) => {
  const { alternativeText, url } = icon.attributes;

  const iconHref = getStrapiMedia(url);

  return (
    <>
      {iconHref && (
        <div className={styles.features_item}>
          <h3 className={styles.features_item_title}>{title}</h3>
          <div className={styles.features_item_icon}>
            <Image src={iconHref} fill alt={alternativeText} />
          </div>
          <p>{description}</p>
        </div>
      )}
    </>
  );
};

export default FeaturesItem;
