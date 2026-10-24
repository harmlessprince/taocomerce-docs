---
title: Activate Customer
---

# Activate Customer

Use this endpoint to reactivate a customer account that was previously deactivated.

## Endpoint
**PATCH** `/v1/customers/{customerId}/activate`

| Path parameter | Type | Description |
|---|---|---|
| `customerId` | string | Unique identifier of the customer account. |

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
  "message": "Customer activated successfully",
  "data": null
}
```
