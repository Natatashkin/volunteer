import { INavigationProps } from "@/types";
import NavigationList from "../../NavigationList/NavigationList";
import React from "react";

const Navigation = ({ items, locale, width }: INavigationProps) => {
  return (
    <nav>
      <NavigationList items={items} locale={locale} toggleOpenList={() => {}} />
    </nav>
  );
};

export default Navigation;
