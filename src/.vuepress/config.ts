import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import sidebar from "./sidebar.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "ShopSync API",
  description: "Build with joy",

  theme,


  define: {
   BASE_URL: "https://backend.shopthanau.com"
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
