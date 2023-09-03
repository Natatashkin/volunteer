import { ReactNode } from "react";
import styles from "./container.module.scss";

export type TChildren = { children: ReactNode };

const Container = ({ children }: TChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
