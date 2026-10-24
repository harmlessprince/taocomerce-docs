---
title: Delete Address
---

# Delete Address

Use this endpoint to delete an existing saved customer address.

## Endpoint
**DELETE** `/v1/addresses/{addressId}`

| Path parameter | Type | Description |
|---|---|---|
| `addressId` | string | Unique identifier of the address. |

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

## Response 200
```json
{
  "status": true,
  "message": "Address deleted successfully",
  "data": null
}
```
