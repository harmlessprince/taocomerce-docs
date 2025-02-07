import { defineClientConfig } from "@vuepress/client";
import BaseUrl from "./components/BaseUrl.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("BaseUrl", BaseUrl);
  },
});