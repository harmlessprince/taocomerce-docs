---
title: Get Storefront Products
---

# Get Storefront Products

Use this endpoint to get a page of the products that the store shows to customers. The API always excludes archived products. The API sets `archived=false` and ignores any other value.

## Endpoint
**GET** `/v1/storefront/products`

## Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

## Query parameters
### Pagination and sorting
| Parameter | Type | Default | Description |
|---|---|---|---|
| `page` | integer | `0` | Page number. The first page is `0`. |
| `limit` | integer | `20` | Number of products on each page. |
| `sortFieldParam` | string | `CREATED_AT` | Field to sort by, for example `NAME`, `PRICE` or `CREATED_AT`. |
| `sortDirectionParam` | string | `DESC` | `ASC` or `DESC`. |

### Filters
| Parameter | Type | Description |
|---|---|---|
| `search` | string | Search text for the product name or description. |
| `category` | string | ID of the category. |
| `categoryName` | string | Exact name of the category. Use this instead of `category`. |
| `unitCategory` | string | Unit category. Separate more than one value with commas, for example `GRAIN,PRODUCE`. |
| `brand` | string | ID of the brand. |
| `brandName` | string | Exact name of the brand. Use this instead of `brand`. |
| `color` | string | ID of the color. |
| `colorName` | string | Exact name of the color. Use this instead of `color`. |
| `createdAtFrom` | string | Return products that were created on or after this date (ISO 8601). |
| `createdAtTo` | string | Return products that were created on or before this date (ISO 8601). |
| `minPrice` | number | Minimum price. |
| `maxPrice` | number | Maximum price. |
| `availability` | boolean | `true` returns products that have stock. |
| `lowStock` | boolean | `true` returns products at or below their reorder level (and above zero). |
| `status` | string | Product status, for example `ACTIVE`. |
| `minRating` | number | Minimum rating. |
| `archived` | boolean | Archive status. The default is `false`. |
| `tags` | string | Tags. Separate more than one value with commas. |

## Example request
```javascript
fetch('https://api.shopsynch.com/v1/storefront/products?page=0&limit=12&categoryName=Beverages&minPrice=500', {
  method: 'GET',
  headers: { 'X-MerchantApiKey': 'MERCHANT_API_KEY' }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Response 200
```json
{
  "data": {
    "products": [
      {
        "id": "679f8f5a3b5f2173201c2582",
        "name": "Professional DSLR Camera",
        "slug": "professional-dslr-camera-0001",
        "productType": "VARIABLE",
        "image": "https://example.com/camera.jpg",
        "price": 899.0,
        "newPrice": 899.0,
        "effectivePrice": 899.0,
        "isOnSale": false,
        "category": "Cameras",
        "brand": "Example",
        "availableQty": 45,
        "isArchived": false
      }
    ],
    "total": 1,
    "totalPages": 1,
    "currentPage": 1
  },
  "message": "Products retrieved",
  "status": true
}
```
Each item in `products` is a product (V2) in its public form. The sample shows some of the fields. See [Product fields](./get-product.md#product-fields).

### Data fields
| Field | Type | Description |
|---|---|---|
| `products` | array | Products on this page. |
| `total` | integer | Total number of products that match the filters. |
| `totalPages` | integer | Total number of pages. |
| `currentPage` | integer | Current page. This value starts at `1`. The `page` request parameter starts at `0`. |

The API caches this response.

## Next steps
- [Get Storefront Product](./get-product.md)
