---
title: Match Delivery Zone
---

# Match Delivery Zone

Use this endpoint to calculate and match the cheapest active delivery zone covering a customer's destination address.

## Endpoints
- Merchant endpoint: **POST** `/v1/delivery-zones/match` (requires `Authorization` header)
- Storefront endpoint: **POST** `/v1/storefront/delivery-zones/match` (public, requires `X-MerchantApiKey`)

## Request body

| Parameter | Type | Required | Description |
|---|---|---|---|
| `state` | string | Yes | Customer destination state (e.g. "Lagos"). |
| `country` | string | No | Customer destination country. Defaults to `"Nigeria"`. |
| `area` | string | No | Customer specific area or neighborhood (e.g. "Ikeja"). |

## Example request
```javascript
fetch('https://api.shopsynch.com/v1/delivery-zones/match', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantApiKey': 'MERCHANT_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    country: "Nigeria",
    state: "Lagos",
    area: "Ikeja"
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Response 200
When a matching zone is found:
```json
{
  "status": true,
  "message": "Delivery zone matched successfully",
  "data": {
    "id": "67a6261a320f3f7368dfec99",
    "name": "Lagos Mainland",
    "fee": 1500.0,
    "estimatedDeliveryTime": "1-2 business days"
  }
}
```

When no zone covers the given address, `data` is `null`:
```json
{
  "status": true,
  "message": "No delivery zone covers this address",
  "data": null
}
```
