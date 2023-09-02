import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { IBurgerNavigationProps } from "@/types";
import { splitUrl } from "@/app/utils/helpers";
import BurgerButton from "../BurgerButton/BurgerButton";
import NavigationItemWrapper from "../NavigationItemWrapper/NavigationItemWrapper";
import BurgerNavigationItem from "../BurgerNavigationItem/BurgerNavigationItem";
import LangSwitcher from "../../LangToggler/LangToggler";

import styles from "./burgerMenu.module.scss";

const BurgerMenu = ({ items }: IBurgerNavigationProps) => {
  const path = usePathname();
  const { locale } = splitUrl(path);
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
        <div className={styles.navigation_wrapper}>
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
          <div className={styles.tools}>
            <div className={styles.tools_background}>
              <LangSwitcher currentLocale={locale} color="darkblue" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BurgerMenu;
