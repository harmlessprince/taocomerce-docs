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
      { text: "API Sandbox", link: "/api-reference" },
    ],
    sidebar: [
      {
        text: "Overview",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Get Started", link: "/get-started" },
          { text: "Authentication", link: "/authentication" },
          { text: "OAuth for Connected Apps", link: "/oauth" },
          { text: "MCP Connector", link: "/mcp" },
          { text: "Caching & Performance", link: "/caching" },
          { text: "Errors", link: "/errors" },
          { text: "API Sandbox", link: "/api-reference" },
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
              { text: "Fetch Customers", link: "/api-endpoints/customer/fetch-customers" },
              { text: "Show Customer", link: "/api-endpoints/customer/show-customer" },
              { text: "Update Profile", link: "/api-endpoints/customer/update-customer" },
              { text: "Activate Customer", link: "/api-endpoints/customer/activate-customer" },
              { text: "Deactivate Customer", link: "/api-endpoints/customer/deactivate-customer" },
            ],
          },
          { text: "Migrate from V1 to V2", link: "/api-endpoints/migrate-v1-to-v2" },
          {
            text: "Storefront",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/storefront/" },
              { text: "Get Products", link: "/api-endpoints/storefront/get-products" },
              { text: "Get Product", link: "/api-endpoints/storefront/get-product" },
              { text: "Similar and Top Selling", link: "/api-endpoints/storefront/similar-and-top-selling" },
              { text: "Payment Gateways", link: "/api-endpoints/storefront/payment-gateways" },
            ],
          },
          {
            text: "Product",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/product/" },
              { text: "Fetch Products", link: "/api-endpoints/product/v2/fetch-products" },
              { text: "Add Product", link: "/api-endpoints/product/v2/add-product" },
              { text: "Update Product", link: "/api-endpoints/product/v2/update-product" },
              { text: "Manage Variant Groups", link: "/api-endpoints/product/v2/manage-variant-groups" },
              { text: "Manage SKUs", link: "/api-endpoints/product/v2/manage-skus" },
              { text: "Archive or Unarchive", link: "/api-endpoints/product/archive-unarchive-product" },
              { text: "Top Selling by Quantity", link: "/api-endpoints/product/fetch-top-selling-products" },
              { text: "Top Selling by Revenue", link: "/api-endpoints/product/fetch-top-selling-by-revenue" },
            ],
          },
          {
            text: "Product Review",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/review/" },
              { text: "Add Review", link: "/api-endpoints/review/add-review" },
              { text: "Fetch Reviews", link: "/api-endpoints/review/fetch-reviews" },
              { text: "Fetch Product Reviews", link: "/api-endpoints/review/fetch-product-review" },
              { text: "Hide Review", link: "/api-endpoints/review/hide-review" },
              { text: "Delete Review", link: "/api-endpoints/review/delete-review" },
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
              { text: "Create Promo Ad", link: "/api-endpoints/promo-ads/add-promo-ad" },
              { text: "Fetch Promo Ads", link: "/api-endpoints/promo-ads/fetch-promo-ads" },
              { text: "Fetch Published Ads", link: "/api-endpoints/promo-ads/fetch-published-promo-ads" },
              { text: "Update Promo Ad", link: "/api-endpoints/promo-ads/update-promo-ad" },
              { text: "Delete Promo Ad", link: "/api-endpoints/promo-ads/delete-promo-ad" },
            ],
          },
          {
            text: "Promotion Code",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/promotions/" },
              { text: "Create Promotion", link: "/api-endpoints/promotions/add-promotions" },
              { text: "Fetch Promotions", link: "/api-endpoints/promotions/fetch-promotions" },
              { text: "Show Promotion", link: "/api-endpoints/promotions/show-promotions" },
              { text: "Update Promotion", link: "/api-endpoints/promotions/update-promotions" },
              { text: "Apply Promo Code", link: "/api-endpoints/promotions/apply-promotion-code" },
              { text: "Delete Promotion", link: "/api-endpoints/promotions/delete-promotions" },
            ],
          },
          {
            text: "Cart",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/cart/" },
              { text: "Generate Session ID", link: "/api-endpoints/cart/generate-cart-session-id" },
              { text: "Cart V2 Endpoints", link: "/api-endpoints/cart/v2/" },
              { text: "Add Item", link: "/api-endpoints/cart/v2/add-item-to-cart" },
              { text: "Replace Booking Time", link: "/api-endpoints/cart/v2/replace-booking" },
              { text: "Checkout", link: "/api-endpoints/cart/v2/checkout" },
            ],
          },
          {
            text: "Payment",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/payment/" },
              { text: "Initialize Payment", link: "/api-endpoints/payment/initialize-payment" },
              { text: "Initialize Guest Payment", link: "/api-endpoints/payment/initialize-payment-guest" },
              { text: "Verify Payment", link: "/api-endpoints/payment/verify-payment" },
              { text: "Update Payment Status", link: "/api-endpoints/payment/update-payment-status" },
              { text: "Storefront Gateways", link: "/api-endpoints/storefront/payment-gateways" },
            ],
          },
          {
            text: "Media Management",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/media-management/" },
              { text: "Upload Single Image", link: "/api-endpoints/media-management/upload-single-image" },
              { text: "Upload Multiple Images", link: "/api-endpoints/media-management/upload-multiple-images" },
            ],
          },
          {
            text: "Order",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/order/" },
              { text: "Fetch Orders", link: "/api-endpoints/order/fetch-orders" },
              { text: "Fetch Customer Orders", link: "/api-endpoints/order/fetch-customer-orders" },
              { text: "Customer Orders by ID", link: "/api-endpoints/order/fetch-customer-orders-by-customer-id" },
              { text: "Fetch Order Detail", link: "/api-endpoints/order/fetch-order-detail" },
              { text: "Show Order by Number", link: "/api-endpoints/order/fetch-order-by-order-number" },
              { text: "Fetch Order Items", link: "/api-endpoints/order/show-order-items" },
              { text: "Update Order Status", link: "/api-endpoints/order/update-order-status" },
            ],
          },
          {
            text: "Warehouse",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/warehouse/" },
              { text: "Create Warehouse", link: "/api-endpoints/warehouse/create-warehouse" },
              { text: "List Warehouses", link: "/api-endpoints/warehouse/list-warehouses" },
              { text: "Update Warehouse", link: "/api-endpoints/warehouse/update-warehouse" },
            ],
          },
          {
            text: "Inventory",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/inventory/" },
              { text: "Create Inventory", link: "/api-endpoints/inventory/create-inventory" },
              { text: "List Inventory", link: "/api-endpoints/inventory/list-inventory" },
              { text: "Adjust Stock", link: "/api-endpoints/inventory/adjust-stock" },
              { text: "Reserve or Release Stock", link: "/api-endpoints/inventory/reserve-release-stock" },
              { text: "Low Stock Alerts", link: "/api-endpoints/inventory/low-stock" },
              { text: "Inventory Logs", link: "/api-endpoints/inventory/inventory-logs" },
            ],
          },
          {
            text: "Delivery Zone",
            collapsed: true,
            items: [
              { text: "Overview", link: "/api-endpoints/delivery-zone/" },
              { text: "Create Delivery Zone", link: "/api-endpoints/delivery-zone/create-delivery-zone" },
              { text: "Fetch Delivery Zones", link: "/api-endpoints/delivery-zone/fetch-delivery-zones" },
              { text: "Match Delivery Zone", link: "/api-endpoints/delivery-zone/match-delivery-zone" },
              { text: "Update Delivery Zone", link: "/api-endpoints/delivery-zone/update-delivery-zone" },
              { text: "Pause or Resume Zone", link: "/api-endpoints/delivery-zone/update-zone-status" },
              { text: "Delete Delivery Zone", link: "/api-endpoints/delivery-zone/delete-delivery-zone" },
            ],
          },
          {
            text: "Integration Configuration",
            link: "/api-endpoints/integration-configuration/"
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
