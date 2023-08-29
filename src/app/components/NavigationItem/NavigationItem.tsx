import React from "react";
import Link from "next/link";
import styles from "./navigationItem.module.scss";
import { INavigationItemProps } from "@/types";
import classNames from "classnames";
import NavigationList from "../NavigationList/NavigationList";

const NavigationItem = ({
  title,
  link,
  nestedItems,
  isActive,
  onClick,
}: INavigationItemProps) => {
  const hasNestedItems = nestedItems.length > 0;
  console.log(hasNestedItems);

  return (
    <li
      role="menuitem"
      className={classNames(styles.navListItem, {
        [styles.navListItem__active]: isActive,
      })}
      onClick={onClick}
    >
      <Link href={link} className={styles.navListItem_link}>
        {title}
      </Link>
      {/* {hasNestedItems && (
        <NavigationList items={nestedItems} toggleOpenList={() => {}} />
      )} */}
    </li>
  );
};

export default NavigationItem;
