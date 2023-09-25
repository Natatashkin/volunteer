import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler, PropsWithChildren, ReactNode } from "react";

export type TPagePath = {
  noLocalizedPath: string;
  locale: string;
};

// Components
export interface IIconButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  role?: string;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaOrientation?: "vertical" | "horizontal";
  variant?: "outlined" | "filled" | "transparent" | "accent";
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
  params: { lang: string; slug: string };
}

export type ProgectTypes = {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    title: string;
    description: string;
    image: any;
    date: Date;
    project_category: any;
  };
};

export interface PageBlockType {
  id: number;
  __component: string;
  title: string;
  description: string;
}

export interface IPageDataTypes {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    locale: string;
    title: string;
    slug: string;
    seo: {
      title: string;
      description: string | null;
    };
    blocks: BlockType[];
  };
}

export interface BlocksCommonTypes {
  id: number;
  __component: string;
  title: string;
  description: string;
  [key: string]: any;
}

export interface IHeroBlock extends BlocksCommonTypes {
  image: any;
  buttonTitle: string;
  buttonLink: string;
}

export interface CollectionItem {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    locale: string;
    title: string;
    slug: string;
    description: string | null;
    image?: any;
    icon?: any;
    date?: Date;
  };
}
export interface IFeaturesBlock extends BlocksCommonTypes {
  features: CollectionItem[];
}

export interface ICarouselBlock extends BlocksCommonTypes {
  projects: CollectionItem[];
}
export type BlockType = IHeroBlock | IFeaturesBlock | ICarouselBlock;

export type IHeroProps = Omit<IHeroBlock, "__component">;
export type IFeaturesProps = Omit<IFeaturesBlock, "__component">;
export type ICarouselProps = Omit<ICarouselBlock, "__component">;

export type TCarouselButtonsProps = PropsWithChildren<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export interface ICarouselEmblaProps {
  items: number[]
  options?: EmblaOptionsType
}

type TUseCarouselNavigtionButtons = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export type TUseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

