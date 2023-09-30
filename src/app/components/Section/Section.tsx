import React from "react";
import { ISectionProps } from "@/types";

import styles from "./section.module.scss";

const Section = ({ title = "", description = "", children }: ISectionProps) => {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.section_title}>{title}</h2>}
      {description && (
        <p className={styles.section_description}>{description}</p>
      )}
      {children}
    </section>
  );
};

export default Section;
