import React, { useEffect, useState } from "react";
// import NavigationList from "../../PrimaryNavigationList/PrimaryNavigationList";
import BurgerButton from "../../BurgerButton/BurgerButton";
import styles from "./burgerNavigation.module.scss";
import { IBurgerNavigationProps } from "@/types";
import BurgerNavigationItem from "../../BurgerNavigationItem/BurgerNavigationItem";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { getNoLocalizedPath } from "@/app/utils/getNoLocalizedPath";

const BurgerNavigation = ({ items, locale }: IBurgerNavigationProps) => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const toggleOpenItem = () => setOpen((prev) => !prev);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <nav className={styles.navigation}>
      <BurgerButton open={open} toggleOpen={toggleOpenItem} />
      <div className={classNames(styles.navigation_content, {[styles.navigation_content__open]: open})}>
        <ul className={styles.navigation_list}>
          {items.map(({ id, attributes }) => {
            const { title, link, nested_menu_items } = attributes;
            const currentPath = getNoLocalizedPath(path);
            const isActive = link === currentPath || (link !== "/" && currentPath.includes(link));
            
            return (
              <BurgerNavigationItem
                key={id}
                link={link}
                title={title}
                nestedItems={nested_menu_items?.data}
                isActive={isActive}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default BurgerNavigation;
