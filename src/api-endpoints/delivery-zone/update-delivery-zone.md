---
title: Update Delivery Zone
---

# Update Delivery Zone

Use this endpoint to update an existing delivery zone's configuration, including its name, fee, estimated delivery time, and covered states/areas.

## Endpoint
**PUT** `/v1/delivery-zones/{id}`

| Path parameter | Type | Description |
|---|---|---|
| `id` | string | Unique identifier of the delivery zone. |

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Request body
Same as [Create Delivery Zone](./create-delivery-zone.md#request-body).

## Response 200
```json
{
  "status": true,
  "message": "Delivery zone updated successfully",
  "data": {
    "id": "67a6261a320f3f7368dfec99",
    "name": "Lagos Mainland Express",
    "country": "Nigeria",
    "fee": 2000.0,
    "estimatedDeliveryTime": "Same day delivery",
    "active": true,
    "stateAreas": [
      {
        "state": "Lagos",
        "areas": ["Ikeja", "Surulere", "Yaba", "Maryland"]
      }
    ],
    "overlappingZones": []
  }
}
```

## Error responses
| Status | Message |
|---|---|
| `404` | Delivery zone not found |
| `401` | Unauthorized |
