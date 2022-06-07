/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    YMAPS_KEY: process.env.YMAPS_KEY,
    BOT_TOKEN: process.env.BOT_TOKEN,
    CHAT_ID: process.env.CHAT_ID
  }
}

module.exports = nextConfig
