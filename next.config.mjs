/** @type {import('next').NextConfig} */
const NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '8000',
                pathname: '/**',
            }
        ]
    }
};

export default NextConfig;
