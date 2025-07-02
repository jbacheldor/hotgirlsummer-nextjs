import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withFonts = require('next-fonts');
module.exports = withFonts();

export default nextConfig;
