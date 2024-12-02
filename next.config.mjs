/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "fakestoreapi.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
    ], // All domains in a single array
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during builds
  },
};

export default nextConfig;
