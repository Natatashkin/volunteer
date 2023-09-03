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
