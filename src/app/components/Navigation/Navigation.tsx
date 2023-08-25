"use client";
import styles from "./navigation.module.scss";
import { usePathname } from "next/navigation";
import { getNoLocalizedPath } from "@/app/utils/getNoLocalizedPath";
import React, { useState } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import { INavigationProps } from "../../../types";

const Navigation = ({ items }: INavigationProps) => {
  const pathname = usePathname();
  const noLocalizedPath = getNoLocalizedPath(pathname);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <nav className={styles.navigation} role="navigation" aria-label="Main">
      <ul
        className={styles.navigation_list}
        role="menu"
        aria-orientation="horizontal"
      >
        {items.map(({ id, attributes: { title, link, nested_menu_items } }) => {
          const isActive = noLocalizedPath === link;

          return (
            <NavigationItem
              id={id}
              title={title}
              link={link}
              isActive={isActive}
              nestedItems={nested_menu_items.data}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

{
  /* <li
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
                    aria-label="Open About menu items"
                    className={styles.navbar_list_item_button}
                    onClick={toggleOpen}
                  >
                    {title}
                    <SlArrowDown size={10} />
                  </button>
                  {open && (
                    <ul role="menu" className={styles.navbar_nested_list}>
                      {nested_menu_items?.data.map(
                        ({
                          id: nestedId,
                          attributes: { title: nestedTitle, link: nestedLink },
                        }: INavigationItem) => {
                          return (
                            <li
                              role="menuitem"
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
                  )}
                </>
              )}
            </li> */
}
