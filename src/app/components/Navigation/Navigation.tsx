"use client";

import Link from "next/link";
import styles from "./navigation.module.scss";
import { usePathname } from "next/navigation";
import { getNoLocalizedPath } from "@/app/utils/getNoLocalizedPath";
import classNames from "classnames";
import React from "react";
import { INavigationItem, INavigationProps } from "../../../types";

const Navigation = ({ items }: INavigationProps) => {
  const pathname = usePathname();
  const noLocalizedPath = getNoLocalizedPath(pathname);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_list}>
        {items.map(({ id, attributes: { title, link, nested_menu_items } }) => {
          const isActive = noLocalizedPath === link;
          const hasNestedItems = Boolean(nested_menu_items?.data.length);
          return (
            <li
              key={id}
              className={classNames(styles.navbar_list_item, {
                [styles.navbar_list_item__active]: isActive,
              })}
            >
              {!hasNestedItems ? (
                <Link href={link} className={styles.link}>
                  {title}
                </Link>
              ) : (
                <>
                  <p role={link} tabIndex={0} className={styles.link}>
                    {title}
                    <button>v</button>
                  </p>
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
