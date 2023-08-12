/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "thumb.mt.co.kr",
      "img.lovepik.com",
      "cdn.pixabay.com",
      "soonsool-bucket.s3.ap-northeast-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
