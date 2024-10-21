/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? "/G1anC": '',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;