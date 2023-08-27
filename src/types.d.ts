//Navigation Types

import { MouseEventHandler, ReactNode } from "react";

// Components
export interface IIconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  variant?: "outlined" | "filled" | "transparent";
}

export interface IButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  title: string;
  children: ReactNode;
}

export type INavigationItem = {
  id: number;
  attributes: {
    link: string;
    title: string;
    nested_menu_items: {
      data: INavigationItem[];
    };
  };
};
export interface INavigationProps {
  items: INavigationItem[];
  dropdown?: boolean;
  currentLocale?: string;
}

export interface INavigationItemProps {
  id: number;
  title: string;
  link: string;
  nestedItems?: INavigationItem[];
  isActive: boolean;
  children?: ReactNode;
}

export interface IBurgerButtonProps {
  open: boolean;
  toggleOpen: () => void;
}
