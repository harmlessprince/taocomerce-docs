import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "Introduction",
      collapsible: true,
      link: "introduction.md",
    },
    {
      text: "Get Started",
      collapsible: true,
      link: "get-started.md",
    },
    {
      text: "Authentication",
      collapsible: true,
      link: "authentication.md",
    },
    {
      text: "Errors",
      collapsible: true,
      link: "errors.md",
    },
    {
      text: "API Endpoints",
      // icon: "laptop-code",
      prefix: "api-endpoints/",
      link: "api-endpoints/",
      children: [
        {
          text: "Address",
          link: "",
          prefix: "address/",
          collapsible: true,
          children: "structure"
        }
      ],
    },
    // {
    //   text: "Demo",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    // {
    //   text: "Slides",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
