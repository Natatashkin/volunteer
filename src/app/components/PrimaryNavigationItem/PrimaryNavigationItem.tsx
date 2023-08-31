import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./primaryNavigationItem.module.scss";
import { INavigationItemProps } from "@/types";
import { RiArrowDownSLine } from "react-icons/ri";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const PrymaryNavigationItem = ({
  title,
  link,
  nestedItems = [],
  isActive,
}: INavigationItemProps) => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  const hasNestedItems = Boolean(nestedItems.length);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <li
      onClick={toggleOpen}
      role="menuitem"
      className={classNames(styles.primaryNavListItem, {
        [styles.primaryNavListItem__active]: isActive,
        [styles.primaryNavListItem__open]: open,
      })}
    >
      {!hasNestedItems ? (
        <Link href={link} className={styles.primaryNavListItem_link}>
          {title}
        </Link>
      ) : (
        <div className={styles.hasDropdown}>
          <button className={styles.hasDropdown_button}>
            {title}
            <span className={styles.hasDropdown_button_icon}>
              <RiArrowDownSLine />
            </span>
          </button>

          <div
            className={classNames(styles.dropdown, {
              [styles.dropdown_open]: open,
            })}
          >
            <ul className={styles.dropdown_list}>
              {nestedItems.map(({ id, attributes }) => {
                const { title: itemTitle, link: nestedLink } = attributes;
                const itemLink = `${link}${nestedLink}`;

                return (
                  <PrymaryNavigationItem
                    key={id}
                    title={itemTitle}
                    link={itemLink}
                    isActive={false}
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
