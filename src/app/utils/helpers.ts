import { INavigationItem, TGetIsActivePathState } from "@/types";
import qs from "qs";

export const splitUrl = (path: string) => {
  let noLocalizedPath = "/";
  const segments = path.split("/");
  const locale = segments[1];

  if (path.length > 3) {
    noLocalizedPath = path.slice(4);
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

export function getStrapiMedia(url: string) {
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }
  return `${process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337"}${url}`;
}

export const getPageQuery = (slug: string, locale: string) => {
  const pageQery = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug ?? "/",
        },
      },
      // populate: "deep",
      populate: {
        seo: {
          populate: "*",
        },
        blocks: {
          on: {
            "elements.features": {
              populate: {
                features: {
                  fields: ["title", "description"],
                  populate: {
                    icon: {
                      fields: ["url", "alternativeText"]
                    }
                  }
                },
              },
            },
            "elements.hero": {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            "elements.carousel-projects": {
              populate: {
                relatedItems: {
                  fields: ["title", "slug", "rootSlug"],
                  populate: {
                    image: {
                      fields: ["url", "alternativeText"],
                    },
                    category: {
                      fields: "slug",
                    },
                  },
                },
              },
            },
            "elements.carousel-blog": {
              populate: {
                relatedItems: {
                  fields: ["title", "slug", "rootSlug"],
                  populate: {
                    image: {
                      fields: ["url", "alternativeText"],
                    },
                    description: true
                  },
                },
              },
            },
          },
        },
      },
      locale: locale,
    },

    { encodeValuesOnly: true }
  );
  return pageQery;
};

export const generateKey = (id: number, title: string) => `${title}-${id}`;

export const generateLink = (
  pageSlug: string = "",
  parentSlug: string = "",
  slug: string
) => {
  return pageSlug
    ? parentSlug
      ? `${pageSlug}/${parentSlug}/${slug}`
      : `/${pageSlug}/${slug}`
    : `${slug}`;
};
