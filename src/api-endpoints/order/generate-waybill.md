---
title: Generate Order Waybill
---

# Generate Order Waybill

Use this endpoint to generate or retry creating a shipping waybill for an order through the configured logistics provider.

## Endpoint
**POST** `/v1/orders/{orderId}/logistics/waybill`

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

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Waybill generated successfully",
  "data": {
    "id": "67d35a12d43a5c1234567899",
    "orderId": "67d3412df1f14227873214f4",
    "trackingNumber": "WB-LAG-2026-98124",
    "logisticsProvider": "GIGL",
    "status": "WAYBILL_GENERATED",
    "waybillUrl": "https://logistics.shopsynch.com/waybills/WB-LAG-2026-98124.pdf",
    "createdAt": "2026-03-08T13:00:00Z"
  }
}
```
