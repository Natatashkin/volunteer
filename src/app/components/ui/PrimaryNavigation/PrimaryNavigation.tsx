"use client";
import { IAppMenuProps } from "@/types";
import NavigationItemWrapper from "../NavigationItemWrapper/NavigationItemWrapper";
import PrymaryNavigationItem from "../PrimaryNavigationItem/PrimaryNavigationItem";
import styles from "./primaryNavigation.module.scss";
import { generateKey, generateLink } from "@/app/utils/helpers";

const PrimaryNavigation = ({ items }: IAppMenuProps) => {
  // console.log(items);

  return (
    <nav className={styles.navigation}>
      <ul aria-label="Menu List" className={styles.navigation_list}>
        {items.map(({ id, attributes: { title, slug, subpages } }) => {
          const itemKey = generateKey(id, title)
          const itemLink = slug==="/"? slug: `/${slug}`
          return (
            <NavigationItemWrapper
              key={itemKey}
              title={title}
              link={itemLink}
              nestedItems={subpages?.data}
              Component={PrymaryNavigationItem}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default PrimaryNavigation;
