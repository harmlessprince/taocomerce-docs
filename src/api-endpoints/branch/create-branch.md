---
title: Create Branch
---

# Create Branch

Use this endpoint to add a new physical location or warehouse to your store.

## Endpoint
**POST** `/v1/branches`

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

## Request body

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | string | Yes | Name of the branch. |
| `code` | string | No | Short unique alphanumeric code for the branch (e.g. `ABJ-02`). |
| `address` | string | No | Street address of the branch location. |
| `isDefault` | boolean | No | Set to `true` to make this the primary store branch. Default: `false`. |

```json
{
  "name": "Abuja Distribution Center",
  "code": "ABJ-02",
  "address": "Plot 45 Wuse Zone 2, Abuja",
  "isDefault": false
}
```

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Branch created successfully.",
  "data": {
    "id": "67c14a20d43a5c1234567891",
    "tenantId": "679f2dd75f703c799f673415",
    "name": "Abuja Distribution Center",
    "code": "ABJ-02",
    "address": "Plot 45 Wuse Zone 2, Abuja",
    "isDefault": false,
    "isOnlineBranch": false,
    "active": true,
    "createdAt": "2026-03-08T10:00:00Z",
    "updatedAt": "2026-03-08T10:00:00Z"
  }
}
```

### 422 Unprocessable Entity
```json
{
  "status": false,
  "message": "Validation failed",
  "errors": {
    "name": "Branch name is required."
  }
}
```
