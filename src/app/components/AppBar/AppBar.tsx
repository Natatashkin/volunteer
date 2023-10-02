"use client";
import { IAppBar } from "@/types";
import useWidth from "@/app/lib/hooks/useWidth";
import Logo from "../Logo/Logo";
import PrimaryMenu from "../PrimaryMenu/PrimaryMenu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import styles from "./appBar.module.scss";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import usePagePath from "@/app/lib/hooks/usePagePath";

const AppBar = ({ items }: IAppBar) => {
  const { isLaptopWidth } = useWidth();
  const { noLocalizedPath } = usePagePath();

  const isMainPage = noLocalizedPath === "/";

  return (
    <>
      <header
        className={classNames(styles.appHeader, {
          [styles.appHeader__absolute]: isMainPage,
        })}
      >
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
