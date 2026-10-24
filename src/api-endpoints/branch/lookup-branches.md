---
title: Lookup Branches (V2)
---

# Lookup Branches (V2)

Use this endpoint for lightweight, paginated branch lookups. It returns only branch `id` and `name` pairs, designed for UI selection dropdowns and filter bars.

## Endpoint
**GET** `/v2/branches/lookup`

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
| `search` | string | No | Filter branches by name substring. |
| `page` | integer | No | Zero-based page number. Default: `0`. |
| `limit` | integer | No | Items per page (alias `size`, maximum `100`). Default: `20`. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Branches retrieved successfully.",
  "data": {
    "items": [
      {
        "id": "67b93a20d43a5c1234567890",
        "name": "Main Lagos Hub"
      },
      {
        "id": "67c14a20d43a5c1234567891",
        "name": "Abuja Distribution Center"
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
