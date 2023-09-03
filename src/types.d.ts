//Navigation Types

import { MouseEventHandler, ReactNode } from "react";

// Components
export interface IIconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  role?: string;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaOrientation?: "vertical" | "horizontal";
  variant?: "outlined" | "filled" | "transparent";
}

export interface IButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  title: string;
  children?: ReactNode;
}

export interface IAppBar {
  items: INavigationItem[];
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
export interface INavigationListProps {
  items: INavigationItem[];
}

export interface INavigationItemProps {
  title: string;
  link: string;
  nestedItems?: INavigationItem[];
  isActive: boolean;
}

export interface IBurgerButtonProps {
  open: boolean;
  toggleOpen: () => void;
}

export interface IAppMenuProps {
  items: INavigationItem[];
}

export interface INavigationItemWrapperProps {
  title: string;
  link: string;
  nestedItems?: INavigationItem[];
  locale?: string;
  Component: any;
}

// Helpers
export type TGetIsActivePathState = {
  itemLink: string;
  urlPath: string;
};

// Pages

export interface IHomePageProps {
  params: { lang: string };
}
