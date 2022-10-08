/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      "i.ibb.co",
      "bonik-react.vercel.app",
      "flone-react.pages.dev",
      "media.istockphoto.com",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
