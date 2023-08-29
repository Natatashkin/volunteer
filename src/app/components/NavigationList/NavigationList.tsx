"use client";
import React, { useState } from "react";
import { INavigationListProps } from "@/types";
import NavigationItem from "../NavigationItem/NavigationItem";
import styles from "./navigationList.module.scss";

const NavigationList = ({ items, toggleOpenList }: INavigationListProps) => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (itemId: number) => {
    setActiveItem(itemId);
    toggleOpenList();
  };

  return (
    <ul aria-label="Menu List" className={styles.navList}>
      {items.map(({ id, attributes }) => {
        const { title, link, nested_menu_items } = attributes;
        const isActive = id === activeItem;
        // console.log(nested_menu_items.data);

        return (
          <NavigationItem
            key={id}
            title={title}
            link={link}
            nestedItems={nested_menu_items.data}
            isActive={isActive}
            onClick={() => handleItemClick(id)}
          />
        );
      })}
    </ul>
  );
};

export default NavigationList;
