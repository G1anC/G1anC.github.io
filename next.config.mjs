/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'standalone', // or 'export' if you intend to export static files
    images: {
        unoptimized: true,
    },
};

export default nextConfig;