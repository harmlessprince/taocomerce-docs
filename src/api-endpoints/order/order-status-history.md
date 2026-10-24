---
title: Track Order History
---

# Track Order History

Use this public endpoint to retrieve the status timeline and tracking history for an order using its order number. This endpoint does not require merchant authorization or customer login.

## Endpoint
**GET** `/v1/order-status-history/{orderNumber}`

## Authentication
- No JWT authentication required.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

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
| `orderNumber` | string | Yes | Human-readable order number (e.g. `ORD-841EBF47`). |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Order tracking history retrieved successfully.",
  "data": [
    {
      "id": "67d34199f1f14227873214f9",
      "orderId": "67d3412df1f14227873214f4",
      "status": "PROCESSING",
      "comment": "Payment confirmed and order placed in fulfillment queue.",
      "createdAt": "2026-03-08T12:05:00Z"
    },
    {
      "id": "67d3412df1f14227873214f5",
      "orderId": "67d3412df1f14227873214f4",
      "status": "PENDING",
      "comment": "Order created.",
      "createdAt": "2026-03-08T12:00:00Z"
    }
  ]
}
```

### 404 Not Found
```json
{
  "status": false,
  "message": "We could not find an order with order number ORD-841EBF47. Please check the number and try again."
}
```
