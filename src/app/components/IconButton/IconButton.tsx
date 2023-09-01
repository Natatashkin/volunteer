import { IIconButtonProps } from "@/app/utils/types";
import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./IconButton.module.scss";

const IconButton = ({
  onClick,
  children,
  ariaLabel,
  role,
  ariaExpanded,
  ariaOrientation,
  variant = "transparent",
}: IIconButtonProps) => {
  return (
    <button
      role={role}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-orientation={ariaOrientation}
      className={styles.iconButton}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
