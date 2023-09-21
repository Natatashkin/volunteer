import { IIconButtonProps } from "@/types";
import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./IconButton.module.scss";
import classNames from "classnames";

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
      className={classNames(styles.iconButton, {
        [styles.iconButton__accent]: variant == "accent"
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
