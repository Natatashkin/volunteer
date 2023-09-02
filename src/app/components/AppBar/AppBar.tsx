"use client";
import { IAppBar } from "@/types";
import useWidth from "@/app/lib/hooks/useWidth";
import Logo from "../ui/Logo/Logo";
import PrimaryMenu from "../ui/PrimaryMenu/PrimaryMenu";
import BurgerMenu from "../ui/BurgerMenu/BurgerMenu";

import styles from "./appBar.module.scss";

const AppBar = ({ items }: IAppBar) => {
  const { isLaptopWidth } = useWidth();

  return (
    <>
      <header className={styles.appHeader}>
        <div className={styles.appHeader_content}>
          <Logo />
          {isLaptopWidth ? (
            <PrimaryMenu items={items} />
          ) : (
            <BurgerMenu items={items} />
          )}
        </div>
      </header>
    </>
  );
};

export default AppBar;
