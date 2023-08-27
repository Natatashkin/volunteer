import { INavigationItem, INavigationProps } from "@/types";
import React from "react";
import styles from "./navigationList.module.scss";
import NavigationItem from "../NavigationItem/NavigationItem";
import { getNoLocalizedPath } from "@/app/utils/getNoLocalizedPath";
import classNames from "classnames";
import LangToggler from "../LangToggler/LangToggler";

const NavigationList = ({
  items,
  dropdown,
  currentLocale = "uk",
}: INavigationProps) => {
  return (
    <>
      <ul
        role="menu"
        className={classNames(styles.navigationList, {
          [styles.navigationList_dropdown]: dropdown,
        })}
      >
        {items.map(
          ({
            id,
            attributes: { title, link, nested_menu_items },
          }: INavigationItem) => {
            const noLocalizedPath = getNoLocalizedPath(link);
            const isActive = link === noLocalizedPath;

            return (
              <NavigationItem
                id={id}
                title={title}
                link={link}
                nestedItems={nested_menu_items.data}
                isActive={isActive}
              />
            );
          }
        )}
      </ul>
      {dropdown && <LangToggler currentLocale={currentLocale} />}
    </>
  );
};

export default NavigationList;
