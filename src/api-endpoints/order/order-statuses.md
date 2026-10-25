---
title: Get All Order Statuses
---

# Get All Order Statuses

Use this endpoint to retrieve all possible order statuses supported by the platform.

## Endpoint
**GET** `/v1/orders/statuses`

## Authentication
- No authentication required.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

## Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Order statuses retrieved successfully",
  "data": [
    "PENDING",
    "PROCESSING",
    "UNFULFILLED",
    "SHIPPED",
    "DELIVERED",
    "CANCELLED",
    "FAILED",
    "REFUNDED"
  ]
}
```
