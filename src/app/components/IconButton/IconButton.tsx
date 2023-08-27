import { IIconButtonProps } from "@/types";
import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./IconButton.module.scss";

const IconButton = ({
  onClick,
  children,
  variant = "transparent",
}: IIconButtonProps) => {
  return (
    <button className={styles.iconButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
