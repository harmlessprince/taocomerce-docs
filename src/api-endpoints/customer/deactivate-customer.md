---
title: Deactivate Customer
---

# Deactivate Customer

Use this endpoint to deactivate a customer account. A deactivated customer cannot log in or place new orders.

## Endpoint
**PATCH** `/v1/customers/{customerId}/deactivate`

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
  "message": "Customer deactivated successfully",
  "data": null
}
```
