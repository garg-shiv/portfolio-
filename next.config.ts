import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [new URL('https://www.svgrepo.com/svg/**'),new URL('https://picsum.photos/**'), new URL("https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/**"), new URL("https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/**"), new URL("https://commons.wikimedia.org/wiki/**")],
  }
};

export default nextConfig;
