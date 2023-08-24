"use client";

import Link from "next/link";
import styles from "./navigation.module.scss";
import { usePathname } from "next/navigation";
import { getNoLocalizedPath } from "@/app/utils/getNoLocalizedPath";
import classNames from "classnames";
import React from "react";
import { INavigationItem, INavigationProps } from "../../../types";
import { SlArrowDown } from "react-icons/sl";

const Navigation = ({ items }: INavigationProps) => {
  const pathname = usePathname();
  const noLocalizedPath = getNoLocalizedPath(pathname);

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main">
      <ul
        className={styles.navbar_list}
        role="menu"
        aria-orientation="horizontal"
      >
        {items.map(({ id, attributes: { title, link, nested_menu_items } }) => {
          const isActive = noLocalizedPath === link;
          const hasNestedItems = Boolean(nested_menu_items?.data.length);
          return (
            <li
              role="menuitem"
              key={id}
              className={classNames(styles.navbar_list_item, {
                [styles.navbar_list_item__active]: isActive,
              })}
            >
              {!hasNestedItems ? (
                <Link role="link" href={link} className={styles.link}>
                  {title}
                </Link>
              ) : (
                <>
                  <button
                    role="menuitem"
                    aria-haspopup="menu"
                    className={styles.navbar_list_item_button}
                  >
                    {title}
                    <SlArrowDown size={10} />
                  </button>
                  <ul className={styles.navbar_nested_list}>
                    {nested_menu_items?.data.map(
                      ({
                        id: nestedId,
                        attributes: { title: nestedTitle, link: nestedLink },
                      }: INavigationItem) => {
                        return (
                          <li
                            key={nestedId}
                            className={styles.navbar_nested_list_item}
                          >
                            <Link
                              href={`${link}${nestedLink}`}
                              className={styles.link}
                            >
                              {nestedTitle}
                            </Link>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
