---
title: Fetch Delivery Zones
---

# Fetch Delivery Zones

Use this endpoint to retrieve all delivery zones created by the merchant.

> [!NOTE]
> For shopper checkout on storefronts, you can also use [Match Delivery Zone](./match-delivery-zone.md) or the public storefront delivery zone endpoint `GET /v1/storefront/delivery-zones`.

## Endpoint
**GET** `/v1/delivery-zones`

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

## Example request
```javascript
fetch('https://api.shopsynch.com/v1/delivery-zones', {
  method: 'GET',
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
  "message": "Delivery zones retrieved successfully",
  "data": [
    {
      "id": "67a6261a320f3f7368dfec99",
      "name": "Lagos Mainland",
      "country": "Nigeria",
      "fee": 1500.0,
      "estimatedDeliveryTime": "1-2 business days",
      "active": true,
      "stateAreas": [
        {
          "state": "Lagos",
          "areas": ["Ikeja", "Surulere", "Yaba"]
        }
      ]
    }
  ]
}
```
