import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { IBurgerNavigationProps } from "../../../utils/types";
import BurgerButton from "../../BurgerButton/BurgerButton";
import NavigationItemWrapper from "../../NavigationItemWrapper/NavigationItemWrapper";
import BurgerNavigationItem from "../../BurgerNavigationItem/BurgerNavigationItem";
import styles from "./burgerNavigation.module.scss";

const BurgerNavigation = ({ items }: IBurgerNavigationProps) => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const toggleOpenItem = () => setOpen((prev) => !prev);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <nav className={styles.navigation}>
      <BurgerButton open={open} toggleOpen={toggleOpenItem} />
      <div
        className={classNames(styles.navigation_content, {
          [styles.navigation_content__open]: open,
        })}
      >
        <ul className={styles.navigation_list}>
          {items.map(
            ({ id, attributes: { title, link, nested_menu_items } }) => {
              return (
                <NavigationItemWrapper
                  key={id}
                  title={title}
                  link={link}
                  nestedItems={nested_menu_items?.data}
                  Component={BurgerNavigationItem}
                />
              );
            }
          )}
        </ul>
      </div>
    </nav>
  );
};

export default BurgerNavigation;
