"use client";
import { INavigationListProps } from "@/types";
import NavigationItem from "../../PrimaryNavigationItem/PrimaryNavigationItem";
import React, { useState } from "react";
import styles from "./primaryNavigation.module.scss";
import { usePathname } from "next/navigation";
import { getNoLocalizedPath } from "@/app/utils/getNoLocalizedPath";
import PrymaryNavigationItem from "../../PrimaryNavigationItem/PrimaryNavigationItem";

const PrimaryNavigation = ({ items, locale }: INavigationListProps) => {
  const path = usePathname();

  return (
    <ul aria-label="Menu List" className={styles.list}>
      {items.map(({ id, attributes }) => {
        const { title, link, nested_menu_items } = attributes;
        const itemPath = getNoLocalizedPath(path);
        const isActive = link === itemPath;

        return (
          <PrymaryNavigationItem
            key={id}
            title={title}
            link={link}
            nestedItems={nested_menu_items.data}
            isActive={isActive}
            // locale={locale}
          />
        );
      })}
    </ul>
  );
};

export default PrimaryNavigation;
