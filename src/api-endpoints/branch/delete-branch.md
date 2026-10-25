---
title: Delete Branch
---

# Delete Branch

Use this endpoint to permanently remove a branch. Deletion fails if the branch is currently designated as the default branch or online fulfillment branch.

## Endpoint
**DELETE** `/v1/branches/{id}`

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
| `id` | string | Yes | Unique identifier of the branch to delete. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Branch deleted successfully.",
  "data": null
}
```

### 400 Bad Request
```json
{
  "status": false,
  "message": "Cannot delete default branch or branch with active order fulfillment."
}
```
