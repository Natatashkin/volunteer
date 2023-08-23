"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./LangToggler.module.scss";
import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { fetchLocalesData } from "@/middleware";

export interface TLangToggler {
  currentLocale: string;
}

const LangToggler = ({ currentLocale }: TLangToggler) => {
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
    <>
      {Boolean(allLocales.length) && (
        <ul className={styles.list}>
          {allLocales.map((item: string) => {
            const isActive = item === currentLocale;
            return (
              <li
                key={item}
                className={classNames(styles.list_item, {
                  [styles.list_item__active]: isActive,
                })}
              >
                <button onClick={() => handleRoutClick(item)}>{item}</button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default LangToggler;
