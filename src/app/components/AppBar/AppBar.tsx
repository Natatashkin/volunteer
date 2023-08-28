"use client";

import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";

import BurgerNavigation from "../ui/BurgerNavigation/BurgerNavigation";
import styles from "./appBar.module.scss";
import variables from "../../styles/variables.module.scss";
export interface IAppBar {
  locale: string;
  items: any;
  clientWidth: number;
}

const AppBar = ({ locale, items, clientWidth }: IAppBar) => {
  const [activeNav, setActiveNav] = useState(true);

  return (
    <header className={styles.appHeader}>
      <div className={styles.appHeader_content}>
        <Logo />
        <BurgerNavigation items={items} />
      </div>
    </header>
  );
};

export default AppBar;
