import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import theme from "./theme.js";
import sidebar from "./sidebar.js";
import { config } from "dotenv";
config();
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
    SANDBOX_BASE_URL: "https://api-sandbox.shopsynch.com",
  },
  plugins: [
    googleAnalyticsPlugin({
      id: process.env.GOOGLE_ANALYTICS_API,
    }),
  ],
  head: [
    [
      "meta",
      {
        name: "description",
        content:
          "ShopSynch is an API-first e-commerce platform designed for developers, startups, and SMBs. Build and scale online stores effortlessly with our powerful, fully managed backend.",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "ecommerce API, API-as-a-service, headless commerce, online store API, build e-commerce, SMB e-commerce, developer-friendly API, scalable e-commerce, API-first commerce, ShopSynch",
      },
    ],
    ["meta", { name: "author", content: "ShopSynch" }],
    ["meta", { name: "robots", content: "index, follow" }],
    [
      "meta",
      {
        property: "og:title",
        content: "ShopSynch - The Ultimate E-commerce API",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Power your online store with ShopSynch – a scalable, API-driven e-commerce solution for businesses and developers.",
      },
    ],
    [
      "meta",
      { property: "og:image", content: "https://res.cloudinary.com/ibreathcode/image/upload/v1743273890/shopsynch/Artboard_1_3x_lnzwhf.png" },
    ],
    ["meta", { property: "og:url", content: "https://docs.shopsynch.com" }],
    ["meta", { name: "twitter:card", content: "https://res.cloudinary.com/ibreathcode/image/upload/v1743273890/shopsynch/Artboard_1_3x_lnzwhf.png" }],
    [
      "meta",
      {
        name: "twitter:title",
        content: "ShopSynch - The Ultimate E-commerce API",
      },
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "Seamlessly integrate and scale your online business with our API-first e-commerce platform.",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://res.cloudinary.com/ibreathcode/image/upload/v1743273890/shopsynch/Artboard_1_3x_lnzwhf.png",
      },
    ],
    [
      "meta",
      {
        name: "algolia-site-verification",
        content: "7434895B9E96E7DF",
        keywords:
          "ecommerce api api-as-service shopsynch backend-as-service order product SellOnline BusinessGrowth Developers EcommerceAPI ShopSynch",
      },
    ],
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
