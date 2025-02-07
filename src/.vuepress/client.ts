import { defineClientConfig } from "vuepress/client";
declare const BASE_URL: string;
export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    Object.defineProperties(app.config.globalProperties, {
        $base_url: { get: () => BASE_URL },
      });
  },
});


