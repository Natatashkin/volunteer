"use client";
import { CollectionItem, IFeaturesProps } from "@/types";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
import styles from "./features.module.scss";
import Container from "../../Container/Container";

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
            }: CollectionItem) => {
              const key = `${title}-${id}`;
              return (
                <FeaturesItem
                  key={key}
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
