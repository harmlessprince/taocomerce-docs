---
title: Migrate from V1 to V2
---

# Migrate from V1 to V2

The V1 product endpoints and the V1 cart endpoints are no longer available. The API rejects every request to a path that starts with `/v1/products` or `/v1/carts`. Use the V2 endpoints in the table.

## Response for a V1 request
The API returns HTTP status `410 Gone`.
```json
{
  "status": false,
  "message": "This v1 endpoint has been deprecated. Please integrate with the equivalent v2 endpoint.",
  "errorCode": "API_VERSION_DEPRECATED",
  "resolution": "Integrate with the equivalent v2 endpoint instead.",
  "nextStep": "MIGRATE_TO_V2"
}
```
If you get `errorCode: API_VERSION_DEPRECATED`, change the request to the V2 endpoint.

## Cart endpoints
| V1 (removed) | V2 |
|---|---|
| `GET /v1/carts/items` | `GET /v2/carts/items` |
| `POST /v1/carts/add` | [`POST /v2/carts/add`](./cart/v2/add-item-to-cart.md) |
| `PATCH /v1/carts/remove/{carItemId}` | `PATCH /v2/carts/remove/{cartItemId}` |
| `PATCH /v1/carts/item/increment/quantity/{cartId}` | `PATCH /v2/carts/item/increment/quantity/{cartId}` |
| `PATCH /v1/carts/item/decrement/quantity/{cartId}` | `PATCH /v2/carts/item/decrement/quantity/{cartId}` |
| `DELETE /v1/carts/clear` | `DELETE /v2/carts/clear` |
| `POST /v1/carts/checkout` | [`POST /v2/carts/checkout`](./cart/v2/checkout.md) |
| `POST /v1/carts/guest/checkout` | [`POST /v2/carts/guest/checkout`](./cart/v2/checkout.md) |

`GET /v1/generate/session/id` is not changed. Use it to get a guest session ID.

Changes in the request and the response:
- `variationId` and `variationPriceId` become `variantGroupId` and `skuId`.
- The cart item has `variantGroupId`, `skuId`, `attributes` and `productType`. It does not have `ramSize`, `storage`, `size` and `color`.
- The checkout response has `siblingOrderIds`.

## Product endpoints
| V1 (removed) | V2 or storefront |
|---|---|
| `GET /v1/products` | [`GET /v2/products`](./product/v2/fetch-products.md) (merchant) or [`GET /v1/storefront/products`](./storefront/get-products.md) (storefront) |
| `GET /v1/products/{productId}` | `GET /v2/products/{productId}` or [`GET /v1/storefront/products/{productId}`](./storefront/get-product.md) |
| `GET /v1/products/slug/{slug}` | `GET /v2/products/slug/{slug}` or `GET /v1/storefront/products/slug/{slug}` |
| `GET /v1/products/similar/by/category/{productId}` | `GET /v2/products/similar/by/category/{productId}` or `GET /v1/storefront/products/similar/by/category/{productId}` |
| `GET /v1/products/top-selling` | `GET /v2/products/top-selling` or `GET /v1/storefront/products/top-selling` |
| `POST /v1/products` | [`POST /v2/products`](./product/v2/add-product.md) |
| `PATCH /v1/products/{productId}` | [`PATCH /v2/products/{productId}`](./product/v2/update-product.md) |
| `DELETE /v1/products/{productId}` | `DELETE /v2/products/{productId}` |
| `POST /v1/products/variation/add` and `PATCH /v1/products/variation/{variationId}` | [Variant group endpoints](./product/v2/manage-variant-groups.md) |
| `POST /v1/products/variation/priceDetail` and `PATCH /v1/products/variation/priceDetail/{id}` | [SKU endpoints](./product/v2/manage-skus.md) |
| `GET /v1/products/{productId}/rating` | Not available in V2 |

> [!NOTE]
> The paths `/v1/storefront/products/*` and `/v1/product-stats/*` start with `/v1`, but they are current endpoints. The V1 block does not apply to them.

## Endpoints that did not change
V1 orders and V1 product categories have no V2 version. They are still available.
