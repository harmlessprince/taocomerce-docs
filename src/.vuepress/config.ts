import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import theme from "./theme.js";
import sidebar from "./sidebar.js";
import {config} from "dotenv"
config()
export default defineUserConfig({
  base: "/",
  // permalinkPattern: "/:slug",
  // permalinkPattern: ":slug.html",
  // shouldPrefetch: true,
  lang: "en-US",
  title: "ShopSynch API",
  description: "Build with joy",
  theme,
  define: {
   BASE_URL: "https://api.shopsynch.com",
   SANDBOX_BASE_URL: "https://api-sandbox.shopsynch.com"
  },
  plugins: [
    googleAnalyticsPlugin({
      id: process.env.GOOGLE_ANALYTICS_API,
    }),
    
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
