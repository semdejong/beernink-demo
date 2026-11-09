import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async redirects() {
    const temporary = [
      ["/kleurenwaaier", "/kleuren"],
      ["/category/projecten", "/projecten"],
      ["/schilderwerk-villa-flora", "/projecten/villa-flora"],
      ["/villa-flora", "/projecten/villa-flora"],
      ["/stucwerk-en-behangen-plafond", "/projecten/stucwerk-plafond"],
      ["/stucwerk-plafond", "/projecten/stucwerk-plafond"],
      ["/te-hietbrink-winterswijk", "/projecten/te-hietbrink"],
      ["/schilderwerk-winkelpand", "/projecten/de-duif"],
      ["/schilderwerk-boerderij", "/projecten/wassink"],
      ["/schilderwerk-woonboerderij", "/projecten/hoitink"],
    ] as const;
    return temporary.map(([source, destination]) => ({ source, destination, permanent: false }));
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
