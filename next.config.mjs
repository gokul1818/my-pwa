import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  // Add any other Next.js configuration options here
};

const pwaConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

export default { ...nextConfig, ...pwaConfig };
