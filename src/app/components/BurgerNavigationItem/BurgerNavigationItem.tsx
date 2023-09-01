import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowDownSLine } from "react-icons/ri";
import { INavigationItemProps } from "@/app/utils/types";
import { splitUrl, createNestedLink, findNavItem } from "@/app/utils/helpers";
import NavigationItemWrapper from "../NavigationItemWrapper/NavigationItemWrapper";
import styles from "./burgerNavigationItem.module.scss";

const BurgerNavigationItem = ({
  link,
  title,
  nestedItems,
  isActive,
}: INavigationItemProps) => {
  const path = usePathname();
  const { noLocalizedPath } = splitUrl(path);
  const hasNestedItems = Boolean(nestedItems?.length);
  const isNestedItem = useMemo(
    () => hasNestedItems && Boolean(findNavItem(nestedItems, noLocalizedPath)),
    [noLocalizedPath, hasNestedItems]
  );

  const shouldOpen = isActive && isNestedItem;

  const [openDropdown, setOpenDropdown] = useState(shouldOpen);
  const toggleOpen = () => setOpenDropdown((prev) => !prev);

  useEffect(() => {
    if (!shouldOpen) {
      setOpenDropdown(false);
      return;
    }
    setOpenDropdown(true);
  }, [shouldOpen]);

  return (
    <li className={styles.navigationItem}>
      {!hasNestedItems ? (
        <Link
          href={link}
          className={classNames(styles.navigationItem_link, {
            [styles.navigationItem__active]: isActive,
          })}
        >
          {title}
        </Link>
      ) : (
        <div className={classNames(styles.dropdown)}>
          <button
            onClick={toggleOpen}
            className={classNames(styles.dropdown_button, {
              [styles.dropdown_button__active]: openDropdown,
            })}
          >
            <span className={styles.dropdown_button_text}>
              {title}
              <span className={styles.dropdown_button_icon}>
                <RiArrowDownSLine />
              </span>
            </span>
          </button>
          <ul
            className={classNames(styles.dropdown_nestedList, {
              [styles.dropdown_nestedList__active]: openDropdown,
            })}
          >
            {nestedItems?.map(
              ({
                id,
                attributes: {
                  link: nestedLink,
                  title: nestedTitle,
                  nested_menu_items,
                },
              }) => {
                return (
                  <NavigationItemWrapper
                    key={id}
                    title={nestedTitle}
                    link={createNestedLink(link, nestedLink)}
                    nestedItems={nested_menu_items?.data}
                    Component={BurgerNavigationItem}
                  />
                );
              }
            )}
          </ul>
        </div>
      )}
    </li>
  );
};

export default BurgerNavigationItem;
