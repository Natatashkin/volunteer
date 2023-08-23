//Navigation Types

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
