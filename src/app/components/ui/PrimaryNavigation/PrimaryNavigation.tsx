"use client";
import { IAppMenuProps } from "@/types";
import NavigationItemWrapper from "../NavigationItemWrapper/NavigationItemWrapper";
import PrymaryNavigationItem from "../PrimaryNavigationItem/PrimaryNavigationItem";
import styles from "./primaryNavigation.module.scss";

const PrimaryNavigation = ({ items }: IAppMenuProps) => {
  return (
    <nav className={styles.navigation}>
      <ul aria-label="Menu List" className={styles.navigation_list}>
        {items.map(({ id, attributes: { title, link, nested_menu_items } }) => {
          return (
            <NavigationItemWrapper
              key={id}
              title={title}
              link={link}
              nestedItems={nested_menu_items?.data}
              Component={PrymaryNavigationItem}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default PrimaryNavigation;
