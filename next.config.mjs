import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    if (process.env.NEXT_PUBLIC_STATIC === "1") {
      config.resolve.alias = {
        ...(config.resolve.alias ?? {}),
        "@/lib/actions/contact": path.resolve("./lib/actions/contact.static.ts"),
        "@/lib/actions/admin": path.resolve("./lib/actions/admin.static.ts"),
      };
    }

    return config;
  },
};

export default nextConfig;
