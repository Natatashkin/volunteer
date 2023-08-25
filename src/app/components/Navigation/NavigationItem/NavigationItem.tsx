import React from "react";
import { INavigationItemProps } from "@/types";
import classNames from "classnames";
import styles from "./navigationItem.module.scss";
import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";

const NavigationItem = ({
  id,
  title,
  link,
  isActive,
  nestedItems,
  children,
}: INavigationItemProps) => {
  const hasNestedItems = Boolean(nestedItems?.length);
  return (
    <li
      role="menuitem"
      key={id}
      className={classNames(styles.navigationItem, {
        [styles.navigationItem__active]: isActive,
      })}
    >
      <Link role="link" href={link} className={styles.navigationItem_link}>
        {title}
      </Link>
      <span className={styles.navigationItem_underline}></span>
    </li>
  );
};

export default NavigationItem;
