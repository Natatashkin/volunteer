import { INavigationItem, TGetIsActivePathState } from "@/types";

export const splitUrl = (path: string) => {
  let noLocalizedPath = "/";
  const segments = path.split("/");
  const locale = segments[1];

  if (path.length > 3) {
    noLocalizedPath = path.slice(3);
  }
  return { locale, noLocalizedPath };
};

export const createNestedLink = (parentLink: string, childLink: string) => {
  return `${parentLink}${childLink}`;
};

export const findNavItem = (items: INavigationItem[] = [], path: string) => {
  return items?.find(
    ({ attributes }) =>
      attributes.link !== "/" && path.includes(attributes.link)
  );
};

export const getIsActivePathState = ({
  itemLink,
  urlPath,
}: TGetIsActivePathState) => {
  const isActive =
    itemLink === urlPath || (itemLink !== "/" && urlPath.includes(itemLink));
  return isActive;
};

export const getLink = (navItems: INavigationItem[], link: string) => {
  const navItem = navItems.find(({ attributes }) => attributes.link === link);
  if (navItem) {
    return link;
  }

  const itemsWithNestedLinks: INavigationItem[] = navItems.filter(
    ({ attributes: { nested_menu_items } }) =>
      nested_menu_items?.data.length > 0
  );

  if (itemsWithNestedLinks.length > 0) {
    const parentNavItem = itemsWithNestedLinks.find(
      ({ attributes: { nested_menu_items } }) =>
        nested_menu_items.data.find(
          ({ attributes: { link: itemLink } }) => itemLink === link
        )
    );
    if (parentNavItem) {
      const parentNavLink = parentNavItem.attributes.link;
      const newLink = createNestedLink(parentNavLink, link);
      return newLink;
    }
  }
  return "/";
};
