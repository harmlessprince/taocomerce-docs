---
title: Delete Delivery Zone
---

# Delete Delivery Zone

Use this endpoint to permanently delete an existing delivery zone by its ID.

## Endpoint
**DELETE** `/v1/delivery-zones/{id}`

| Path parameter | Type | Description |
|---|---|---|
| `id` | string | Unique identifier of the delivery zone to delete. |

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

## Example request
```javascript
fetch('https://api.shopsynch.com/v1/delivery-zones/67a6261a320f3f7368dfec99', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantApiKey': 'MERCHANT_API_KEY'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Response 200
```json
{
  "status": true,
  "message": "Delivery zone deleted successfully",
  "data": null
}
```

## Error responses
| Status | Message |
|---|---|
| `404` | Delivery zone not found |
| `401` | Unauthorized |
