"use client";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import PrimaryNavigation from "../ui/PrimaryNavigation/PrimaryNavigation";
import BurgerNavigation from "../ui/BurgerNavigation/BurgerNavigation";

import useWidth from "@/app/lib/hooks/useWidth";
import { IAppBar } from "@/types";
import LangToggler from "../LangToggler/LangToggler";
import styles from "./appBar.module.scss";
import Button from "../Button/Button";

const AppBar = ({ locale, items }: IAppBar) => {
  const { isLaptopWidth, width } = useWidth();

  return (
    <>
      <header className={styles.appHeader}>
        <div className={styles.appHeader_content}>
          <Logo />
          <button>Стань волонтером</button>

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
