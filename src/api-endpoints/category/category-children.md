---
title: Get Category Children
---

# Get Category Children

Use this endpoint to retrieve sub-categories (child categories) for a specific parent system category.

## Endpoint
**GET** `/v1/categories/{categoryId}/children`

## Authentication
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.
- No user bearer token required.

## Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Path parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `categoryId` | string | Yes | Unique identifier of the parent category. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Category children retrieved successfully",
  "data": [
    {
      "id": "67a12b34d43a5c1234567891",
      "name": "Wireless Earbuds",
      "slug": "wireless-earbuds",
      "parentId": "67a12b34d43a5c1234567890"
    },
    {
      "id": "67a12b34d43a5c1234567892",
      "name": "Over-Ear Headphones",
      "slug": "over-ear-headphones",
      "parentId": "67a12b34d43a5c1234567890"
    }
  ]
}
```
