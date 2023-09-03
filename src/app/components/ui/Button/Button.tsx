import React from "react";
import { IButtonProps } from "@/types";

const Button = ({ title, children, onClick }: IButtonProps) => {
  return (
    <button onClick={onClick}>
      <span>{title}</span>
      <span>{children}</span>{" "}
    </button>
  );
};

export default Button;
