import Image from "next/image";
import { getStrapiMedia } from "@/app/utils/helpers";
import { ITextPaletteWithIconsItemProps } from "@/types";

import styles from "./textPaletteWithIconsItem.module.scss";

const TextPaletteWithIconsItem = ({
  title,
  icon,
  description,
}: ITextPaletteWithIconsItemProps) => {
  const { url, alternativeText } = icon.attributes;
  const iconUrl = getStrapiMedia(url);

  return (
    <div className={styles.textPalette_item}>
      <div className={styles.textPalette_item_imageWrapper}>
        <div className={styles.textPalette_item_thumb}>
          <Image src={iconUrl} fill alt={alternativeText || ""} />
        </div>
      </div>
      <div className={styles.textPalette_item_content}>
        <h3 className={styles.textPalette_item_title}>{title}</h3>
        <p className={styles.textPalette_item_description}>{description}</p>
      </div>
    </div>
  );
};

export default TextPaletteWithIconsItem;
