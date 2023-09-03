"use client";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { fetchLocalesData } from "@/middleware";
import styles from "./langToggler.module.scss";

export interface TLangToggler {
  currentLocale: string;
  color?: "orange" | "darkblue";
}

const LangSwitcher = ({ currentLocale, color = "orange" }: TLangToggler) => {
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleRoutClick = (locale: string) => {
    const path = redirectedPathName(locale);
    router.push(path);
    document.cookie = `locale=${locale}`;
  };

  const [allLocales, setAllLocales] = useState<string[]>([]);

  const isLocales = Boolean(allLocales.length);
  const isLastLocale = allLocales.length - 1;

  const isOrange = color === "orange";
  const isDarkBlue = color === "darkblue";

  const getLocalesData = useCallback(async () => {
    try {
      const { locales } = await fetchLocalesData();
      setAllLocales(locales);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getLocalesData();
  }, [getLocalesData]);

  return (
    <div
      className={styles.langSwitcher}
      role="list"
      aria-label="List of site languages"
    >
      {allLocales.map((item: string, idx: number) => {
        const isActive = item === currentLocale;
        const setDevider = idx !== isLastLocale;
        return (
          <Fragment key={item}>
            <button
              role="listitem"
              className={classNames(styles.langSwitcher_item, {
                [styles.langSwitcher_item__orange]: isOrange,
                [styles.langSwitcher_item__orange_active]: isOrange && isActive,
                [styles.langSwitcher_item__darkblue]: isDarkBlue,
                [styles.langSwitcher_item__darkblue_active]:
                  isDarkBlue && isActive,
              })}
              onClick={() => handleRoutClick(item)}
            >
              {item}
            </button>
            {setDevider && (
              <span role="separator" className={styles.langSwitcher_divider}>
                |
              </span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default LangSwitcher;
