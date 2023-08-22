"use client";
import Link from "next/link";
import styles from "./LangToggler.module.scss";
import { useEffect, useState } from "react";
import { setCookie } from "@/app/actions";
import classNames from "classnames";

export interface TLangToggler {
  items: string[];
  currentLocale: string;
}

const LangToggler = ({ items, currentLocale }: TLangToggler) => {
  const [locale, setLocale] = useState(currentLocale);
  const handleClick = async (locale: string) => {
    setLocale(locale);
  };

  useEffect(() => {
    setCookie("userLang", locale);
  }, [locale]);

  return (
    <ul className={styles.list}>
      {items.map((item) => {
        const isActive = item === locale;
        return (
          <li
            key={item}
            className={classNames(styles.list_item, {
              [styles.list_item__active]: isActive,
            })}
            onClick={() => handleClick(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default LangToggler;
