import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // "portfolio",
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
          text: "Authentication",
          link: "authentication/",
          prefix: "authentication/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Address",
          link: "",
          prefix: "address/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Customer",
          link: "customer/",
          prefix: "customer/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Product",
          link: "product/",
          prefix: "product/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Cart",
          link: "cart/",
          prefix: "cart/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Payment",
          link: "payment/",
          prefix: "payment/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Fetch All Countries",
          link: "country.md",
        },
        {
          text: "Fetch States by Country ID",
          link: "states.md",
        },
        {
          text: "Fetch Product Specification",
          link: "specification.md",
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
    // {
    //   text: "Docs",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // {
    //   text: "Slides",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
