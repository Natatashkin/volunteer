"use client";
import { useState } from "react";
import { getStrapiMedia } from "@/app/utils/helpers";

import styles from "./featuresItem.module.scss";
import Icon from "../Icon/Icon";

export interface IFeaturesItemProps {
  title: string;
  description: string;
  icon: any;
}

const FeaturesItem = ({ title, description, icon }: IFeaturesItemProps) => {
  const [loading, setLoading] = useState(true);
  const iconHref = getStrapiMedia(icon.data.attributes.url);

  console.log(loading, "loading");

  return (
    <>
      {!loading && (
        <div className={styles.features_item}>
          <h3 className={styles.features_item_title}>{title}</h3>
          <Icon url={iconHref} className="icon" setLoading={setLoading} />
          <p>{description}</p>
        </div>
      )}
    </>
  );
};

export default FeaturesItem;
