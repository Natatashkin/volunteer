import { IIconButtonProps } from "@/types";
import React, { MouseEventHandler, ReactNode } from "react";

const IconButton = ({ onClick, children }: IIconButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default IconButton;
