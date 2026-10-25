---
title: Delete Tenant Category
---

# Delete Tenant Category

Use this endpoint to delete a category from your store's category list. Any products associated with this category will be dissociated.

## Endpoint
**DELETE** `/v1/tenant-categories/{categoryId}`

## Authentication
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN", 
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

## Path parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `categoryId` | string | Yes | Unique identifier of the tenant category to delete. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Category deleted successfully.",
  "data": null
}
```
