"use client";
import { ICollectionItem, IFeaturesProps } from "@/types";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
import styles from "./features.module.scss";
import Container from "../../Container/Container";
import { generateKey } from "@/app/utils/helpers";

const Features = ({ features, title, description }: IFeaturesProps) => {
  return (
    <Container>
      <section className={styles.features}>
        <h2 className={styles.features_title}>{title}</h2>
        <p className={styles.features_description}>{description}</p>
        <div className={styles.features_container}>
          {features.data.map(
            ({
              id,
              attributes: { title, description, icon },
            }: ICollectionItem) => {
              const itemKey = generateKey(id, title);
              return (
                <FeaturesItem
                  key={itemKey}
                  title={title}
                  description={description || ""}
                  icon={icon?.data}
                />
              );
            }
          )}
        </div>
      </section>
    </Container>
  );
};

export default Features;
