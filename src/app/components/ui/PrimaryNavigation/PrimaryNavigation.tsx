import { INavigationListProps } from "@/types";
import NavigationList from "../../NavigationList/NavigationList";
import React from "react";
import styles from "./primaryNavigation.module.scss";

const PrimaryNavigation = ({ items }: INavigationListProps) => {
  return (
    <nav className={styles.primaryNav}>
      {/* <NavigationList items={items} /> */}
    </nav>
  );
};

export default PrimaryNavigation;
