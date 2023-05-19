/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // optimizeFonts: true,
        // optimizeImages: true,
        serverActions: true, 
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            }
        ]
    }
}

module.exports = nextConfig
