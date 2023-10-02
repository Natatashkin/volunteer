import React from "react";
import PageCategory from "../ui/PageCategory/PageCategory";
import { generateKey, generateLink } from "@/app/utils/helpers";
import styles from "./categoriesList.module.scss";

export interface ICategoryListItem {
  id: number;
  attributes: {
    slug: string;
    title: string;
    image: any;
  };
}

export interface ICategoryListProps {
  list: ICategoryListItem[];
  parentSlug: string;
}

const CategoriesList = ({ list, parentSlug }: ICategoryListProps) => {
  return (
    <ul className={styles.list}>
      {list.map(({ id, attributes }) => {
        const { title, slug, image } = attributes;
        const itemKey = generateKey(id, title);
        return (
          <PageCategory
            key={itemKey}
            title={title}
            parentSlug={parentSlug}
            link={slug}
            image={image}
          />
        );
      })}
    </ul>
  );
};

export default CategoriesList;
