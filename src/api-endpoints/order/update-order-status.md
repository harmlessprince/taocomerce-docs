---
title: Update Order Status
---

# Update Order Status

Use this endpoint to update the status of an existing order (e.g. from PENDING to PROCESSING, COMPLETED, or CANCELLED).

## Endpoint
**PATCH** `/v1/orders/{orderId}/status`

| Path parameter | Type | Description |
|---|---|---|
| `orderId` | string | Unique identifier of the order. |

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Request body
| Parameter | Type | Required | Description |
|---|---|---|---|
| `status` | string | Yes | Target order status: `PENDING`, `PROCESSING`, `COMPLETED`, `CANCELLED`, `REFUNDED`. |

## Response 200
```json
{
  "status": true,
  "message": "Order status updated successfully",
  "data": {
    "id": "67a6261a320f3f7368dfec35",
    "orderNumber": "ORD123456",
    "status": "PROCESSING"
  }
}
```
