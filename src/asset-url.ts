export function assetUrl(path?: string) {
  if (!path) return '';
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${import.meta.env.BASE_URL}${path.slice(1)}`;
}
