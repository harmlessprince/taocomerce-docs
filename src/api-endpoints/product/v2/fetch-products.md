---
title: Fetch Products (V2)
---

# Fetch Products (V2)

Use these endpoints to get a page of products, or to get one product with all its details. V2 products have variant groups and SKUs.

> [!NOTE]
> For a customer storefront, use the [Storefront API](../../storefront/index.md). It returns only products that are not archived.

## Endpoints
| Endpoint | Method | Path |
|---|---|---|
| Fetch products | GET | `/v2/products` |
| Fetch one product | GET | `/v2/products/{productId}` |
| Fetch one product by slug | GET | `/v2/products/slug/{slug}` |
| Fetch similar products | GET | `/v2/products/similar/by/category/{productId}` |
| Fetch top selling products | GET | `/v2/products/top-selling` |

## Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```
These endpoints are public in the API specification. The API uses the `X-MerchantApiKey` header to find the store.

## Query parameters for `GET /v2/products`
### Pagination and sorting
| Parameter | Type | Default | Description |
|---|---|---|---|
| `page` | integer | `0` | Page number. The first page is `0`. |
| `limit` | integer | `100` | Number of products on each page. |
| `sortFieldParam` | string | `CREATED_AT` | Field to sort by, for example `NAME`, `PRICE` or `CREATED_AT`. |
| `sortDirectionParam` | string | `DESC` | `ASC` or `DESC`. |
| `withCursor` | boolean | `false` | Set to `true` to use cursor pagination. |
| `cursor` | string | | Cursor from the previous response (ISO 8601 instant). Use it with `withCursor=true`. |

### Filters
| Parameter | Type | Description |
|---|---|---|
| `search` | string | Search text for the product name or description. |
| `category` / `categoryName` | string | ID or exact name of the category. |
| `unitCategory` | string | Unit category. Separate more than one value with commas. |
| `brand` / `brandName` | string | ID or exact name of the brand. |
| `color` / `colorName` | string | ID or exact name of the color. |
| `createdAtFrom` / `createdAtTo` | string | Date range for the creation date (ISO 8601). |
| `minPrice` / `maxPrice` | number | Price range. |
| `availability` | boolean | `true` returns products that have stock. |
| `lowStock` | boolean | `true` returns products at or below their reorder level. |
| `status` | string | Product status. |
| `minRating` | number | Minimum rating. |
| `archived` | boolean | Archive status. The default is `false`. |
| `tags` | string | Tags. Separate more than one value with commas. |

> [!NOTE]
> The API does not return archived products unless you set `archived=true`.

## Example request
```javascript
fetch('https://api.shopsynch.com/v2/products?page=0&limit=20&search=camera&sortFieldParam=PRICE&sortDirectionParam=ASC', {
  method: 'GET',
  headers: { 'X-MerchantApiKey': 'MERCHANT_API_KEY' }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Response 200
The list endpoint returns `products`, `total`, `totalPages` and `currentPage` in the `data` field. `currentPage` starts at `1`. The one-product endpoints return one product in the `data` field.

```json
{
  "id": "679f8f5a3b5f2173201c2582",
  "name": "Professional DSLR Camera",
  "slug": "professional-dslr-camera-0001",
  "productType": "VARIABLE",
  "price": 899.0,
  "effectivePrice": 899.0,
  "isOnSale": false,
  "attributes": {
    "Megapixels": "24.2 MP",
    "Sensor Type": "CMOS"
  },
  "variantGroups": [
    {
      "attributeName": "Color",
      "attributeValue": "Graphite Black",
      "skus": [
        { "price": 899.0, "quantityInStock": 45, "attributes": { "Storage": "64GB" } }
      ]
    }
  ],
  "availableQty": 45,
  "isArchived": false
}
```
See [Product fields](../../storefront/get-product.md#product-fields) for the description of the fields. The merchant response also has the cost price and the profit.

## Legacy fields
A V2 product also has some fields from the removed V1 API, such as `ramSize`, `storage`, `size`, `color` and `variations`. These fields are deprecated. Use `attributes` instead.

## Related endpoints
- [Storefront API](../../storefront/index.md)
