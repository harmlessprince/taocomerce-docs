---
title: Pause or Resume Delivery Zone
---

# Pause or Resume Delivery Zone

Use this endpoint to quickly activate or pause an existing delivery zone without resubmitting state and area lists.

## Endpoint
**PATCH** `/v1/delivery-zones/{id}/status`

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
| Parameter | Type | Required | Description |
|---|---|---|---|
| `active` | boolean | Yes | `true` to resume the zone, `false` to pause it. |

## Example request
```javascript
fetch('https://api.shopsynch.com/v1/delivery-zones/67a6261a320f3f7368dfec99/status', {
  method: 'PATCH',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantApiKey': 'MERCHANT_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ active: false })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Response 200
```json
{
  "status": true,
  "message": "Delivery zone paused successfully",
  "data": {
    "id": "67a6261a320f3f7368dfec99",
    "name": "Lagos Mainland",
    "active": false
  }
}
```
