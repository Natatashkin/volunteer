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
    <nav className={styles.navigation}>
      <ul aria-label="Menu List" className={styles.navigation_list}>
        {items.map(({ id, attributes }) => {
          const { title, link, nested_menu_items } = attributes;
          const currentPath = getNoLocalizedPath(path);
          const isActive =
            link === currentPath || (link !== "/" && currentPath.includes(link));

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
    </nav>
  );
};

export default PrimaryNavigation;
