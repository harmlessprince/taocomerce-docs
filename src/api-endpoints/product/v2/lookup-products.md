---
title: Lookup Products (V2)
---

# Lookup Products (V2)

Use this endpoint for lightweight, paginated product lookups. It returns minimal product `id` and `name` records, ideal for search dropdowns, order creation forms, and autocomplete fields.

## Endpoint
**GET** `/v2/products/lookup`

## Authentication
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Query parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `search` | string | No | Filter products by name substring. |
| `page` | integer | No | Zero-based page number. Default: `0`. |
| `limit` | integer | No | Maximum items per page (alias `size`, maximum: `100`). Default: `20`. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Products retrieved successfully",
  "data": {
    "items": [
      {
        "id": "679f8f5a3b5f2173201c2582",
        "name": "Wireless Noise Cancelling Headphones"
      },
      {
        "id": "679f8f5a3b5f2173201c2589",
        "name": "Smart Fitness Watch Series 5"
      }
    ],
    "page": 0,
    "limit": 20,
    "total": 2,
    "totalPages": 1,
    "hasNext": false,
    "hasPrevious": false
  }
}
```
