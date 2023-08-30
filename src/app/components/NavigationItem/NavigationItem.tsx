import React from "react";
import Link from "next/link";
import styles from "./navigationItem.module.scss";
import { INavigationItemProps } from "@/types";
import classNames from "classnames";
import NavigationList from "../NavigationList/NavigationList";

const NavigationItem = ({
  title,
  link,
  nestedItems = [],
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
      {hasNestedItems && (
        <ul>
          {nestedItems.map(({ id, attributes }) => {
            
            const {
              title: itemTitle,
              link: itemLink,
              nested_menu_items,
            } = attributes;
            return (
              <NavigationItem
                title={itemTitle}
                link={itemLink}
                isActive={false}
                onClick={onClick}
                nestedItems={nested_menu_items?.data}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default NavigationItem;
