---
title: Similar and Top Selling Products
---

# Similar and Top Selling Products

## Similar products
Use this endpoint to get products in the same category as a product. Use it for a "Related products" section.

**GET** `/v1/storefront/products/similar/by/category/{productId}`

| Parameter | In | Type | Default | Description |
|---|---|---|---|---|
| `productId` | path | string | | ID of the reference product. |
| `limit` | query | integer | `4` | Maximum number of products to return. |

```javascript
fetch('https://api.shopsynch.com/v1/storefront/products/similar/by/category/679f8f5a3b5f2173201c2582?limit=4', {
  method: 'GET',
  headers: { 'X-MerchantApiKey': 'MERCHANT_API_KEY' }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

Response 200. The `data` field is an array of products. See [Product fields](./get-product.md#product-fields).
```json
{
  "data": [ { "id": "679f8f5a3b5f2173201c2583", "name": "Mirrorless Camera", "price": 749.0 } ],
  "message": "Similar products retrieved",
  "status": true
}
```
If the reference product is archived, the API returns `400`: "'PRODUCT' is no longer available."

## Top selling products
Use this endpoint to get the products that sold the most units.

**GET** `/v1/storefront/products/top-selling`

| Parameter | Type | Default | Description |
|---|---|---|---|
| `startDate` | string | | Start of the date range. |
| `endDate` | string | | End of the date range. |
| `limit` | integer | `10` | Maximum number of products to return. |

```javascript
fetch('https://api.shopsynch.com/v1/storefront/products/top-selling?limit=10', {
  method: 'GET',
  headers: { 'X-MerchantApiKey': 'MERCHANT_API_KEY' }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

Response 200. The `data` field is an array of products with basic details. The response does not show business metrics such as revenue.
```json
{
  "data": [ { "id": "679f8f5a3b5f2173201c2582", "name": "Professional DSLR Camera" } ],
  "message": "Top selling products retrieved",
  "status": true
}
```
