import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withFonts = require('next-fonts');
module.exports = withFonts();
// need to include this to ensure that process envs
// are accessible to the client side
module.exports = {
    env: {
        BASE_URL: process.env.BASE_URL,
    }
}

export default nextConfig;
