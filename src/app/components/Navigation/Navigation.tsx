"use client";
import Link from "next/link";
import styles from "./navigation.module.scss";
import { useParams } from "next/navigation";

const Navigation = ({ items }: { items: any }) => {
  console.log(items);
  const params = useParams();
  console.log(params);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_list}>
        {items.map(({ id, attributes: { title, link, nested_menu_items } }) => {
          console.log(nested_menu_items);

          return (
            <li key={id} className={styles.navbar_list_item}>
              <Link href={link}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
