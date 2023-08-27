import { INavigationItemProps } from "@/types";
import Link from "next/link";
import React from "react";
import styles from "./navigationItem.module.scss";

const NavigationItem = ({
  title,
  link,
  nestedItems,
  isActive,
}: INavigationItemProps) => {
  return (
    <li role="menuitem" className={styles.navigationItem}>
      <Link href={link} className={styles.navigationItem_link}>
        {title}
      </Link>
      {/* <div className={styles.navigationItem_decor} /> */}
    </li>
  );
};

export default NavigationItem;
