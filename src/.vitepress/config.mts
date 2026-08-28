import { defineConfig } from "vitepress";

export default defineConfig({
  title: "ShopSynch API",
  description: "Build with joy",
  lang: "en-US",
  ignoreDeadLinks: true,
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
      {
        property: "og:image",
        content:
          "https://res.cloudinary.com/ibreathcode/image/upload/v1743273890/shopsynch/Artboard_1_3x_lnzwhf.png",
      },
    ],
    ["meta", { property: "og:url", content: "https://docs.shopsynch.com" }],
    [
      "meta",
      {
        name: "twitter:card",
        content:
          "https://res.cloudinary.com/ibreathcode/image/upload/v1743273890/shopsynch/Artboard_1_3x_lnzwhf.png",
      },
    ],
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
        content:
          "https://res.cloudinary.com/ibreathcode/image/upload/v1743273890/shopsynch/Artboard_1_3x_lnzwhf.png",
      },
    ],
  ],
  themeConfig: {
    logo: "https://res.cloudinary.com/ibreathcode/image/upload/v1743273890/shopsynch/Artboard_1_3x_lnzwhf.png",
    siteTitle: "ShopSynch API",
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/get-started" },
      { text: "API Endpoints", link: "/api-endpoints/" },
    ],
    sidebar: [
      {
        text: "Overview",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Get Started", link: "/get-started" },
          { text: "Authentication", link: "/authentication" },
          { text: "OAuth for Connected Apps", link: "/oauth" },
          { text: "MCP (AI Agents)", link: "/mcp" },
          { text: "Errors", link: "/errors" },
        ],
      },
      {
        text: "API Endpoints",
        collapsed: false,
        items: [
          { text: "Overview", link: "/api-endpoints/" },
          {
            text: "Authentication",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/authentication/" },
              {
                text: "Customer Registration",
                link: "/api-endpoints/authentication/customer-registration",
              },
              {
                text: "Login as Customer",
                link: "/api-endpoints/authentication/login-as-customer",
              },
              {
                text: "Login as Store Owner",
                link: "/api-endpoints/authentication/login-as-store-owner",
              },
              {
                text: "Google Authentication",
                link: "/api-endpoints/authentication/google-authentication",
              },
              {
                text: "Login with Google",
                link: "/api-endpoints/authentication/login-with-google-as-customer",
              },
              {
                text: "Signup with Google",
                link: "/api-endpoints/authentication/sginup-with-google-as-customer",
              },
              {
                text: "Passwordless Auth",
                link: "/api-endpoints/authentication/passwordless-authentication",
              },
              {
                text: "Forgot Password",
                link: "/api-endpoints/authentication/forgot-password",
              },
              {
                text: "Reset Password",
                link: "/api-endpoints/authentication/reset-password",
              },
              {
                text: "Change Customer Password",
                link: "/api-endpoints/authentication/change-customer-password",
              },
              {
                text: "Change Merchant Password",
                link: "/api-endpoints/authentication/change-merchant-password",
              },
              {
                text: "Customer Profile",
                link: "/api-endpoints/authentication/customer-profile",
              },
              {
                text: "User Profile",
                link: "/api-endpoints/authentication/user-profile",
              },
            ],
          },
          {
            text: "Address",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/address/" },
              {
                text: "Add Address",
                link: "/api-endpoints/address/add-address",
              },
              {
                text: "Fetch Address",
                link: "/api-endpoints/address/fetch-address",
              },
              {
                text: "Update Address",
                link: "/api-endpoints/address/update-address",
              },
              {
                text: "Set Default Address",
                link: "/api-endpoints/address/set-default-address",
              },
              {
                text: "Delete Address",
                link: "/api-endpoints/address/delete-address",
              },
            ],
          },
          {
            text: "Customer",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/customer/" },
              {
                text: "Activate Customer",
                link: "/api-endpoints/customer/activate-customer",
              },
              {
                text: "Deactivate Customer",
                link: "/api-endpoints/customer/deactivate-customer",
              },
              {
                text: "Delete Customer",
                link: "/api-endpoints/customer/delete-customer",
              },
              {
                text: "Fetch Customer Stats",
                link: "/api-endpoints/customer/fetch-customer-stats",
              },
              {
                text: "Fetch Customers",
                link: "/api-endpoints/customer/fetch-customers",
              },
            ],
          },
          {
            text: "Product",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/product/" },
              {
                text: "Add Product",
                link: "/api-endpoints/product/add-product",
              },
              {
                text: "Fetch Products",
                link: "/api-endpoints/product/fetch-products",
              },
              {
                text: "Fetch Product Details",
                link: "/api-endpoints/product/fetch-product-details",
              },
              {
                text: "Update Product",
                link: "/api-endpoints/product/update-product",
              },
              {
                text: "Delete Product",
                link: "/api-endpoints/product/delete-product",
              },
              {
                text: "Fetch Top Selling Products",
                link: "/api-endpoints/product/fetch-top-selling-products",
              },
              {
                text: "Toggle Product Status",
                link: "/api-endpoints/product/toggle-product-status",
              },
              {
                text: "Fetch Product V2",
                link: "/api-endpoints/product/v2/fetch-products",
              },
            ],
          },
          {
            text: "Product Review",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/review/" },
              {
                text: "Add Review",
                link: "/api-endpoints/review/add-review",
              },
              {
                text: "Fetch Reviews",
                link: "/api-endpoints/review/fetch-reviews",
              },
              {
                text: "Delete Review",
                link: "/api-endpoints/review/delete-review",
              },
            ],
          },
          {
            text: "Product Category",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/category/" },
              {
                text: "Add Category",
                link: "/api-endpoints/category/add-category",
              },
              {
                text: "Fetch Categories",
                link: "/api-endpoints/category/fetch-categories",
              },
              {
                text: "Fetch Selected Categories",
                link: "/api-endpoints/category/fetch-selected-categories",
              },
              {
                text: "Delete Category",
                link: "/api-endpoints/category/delete-category",
              },
            ],
          },
          {
            text: "Promotion Ads",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/promo-ads/" },
              {
                text: "Add Promo Ad",
                link: "/api-endpoints/promo-ads/add-promo-ads",
              },
              {
                text: "Fetch Promo Ads",
                link: "/api-endpoints/promo-ads/fetch-promo-ads",
              },
              {
                text: "Update Promo Ad",
                link: "/api-endpoints/promo-ads/update-promo-ads",
              },
              {
                text: "Delete Promo Ad",
                link: "/api-endpoints/promo-ads/delete-promo-ads",
              },
            ],
          },
          {
            text: "Promotion Code",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/promotions/" },
              {
                text: "Add Promo Code",
                link: "/api-endpoints/promotions/add-promo-code",
              },
              {
                text: "Fetch Promo Codes",
                link: "/api-endpoints/promotions/fetch-promo-code",
              },
              {
                text: "Update Promo Code",
                link: "/api-endpoints/promotions/update-promo-code",
              },
              {
                text: "Delete Promo Code",
                link: "/api-endpoints/promotions/delete-promo-code",
              },
            ],
          },
          {
            text: "Cart",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/cart/" },
              {
                text: "Generate Session ID",
                link: "/api-endpoints/cart/generate-cart-session-id",
              },
              {
                text: "List Cart Items",
                link: "/api-endpoints/cart/list-cart-items",
              },
              {
                text: "Add Item to Cart",
                link: "/api-endpoints/cart/add-item-to-cart",
              },
              {
                text: "Increment Cart Item",
                link: "/api-endpoints/cart/increment-cart-item",
              },
              {
                text: "Decrement Cart Item",
                link: "/api-endpoints/cart/decrement-cart-item",
              },
              {
                text: "Remove Cart Item",
                link: "/api-endpoints/cart/remove-cart-item",
              },
              {
                text: "Clear Cart",
                link: "/api-endpoints/cart/clear-cart",
              },
              { text: "Checkout", link: "/api-endpoints/cart/checkout" },
              {
                text: "Checkout Guest",
                link: "/api-endpoints/cart/checkout-guest",
              },
            ],
          },
          {
            text: "Payment",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/payment/" },
              {
                text: "Initialize Paystack Payment",
                link: "/api-endpoints/payment/initialize-paystack-payment",
              },
              {
                text: "Verify Paystack Payment",
                link: "/api-endpoints/payment/verify-paystack-payment",
              },
              {
                text: "Initialize Monnify Payment",
                link: "/api-endpoints/payment/initialize-monnify-payment",
              },
              {
                text: "Verify Monnify Payment",
                link: "/api-endpoints/payment/verify-monnify-payment",
              },
              {
                text: "Initialize Payment Link",
                link: "/api-endpoints/payment/initialize-payment-link",
              },
            ],
          },
          {
            text: "Media Management",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/media-management/" },
              {
                text: "Upload Media",
                link: "/api-endpoints/media-management/upload-media",
              },
              {
                text: "Delete Media",
                link: "/api-endpoints/media-management/delete-media",
              },
            ],
          },
          {
            text: "Order",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/order/" },
              {
                text: "Fetch Orders",
                link: "/api-endpoints/order/fetch-orders",
              },
              {
                text: "Fetch Order Details",
                link: "/api-endpoints/order/fetch-order-details",
              },
              {
                text: "Update Order Status",
                link: "/api-endpoints/order/update-order-status",
              },
            ],
          },
          {
            text: "Warehouse",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/warehouse/" },
              {
                text: "Add Warehouse",
                link: "/api-endpoints/warehouse/add-warehouse",
              },
              {
                text: "Fetch Warehouses",
                link: "/api-endpoints/warehouse/fetch-warehouses",
              },
              {
                text: "Update Warehouse",
                link: "/api-endpoints/warehouse/update-warehouse",
              },
              {
                text: "Delete Warehouse",
                link: "/api-endpoints/warehouse/delete-warehouse",
              },
            ],
          },
          {
            text: "Inventory",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/inventory/" },
              {
                text: "Fetch Inventory",
                link: "/api-endpoints/inventory/fetch-inventory",
              },
              {
                text: "Update Inventory",
                link: "/api-endpoints/inventory/update-inventory",
              },
            ],
          },
          {
            text: "Delivery Zone",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/delivery-zone/" },
              {
                text: "Add Delivery Zone",
                link: "/api-endpoints/delivery-zone/add-delivery-zone",
              },
              {
                text: "Fetch Delivery Zones",
                link: "/api-endpoints/delivery-zone/fetch-delivery-zones",
              },
              {
                text: "Update Delivery Zone",
                link: "/api-endpoints/delivery-zone/update-delivery-zone",
              },
              {
                text: "Delete Delivery Zone",
                link: "/api-endpoints/delivery-zone/delete-delivery-zone",
              },
            ],
          },
          {
            text: "Integration Configuration",
            collapsed: true,
            items: [
              {
                text: "Overview",
                link: "/api-endpoints/integration-configuration/",
              },
              {
                text: "Update Integration Config",
                link: "/api-endpoints/integration-configuration/update-integration-configuration",
              },
              {
                text: "Fetch Integration Config",
                link: "/api-endpoints/integration-configuration/fetch-integration-configuration",
              },
            ],
          },
          { text: "Fetch Countries", link: "/api-endpoints/country" },
          {
            text: "Fetch Specifications",
            link: "/api-endpoints/specification",
          },
          { text: "Fetch Brands", link: "/api-endpoints/brand" },
          { text: "Fetch Colors", link: "/api-endpoints/color" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    footer: {
      message: "Build with joy",
      copyright: "Copyright © 2026 ShopSynch",
    },
  },
});
