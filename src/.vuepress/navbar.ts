import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Home",
    link: "README.md",
  },
  {
    text: "Get Started",
    link: "get-started.md",
  },
  {
    text: "API Endpoints",
    // icon: "laptop-code",
    prefix: "api-endpoints/",
    link: "api-endpoints/",
  },

  // "/demo/",
  // {
  //   text: "Guide",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
  //     },
  //   ],
  // },
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
