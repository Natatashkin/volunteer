import React, { useState } from "react";
import Link from "next/link";
import styles from "./primaryNavigationItem.module.scss";
import { INavigationItemProps } from "@/types";
import { RiArrowDownSLine } from "react-icons/ri";
import classNames from "classnames";

const PrymaryNavigationItem = ({
  title,
  link,
  nestedItems = [],
  isActive,
}: INavigationItemProps) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  const hasNestedItems = Boolean(nestedItems.length);
  console.log(link);

  return (
    <li
      role="menuitem"
      className={classNames(styles.primaryNavListItem, {
        [styles.primaryNavListItem__active]: isActive,
      })}
    >
      {!hasNestedItems ? (
        <Link href={link} className={styles.primaryNavListItem_link}>
          {title}
        </Link>
      ) : (
        <div className={styles.hasDropdown}>
          <button className={styles.hasDropdown_button} onClick={toggleOpen}>
            {title}
            <span className={styles.hasDropdown_button_icon}>
              <RiArrowDownSLine />
            </span>
          </button>

          <div className={styles.dropdown}>
            <ul className={styles.dropdown_list}>
              {nestedItems.map(({ id, attributes }) => {
                const {
                  title: itemTitle,
                  link: itemLink,
                  nested_menu_items,
                } = attributes;
                // const localizedLink = `${}`
                return (
                  <PrymaryNavigationItem
                    key={id}
                    title={itemTitle}
                    link={itemLink}
                    isActive={false}
                    nestedItems={nested_menu_items?.data}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

export default PrymaryNavigationItem;
