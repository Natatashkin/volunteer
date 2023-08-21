"use client";
import Link from "next/link";
import styles from "./LangToggler.module.scss";

export interface TLangToggler {
  items: string[];
}

const LangToggler = ({ items }: TLangToggler) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        return (
          <li key={item} className={styles.list_item}>
            {/* <Link href="">{item}</Link> */}
          </li>
        );
      })}
    </ul>
  );
};

export default LangToggler;
