import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
} from "react";
import { NullLiteral } from "typescript";

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
    slug: string;
    title: string;
    subpages: {
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

export interface IPageProps {
  params: { lang: string; slug: string; next: any };
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
  relatedItems?: CollectionItem[];
  items?: IComponentItemWIthIcon[] | IComponentItemWIthImage[];
  [key: string]: any;
}

export interface IComponentItemWIthIcon {
  id: number;
  title: string;
  description: string;
  icon: { data: IStrapiMedia };
}
export interface IComponentItemWIthImage {
  id: number;
  title: string;
  description: string;
  image: IStrapiMedia;
}

export interface IHeroBlock extends BlocksCommonTypes {
  image: IStrapiMedia | IStrapiMedia[];
  buttonTitle: string;
  buttonLink: string;
}

export interface ITextImageButtonCircleBlock extends BlocksCommonTypes {
  image: IStrapiMedia | IStrapiMedia[];
  button: {
    id: number;
    title: string;
    link: string;
  };
}

export interface ICollectionItem {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    locale: string;
    title: string;
    slug: string;
    rootSlug: string;
    description: string | null;
    image?: IStrapiMedia;
    icon?: {
      data: IStrapiMedia;
    };
    date?: Date;
    category?: ICollectionItem;
  };
}

export type BlockType =
  | IHeroBlock
  | BlocksCommonTypes
  | TTextPaletteWithIconsProps
  | TTextImageButtonCircleBlockProps;

export type THeroProps = Omit<IHeroBlock, "__component">;
export type IFeaturesProps = Omit<BlocksCommonTypes, "__component">;
export type ICarouselProps = Omit<BlocksCommonTypes, "__component">;
export type TTextPaletteWithIconsProps = Omit<BlocksCommonTypes, "__component">;
export type TTextImageButtonCircleBlockProps = Omit<
  ITextImageButtonCircleBlock,
  "__component"
>;

export type TSnaps = {
  isActive: boolean;
  id: number;
};

export type TCarouselButtonsProps = PropsWithChildren<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> & {
  scrollSnaps: TSnaps[];
  onButtonClick: (index: number) => void;
  selectedIndex: number;
};

export interface IImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface IStrapiMedia {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: IImageFormat;
      medium: IImageFormat;
      small: IImageFormat;
      large: IImageFormat;
    } | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: null;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface ICarouselEmblaProps {
  items: ICollectionItem[];
  options?: EmblaOptionsType;
}

type TUseCarouselNavigtionButtons = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export type TUseDotButtonProps = {
  selectedIndex: number;
  scrollSnaps: TSnaps[];
  onDotButtonClick: (index: number) => void;
};

export interface ISectionProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export interface ITextPaletteWithIconsItemProps {
  title: string;
  description: string;
  icon: IStrapiMedia;
}
