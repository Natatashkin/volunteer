const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const headers = {
  Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};

export const getAllLocales = async () => {
  const res = await fetch(`${baseUrl}/i18n/locales`, {
    headers,
  });

  if (!res.ok) {
    throw new Error("ERROR!");
  }
  const data = await res.json();
  return data;
};

export const getNavigationData = async (query: string) => {
  const res = await fetch(`${baseUrl}/menu-items?${query}`, { headers });

  if (!res.ok) {
    throw new Error("Error");
  }
  const { data } = await res.json();
  return data;
};

export const getInitialPageData = async () => {};
