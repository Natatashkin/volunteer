import { ReactNode } from "react";
import styles from "./container.module.scss";
import classNames from "classnames";

export type TContainer = {
  children: ReactNode;
  variant?: "black" | "default" | "grey";
};

const Container = ({ variant = "default", children }: TContainer) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.container__black]: variant === "black",
        [styles.container__grey]: variant === "grey",
      })}
    >
      {children}
    </div>
  );
};

export default Container;
