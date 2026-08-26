/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,   // ← add this line
  images: {
    unoptimized: true,
  },
};

export default nextConfig;