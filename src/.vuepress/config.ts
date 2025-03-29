import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import theme from "./theme.js";
import sidebar from "./sidebar.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "ShopSynch API",
  description: "Build with joy",

  theme,

  define: {
   BASE_URL: "https://api.shopsynch.com"
  },
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-H7MQXF50EB',
    }),
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
