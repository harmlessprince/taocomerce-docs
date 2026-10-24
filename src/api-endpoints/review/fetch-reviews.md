---
title: Fetch All Product Reviews
---

# Fetch All Product Reviews

Use this endpoint to retrieve all reviews submitted across products for the merchant store.

## Endpoint
**GET** `/v1/reviews`

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

## Query parameters
| Parameter | Type | Description |
|---|---|---|
| `status` | string | Review status filter (`active`, `hidden`, etc.). |
| `productId` | string | Filter reviews by product ID. |
| `rating` | integer | Filter reviews by star rating (1-5). |

## Response 200
```json
{
  "status": true,
  "message": "Store reviews loaded successfully.",
  "data": [
    {
      "id": "67a6261a320f3f7368dfec01",
      "productId": "679f8f5a3b5f2173201c2582",
      "rating": 5,
      "comment": "Excellent build quality and sharp display.",
      "customerName": "John Doe",
      "createdAt": "2026-02-10T12:00:00Z"
    }
  ]
}
```
