"use client";

import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
// import PrimaryNavigation from "../ui/PrimaryNavigation/PrimaryNavigation";
// import BurgerNavigation from "../ui/BurgerNavigation/BurgerNavigation";
import Navigation from "../ui/Navigation/Navigation";
import LangToggler from "../LangToggler/LangToggler";
import Button from "../Button/Button";
import variables from "../../styles/variables.module.scss";
import styles from "./appBar.module.scss";
export interface IAppBar {
  locale: string;
  items: any;
  clientWidth: number;
}

const AppBar = ({ locale, items, clientWidth }: IAppBar) => {
  const [width, setWhidth] = useState(clientWidth);

  const handleClientWidth = () => {
    const innerWidth = window.innerWidth;
    setWhidth(innerWidth);
  };

  const isLaptopWidth = width >= parseInt(variables.laptop);

  useEffect(() => {
    window.addEventListener("resize", handleClientWidth);
    return () => window.removeEventListener("resize", handleClientWidth);
  }, []);

  return (
    <header className={styles.appHeader}>
      <div className={styles.appHeader_content}>
        <Logo />
        {isLaptopWidth && (
          <Button title="Стань волонтером" onClick={() => {}} />
        )}
        <Navigation items={items} width={width} locale={locale} />

        {isLaptopWidth && <LangToggler currentLocale={locale} />}
      </div>
    </header>
  );
};

export default AppBar;
