/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com",         pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com",        pathname: "/**" },
      { protocol: "https", hostname: "cdn.prod.website-files.com", pathname: "/**" },
    ],
  },
};

if (process.env.NEXT_PUBLIC_STATIC === "1") {
  // GitHub Pages build — basePath /SPM
  nextConfig.output      = "export";
  nextConfig.basePath    = "/SPM";
  nextConfig.assetPrefix = "/SPM";
  nextConfig.images      = { unoptimized: true };
} else if (process.env.NEXT_PUBLIC_STATIC === "prod") {
  // Production FTP build — no basePath, trailing slash for Apache directory routing
  nextConfig.output        = "export";
  nextConfig.trailingSlash = true;
  nextConfig.images        = { unoptimized: true };
}

export default nextConfig;
