---
title: Update Tenant Category
---

# Update Tenant Category

Use this endpoint to rename a custom category in your store. Note that system-backed categories cannot be renamed.

## Endpoint
**PUT** `/v1/tenant-categories/{categoryId}`

## Authentication
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN", 
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Path parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `categoryId` | string | Yes | Unique identifier of the tenant category. |

## Request body

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | string | Yes | New name for the custom category (1 - 50 characters). |

```json
{
  "name": "Audio Accessories & Earphones"
}
```

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Category updated successfully.",
  "data": {
    "id": "67a12b34d43a5c1234567890",
    "name": "Audio Accessories & Earphones",
    "slug": "audio-accessories-earphones"
  }
}
```

### 400 Bad Request
```json
{
  "status": false,
  "message": "System-backed categories cannot be renamed."
}
```
