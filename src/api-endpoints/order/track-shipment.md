---
title: Track Order Shipment
---

# Track Order Shipment

Use this endpoint to retrieve real-time shipment tracking information from the selected logistics provider for an order.

## Endpoint
**GET** `/v1/orders/{orderId}/logistics/tracking`

## Authentication
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
| `orderId` | string | Yes | Unique identifier of the order. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Tracking retrieved successfully",
  "data": {
    "orderId": "67d3412df1f14227873214f4",
    "trackingNumber": "WB-LAG-2026-98124",
    "provider": "GIGL",
    "currentStatus": "IN_TRANSIT",
    "estimatedDelivery": "2026-03-10T18:00:00Z",
    "checkpoints": [
      {
        "status": "DISPATCHED",
        "location": "Lagos Central Hub",
        "timestamp": "2026-03-08T14:30:00Z",
        "description": "Package picked up by dispatch rider."
      },
      {
        "status": "IN_TRANSIT",
        "location": "Ikeja Sorting Facility",
        "timestamp": "2026-03-08T17:00:00Z",
        "description": "Arrived at destination sorting center."
      }
    ]
  }
}
```
