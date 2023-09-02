import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { RiArrowDownSLine } from "react-icons/ri";
import NavigationItemWrapper from "../NavigationItemWrapper/NavigationItemWrapper";
import { INavigationItemProps } from "../../utils/types";
import styles from "./primaryNavigationItem.module.scss";

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
              {nestedItems.map(
                ({
                  id,
                  attributes: { title: itemTitle, link: nestedLink },
                }) => {
                  const itemLink = `${link}${nestedLink}`;

                  return (
                    <NavigationItemWrapper
                      key={id}
                      title={itemTitle}
                      link={itemLink}
                      Component={PrymaryNavigationItem}
                    />
                  );
                }
              )}
            </ul>
          </div>
        </div>
      )}
      <div />
    </li>
  );
};

export default PrymaryNavigationItem;
