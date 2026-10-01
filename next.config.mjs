/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['*.ngrok-free.dev', 'localhost:3000'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'braincura.s3.eu-north-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
