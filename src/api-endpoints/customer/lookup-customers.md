---
title: Lookup Customers (V2)
---

# Lookup Customers (V2)

Use this endpoint for minimal, paginated customer lookups returning only customer identifiers, names, and contact details. This is optimized for customer picker dropdowns and search inputs.

## Endpoint
**GET** `/v2/customers/lookup`

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
| `search` | string | No | Search substring matching customer full name or email. |
| `page` | integer | No | Zero-based page number. Default: `0`. |
| `limit` | integer | No | Items per page (alias `size`, maximum `100`). Default: `20`. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Customers retrieved successfully",
  "data": {
    "items": [
      {
        "id": "67dfb8408bd13b35a66f42ed",
        "name": "Jane Doe",
        "email": "customer@example.com"
      }
    ],
    "page": 0,
    "limit": 20,
    "total": 1,
    "totalPages": 1,
    "hasNext": false,
    "hasPrevious": false
  }
}
```
