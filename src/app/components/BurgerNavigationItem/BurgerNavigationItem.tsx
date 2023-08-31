import React, { useEffect, useState } from "react";
import { INavigationItemProps } from "@/types";
import Link from "next/link";
import styles from "./burgerNavigationItem.module.scss";
import { RiArrowDownSLine } from "react-icons/ri";
import classNames from "classnames";

const BurgerNavigationItem = ({
  link,
  title,
  nestedItems,
  isActive,
}: INavigationItemProps) => {
  const hasNestedItems = Boolean(nestedItems?.length);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(isActive);

  const toggleOpen = () => setOpen((prev) => !prev);

	console.log();
	

  return (
    <li className={styles.navigationItem}>
      {!hasNestedItems ? (
        <Link
          href={link}
          className={classNames(styles.navigationItem_link, {
            [styles.navigationItem__active]: activeLink,
          })}
        >
          {title}
        </Link>
      ) : (
        <div className={classNames(styles.dropdown)} onClick={toggleOpen}>
          <button
            className={classNames(styles.dropdown_button, {
              [styles.dropdown_button__active]: open,
            })}
          >
            <span className={styles.dropdown_button_text}>
              {title}
              <span className={styles.dropdown_button_icon}>
                <RiArrowDownSLine />
              </span>
            </span>
          </button>
        </div>
      )}
    </li>
  );
};

export default BurgerNavigationItem;
