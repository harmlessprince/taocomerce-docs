---
title: Update Branch
---

# Update Branch

Use this endpoint to update details for an existing branch.

## Endpoint
**PATCH** `/v1/branches/{id}`

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

## Request body

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | string | No | Updated branch name. |
| `code` | string | No | Updated branch code. |
| `address` | string | No | Updated street address. |
| `isDefault` | boolean | No | Set whether this branch is the default store branch. |
| `active` | boolean | No | Activate or deactivate the branch. |

```json
{
  "name": "Main Lagos Hub - Relocated",
  "address": "45 Broad Street, Lagos Island",
  "active": true
}
```

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Branch updated successfully.",
  "data": {
    "id": "67b93a20d43a5c1234567890",
    "tenantId": "679f2dd75f703c799f673415",
    "name": "Main Lagos Hub - Relocated",
    "code": "LAG-01",
    "address": "45 Broad Street, Lagos Island",
    "isDefault": true,
    "isOnlineBranch": true,
    "active": true,
    "createdAt": "2026-02-15T09:00:00Z",
    "updatedAt": "2026-03-08T11:00:00Z"
  }
}
```
