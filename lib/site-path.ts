const basePath = process.env.NEXT_PUBLIC_STATIC === "1" ? "/SPM" : "";

export function sitePath(path: string) {
  if (!basePath) return path;
  if (path === "/") return basePath || "/";
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
