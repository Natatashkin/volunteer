"use client";
import LangToggler from "../LangToggler/LangToggler";
import NavigationList from "../NavigationList/NavigationList";
import DropdownList from "../DropdownList/DropdownList";
import BurgerButton from "../BurgerButton/BurgerButton";
import Logo from "../Logo/Logo";
import styles from "./appBar.module.scss";
import variables from "../../styles/variables.module.scss";
import { useEffect, useState } from "react";
export interface IAppBar {
  locale: string;
  items: any;
  clientWidth: number;
}

const AppBar = ({ locale, items, clientWidth }: IAppBar) => {
  const [width, setWidth] = useState(clientWidth);
  const [open, setOpen] = useState(false);
  const laptopWidth = parseInt(variables.laptop);
  const mobileWidth = parseInt(variables.mobile);
  const showDrawerButton = width < laptopWidth;
  const showDropdownMenu = showDrawerButton && open;
  console.log(showDropdownMenu);

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleWidth = () => {
    const innerWidth = window.innerWidth;
    setWidth(innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <header className={styles.appHeader}>
      <div className={styles.appHeader_content}>
        <div className={styles.appHeader_wrapper}>
          <Logo />
          <nav className={styles.nav_container}>
            {showDrawerButton ? (
              <BurgerButton open={open} toggleOpen={toggleOpen} />
            ) : (
              <NavigationList items={items} />
            )}
          </nav>
          {!showDrawerButton && <LangToggler currentLocale={locale} />}
        </div>
        {showDropdownMenu && (
          <NavigationList
            dropdown={showDropdownMenu}
            items={items}
            currentLocale={locale}
          />
        )}
      </div>
    </header>
  );
};

export default AppBar;
