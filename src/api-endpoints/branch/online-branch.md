---
title: Set Online Branch
---

# Set Online Branch

Use this endpoint to designate a specific branch as the store's primary fulfillment location for online storefront orders.

## Endpoint
**PATCH** `/v1/branches/{id}/online-branch`

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
| `id` | string | Yes | Unique identifier of the branch. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Online branch updated successfully.",
  "data": {
    "id": "67b93a20d43a5c1234567890",
    "tenantId": "679f2dd75f703c799f673415",
    "name": "Main Lagos Hub",
    "code": "LAG-01",
    "address": "45 Broad Street, Lagos Island",
    "isDefault": true,
    "isOnlineBranch": true,
    "active": true,
    "createdAt": "2026-02-15T09:00:00Z",
    "updatedAt": "2026-03-08T11:30:00Z"
  }
}
```
