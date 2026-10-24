---
title: Generate Cart Session ID
---

# Generate Cart Session ID

Use this endpoint to get a session ID for a guest customer. The guest sends this ID in the `X-Session-Id` header of each cart request.

A session ID is valid for 7 days. Each time the guest uses the session, the API extends the expiry date.

## Endpoint
**GET** `/v1/generate/session/id`

## Headers
This endpoint does not need authentication. Send the `X-MerchantApiKey` header.

## Example request
```javascript
fetch('https://api.shopsynch.com/v1/generate/session/id', {
  method: 'GET',
  headers: { 'X-MerchantApiKey': 'MERCHANT_API_KEY' }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Response 200
```json
{
  "data": {
    "sessionId": "6cb7ce1f-9360-4e63-a91d-422b89fe2341",
    "expiresAt": "2025-02-10T10:01:30.129971"
  },
  "message": "Success",
  "status": true
}
```

## Next steps
- [Add Item to Cart](./v2/add-item-to-cart.md)
- [Cart V2 endpoints](./v2/index.md)
