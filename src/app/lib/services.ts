const baseUrl = "http://localhost:1337/api";

const query = "nested_menu_items";

export const getHeaderData = async () => {
  const res = await fetch(`${baseUrl}/menu-items?populate=${query}`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const { data } = await res.json();
  return data;
};

export const getInitialPageData = async () => {};
