import React from "react";
import Link from "next/link";
import styles from "./navigationItem.module.scss";
import { INavigationItemProps } from "@/types";
import classNames from "classnames";

const NavigationItem = ({
  title,
  link,
  nestedItems,
  isActive,
  onClick,
}: INavigationItemProps) => {
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
    </li>
  );
};

export default NavigationItem;
