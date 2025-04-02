import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Home",
      collapsible: false,
      link: "README.md",
    },
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
          link: "",
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
          link: "",
          prefix: "customer/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Product",
          link: "",
          prefix: "product/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Product Review",
          link: "",
          prefix: "review/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Product Category",
          link: "",
          prefix: "category/",
          collapsible: true,
          children: "structure"
        },

        {
          text: "Promotion Ads",
          link: "",
          prefix: "promo-ads/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Cart",
          link: "",
          prefix: "cart/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Payment",
          link: "",
          prefix: "payment/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Media Management",
          link: "",
          prefix: "media-management/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Order",
          link: "",
          prefix: "order/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "Fetch Countries",
          link: "country.md",
        },
        // {
        //   text: "Fetch States by Country ID",
        //   link: "states.md",
        // },
        {
          text: "Fetch Specifications",
          link: "specification.md",
        },
        {
          text: "Fetch Brands",
          link: "brand.md",
        },
        {
          text: "Fetch Colors",
          link: "color.md",
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
