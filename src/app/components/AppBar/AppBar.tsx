"use client";
import { IAppBar } from "@/types";
import useWidth from "@/app/lib/hooks/useWidth";
import Logo from "../Logo/Logo";
import PrimaryMenu from "../PrimaryMenu/PrimaryMenu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import styles from "./appBar.module.scss";

const AppBar = ({ items }: IAppBar) => {
  const { isLaptopWidth } = useWidth();
  // console.log("app bar items", items);
  

  return (
    <>
      <header className={styles.appHeader}>
        <div className={styles.appHeader_content}>
          <Logo />
          {isLaptopWidth ? (
            <PrimaryMenu items={items} />
          ) : (
            // <BurgerMenu items={items} />
            null
          )}
        </div>
      </header>
    </>
  );
};

export default AppBar;
