"use client";
import { INavigationListProps } from "@/types";
import NavigationItem from "../../NavigationItem/NavigationItem";
import React, { useState } from "react";
import styles from "./primaryNavigation.module.scss";
import { usePathname } from "next/navigation";
import { getNoLocalizedPath } from "@/app/utils/getNoLocalizedPath";

const PrimaryNavigation = ({ items, toggleOpenList }: INavigationListProps) => {
  const path = usePathname();

  return (
    <ul aria-label="Menu List" className={styles.primaryNavList}>
      {items.map(({ id, attributes }) => {
        const { title, link, nested_menu_items } = attributes;
        const itemPath = getNoLocalizedPath(path);
        const isActive = link === itemPath;
     
        return (
          <NavigationItem
            key={id}
            title={title}
            link={link}
            nestedItems={nested_menu_items.data}
            isActive={isActive}
            onClick={() => {}}
          />
        );
      })}
    </ul>
  );
};

export default PrimaryNavigation;
