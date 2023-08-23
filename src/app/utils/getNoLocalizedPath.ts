export const getNoLocalizedPath = (path: string) => {
  let noLocalizedPath = "/";
  if (path.length > 3) {
    noLocalizedPath = path.slice(3);
  }
  return noLocalizedPath;
};
