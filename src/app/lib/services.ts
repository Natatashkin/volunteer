export const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const headers = {
  Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};

export const getAllLocales = async () => {
  const res = await fetch(`${baseUrl}/api/i18n/locales`, {
    headers,
  });

  if (!res.ok) {
    throw new Error("ERROR!");
  }
  const data = await res.json();
  return data;
};

export const getNavigationData = async (query: string) => {
  const res = await fetch(`${baseUrl}/api/menu-items?${query}`, { headers });

  if (!res.ok) {
    throw new Error("Error");
  }
  const { data } = await res.json();
  return data;
};

export const getPages = async () => {
  const res = await fetch(`${baseUrl}/api/pages`, {
    headers,
  });

  if (!res.ok) {
    throw new Error("Error");
  }
  const { data } = await res.json();
  return data;
};

export const getPageData = async (request: string) => {
  const res = await fetch(`${baseUrl}/api/pages?${request}`, {
    headers,
    // cache: 'no-store', 
  });

  if (!res.ok) {
    throw new Error("Error");
  }
  const { data } = await res.json();
  return data;
};
