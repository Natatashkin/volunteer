"use client";
import { ICollectionItem, IFeaturesProps } from "@/types";
import { generateKey } from "@/app/utils/helpers";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
import Container from "../../Container/Container";
import Section from "../Section/Section";

import styles from "./features.module.scss";

const Features = ({ features, title, description }: IFeaturesProps) => {
  return (
    <Container>
      <Section title={title} description={description}>
        <div className={styles.features}>
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
      </Section>
    </Container>
  );
};

export default Features;
