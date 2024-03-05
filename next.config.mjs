/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OPENWEATHERMAP_API_KEY: process.env.OPENWEATHERMAP_API_KEY,
        ARTICLE_API_KEY: process.env.ARTICLE_API_KEY,
        QUOTE_OF_THE_DAY_API_KEY: process.env.QUOTE_OF_THE_DAY_API_KEY,
    },
};

export default nextConfig;
