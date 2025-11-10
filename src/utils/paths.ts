// utils/paths.ts
export const getAssetPath = (path: string) => {
  const basePath = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}${cleanPath}`.replace(/\/+/g, '/');
};

export const getImagePath = (imageName: string) => {
  return getAssetPath(`images/${imageName}`);
};