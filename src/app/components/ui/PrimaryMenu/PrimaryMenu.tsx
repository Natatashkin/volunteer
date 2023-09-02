import React from "react";
import PrimaryNavigation from "../PrimaryNavigation/PrimaryNavigation";
import LinkButton from "../LinkButton/LinkButton";
import { INavigationItem } from "@/types";
import styles from "./primaryMenu.module.scss";
import useWidth from "@/app/lib/hooks/useWidth";
import LangSwitcher from "../../LangToggler/LangToggler";
import { splitUrl } from "@/app/utils/helpers";
import { usePathname } from "next/navigation";

export interface IPrimaryMenuProps {
  items: INavigationItem[];
}

const PrimaryMenu = ({ items }: IPrimaryMenuProps) => {
  const path = usePathname();
  const { widthIsDetect } = useWidth();
  const { locale } = splitUrl(path);
  return (
    <div className={styles.appHeader_primaryMenu}>
      <div className={styles.appHeader_action}>
        <LinkButton
          title="Стань волонтером"
          link="/about/join"
          variant="outlined"
        />
      </div>
      <PrimaryNavigation items={items} />
      <div className={styles.langSwitcher_wrapper}>
        <LangSwitcher currentLocale={locale} />
      </div>
    </div>
  );
};

export default PrimaryMenu;
