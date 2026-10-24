---
title: Storefront API
---

# Storefront API

Use the Storefront API to build the customer-facing pages of a store: the product list, the product page, related products, and the payment options at checkout.

These endpoints are public. They do not need a customer token. Send the `X-MerchantApiKey` header so that the API can find the store. The storefront product endpoints return only products that are not archived. They return the public product data and do not return cost price or profit.

## Endpoints
| Endpoint | Method | Path |
|---|---|---|
| [Get Storefront Products](./get-products.md) | GET | `/v1/storefront/products` |
| [Get Storefront Product](./get-product.md) | GET | `/v1/storefront/products/{productId}` |
| [Get Storefront Product by Slug](./get-product.md#get-a-product-by-slug) | GET | `/v1/storefront/products/slug/{slug}` |
| [Get Similar Storefront Products](./similar-and-top-selling.md#similar-products) | GET | `/v1/storefront/products/similar/by/category/{productId}` |
| [Get Top Selling Storefront Products](./similar-and-top-selling.md#top-selling-products) | GET | `/v1/storefront/products/top-selling` |
| [Get Storefront Payment Gateways](./payment-gateways.md) | GET | `/v1/storefront/payment-gateways` |

## Typical storefront flow
1. Show the product list: [Get Storefront Products](./get-products.md).
2. Show a product page: [Get Storefront Product](./get-product.md).
3. Add the product to the cart: [Cart V2](../cart/v2/index.md).
4. Show the payment options: [Get Storefront Payment Gateways](./payment-gateways.md).
5. Create the order: [Checkout (V2)](../cart/v2/checkout.md).

## Errors
| Status | Message | Cause |
|---|---|---|
| `400` | 'PRODUCT' is no longer available. | The product is archived. |
| `404` | Product not found | The product ID or slug does not exist. |
