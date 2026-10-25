---
title: Cancel Order Line Item
---

# Cancel Order Line Item

Use this endpoint to cancel an individual item in an order.

## Endpoint
**PATCH** `/v1/orders/{orderId}/items/{lineId}/cancel`

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

## Path parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `orderId` | string | Yes | Unique identifier of the order. |
| `lineId` | string | Yes | Unique identifier of the order line item. |

## Request body

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `reason` | string | No | Reason for cancelling the line item. |

```json
{
  "reason": "Customer requested cancellation of this item prior to dispatch."
}
```

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Order line cancelled successfully",
  "data": {
    "id": "67d3412df1f14227873214f7",
    "productId": "679f8f5a3b5f2173201c2582",
    "productName": "Wireless Bluetooth Earbuds",
    "quantity": 1,
    "unitPrice": 12500.00,
    "totalPrice": 12500.00,
    "status": "CANCELLED"
  }
}
```
