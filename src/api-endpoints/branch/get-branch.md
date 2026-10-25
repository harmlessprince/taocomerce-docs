---
title: Get Branch
---

# Get Branch

Use this endpoint to retrieve details of a specific branch by its unique identifier.

## Endpoint
**GET** `/v1/branches/{id}`

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
  "message": "Branch retrieved successfully.",
  "data": {
    "id": "67b93a20d43a5c1234567890",
    "tenantId": "679f2dd75f703c799f673415",
    "name": "Main Lagos Hub",
    "code": "LAG-01",
    "address": "12 Marina Street, Lagos Island",
    "isDefault": true,
    "isOnlineBranch": true,
    "active": true,
    "createdAt": "2026-02-15T09:00:00Z",
    "updatedAt": "2026-03-01T12:00:00Z"
  }
}
```

### 404 Not Found
```json
{
  "status": false,
  "message": "Branch not found."
}
```
