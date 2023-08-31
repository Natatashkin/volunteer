"use client";
import { INavigationListProps } from "@/types";
import React from "react";
import styles from "./primaryNavigation.module.scss";
import { usePathname } from "next/navigation";
import { getNoLocalizedPath } from "@/app/utils/getNoLocalizedPath";
import PrymaryNavigationItem from "../../PrimaryNavigationItem/PrimaryNavigationItem";

const PrimaryNavigation = ({ items }: INavigationListProps) => {
  const path = usePathname();

  return (
    <ul aria-label="Menu List" className={styles.list}>
      {items.map(({ id, attributes }) => {
        const { title, link, nested_menu_items } = attributes;
        const itemPath = getNoLocalizedPath(path);
        const isActive = link === itemPath || link !=='/' && path.includes(link);

        return (
          <PrymaryNavigationItem
            key={id}
            title={title}
            link={link}
            nestedItems={nested_menu_items.data}
            isActive={isActive}
          />
        );
      })}
    </ul>
  );
};

export default PrimaryNavigation;
