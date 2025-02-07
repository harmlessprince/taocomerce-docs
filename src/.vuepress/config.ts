import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import sidebar from "./sidebar.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Taocommerce API",
  description: "Build with joy",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
