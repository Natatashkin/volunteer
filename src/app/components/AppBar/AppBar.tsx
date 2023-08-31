"use client";
import { IAppBar } from "@/types";
import useWidth from "@/app/lib/hooks/useWidth";
import Logo from "../Logo/Logo";
import LinkButton from "../LinkButton/LinkButton";
import PrimaryNavigation from "../ui/PrimaryNavigation/PrimaryNavigation";
import BurgerNavigation from "../ui/BurgerNavigation/BurgerNavigation";
import LangToggler from "../LangToggler/LangToggler";

import styles from "./appBar.module.scss";

const AppBar = ({ locale, items }: IAppBar) => {
  const { isLaptopWidth, width } = useWidth();

  return (
    <>
      <header className={styles.appHeader}>
        <div className={styles.appHeader_content}>
          <Logo />
          <div className={styles.appHeader_action}>
            <LinkButton title="Стань волонтером" link="/about/join" variant="outlined"/>
          </div>
          {Boolean(width) && (
            <nav className={styles.appHeader_navigation}>
              {isLaptopWidth ? (
                <PrimaryNavigation items={items} locale={locale} />
              ) : (
                <BurgerNavigation items={items} locale={locale} />
              )}
            </nav>
          )}
          {isLaptopWidth && <LangToggler currentLocale={locale} />}
        </div>
      </header>
    </>
  );
};

export default AppBar;
