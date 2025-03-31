import { defineClientConfig } from "vuepress/client";
declare const BASE_URL: string;
declare const SANDBOX_BASE_URL: string;
export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    Object.defineProperties(app.config.globalProperties, {
        $base_url: { get: () => BASE_URL },
        $sandbox_base_url: { get: () => SANDBOX_BASE_URL },
      });
  },
});


