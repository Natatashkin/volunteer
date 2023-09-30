import React from "react";
import { IComponentItemWIthIcon, TTextPaletteWithIconsProps } from "@/types";
import { generateKey } from "@/app/utils/helpers";
import Section from "../Section/Section";
import Container from "../Container/Container";
import TextPaletteWithIconsItem from "./TextPaletteWithIconsItem/TextPaletteWithIcons";

import styles from "./textPaletteWithIcons.module.scss";

const TextPaletteWithIcons = ({
  title = "",
  description = "",
  items = [],
}: TTextPaletteWithIconsProps) => {
  return (
    <Container>
      <Section title={title} description={description}>
        <div className={styles.textPalette}>
          {items.map(
            ({ title, description, icon, id }: IComponentItemWIthIcon) => {
              const itemKey = generateKey(id, title);

              return (
                <TextPaletteWithIconsItem
                  key={itemKey}
                  title={title}
                  description={description}
                  icon={icon.data}
                />
              );
            }
          )}
        </div>
      </Section>
    </Container>
  );
};

export default TextPaletteWithIcons;
