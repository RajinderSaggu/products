/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.app.goo.gl', // Add the correct hostname
      },
    ],
    domains: ['images.app.goo.gl'], // Alternative method
  },
};

module.exports = nextConfig;
