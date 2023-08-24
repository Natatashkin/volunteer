//Navigation Types

import { MouseEventHandler, ReactNode } from "react";

export type INavigationItem = {
  id: number;
  attributes: {
    link: string;
    title: string;
    nested_menu_items?: {
      data: INavigationItem[];
    };
  };
};
export interface INavigationProps {
  items: INavigationItem[];
}

// Components
export interface IIconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export interface IButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  title: string;
  children: ReactNode;
}
