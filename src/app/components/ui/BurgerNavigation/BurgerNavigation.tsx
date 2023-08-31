import React, { useState } from "react";
// import NavigationList from "../../PrimaryNavigationList/PrimaryNavigationList";
import BurgerButton from "../../BurgerButton/BurgerButton";
import styles from "./burgerNavigation.module.scss";
import { IBurgerNavigationProps } from "@/types";

const BurgerNavigation = ({ items }: IBurgerNavigationProps) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <nav className={styles.nav}>
      <BurgerButton open={open} toggleOpen={toggleOpen} />
      {/* {open && <NavigationList items={items} toggleOpenList={toggleOpen} />} */}
    </nav>
  );
};

export default BurgerNavigation;
