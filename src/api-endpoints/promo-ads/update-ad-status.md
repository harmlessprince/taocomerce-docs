---
title: Update Promo Ad Status
---

# Update Promo Ad Status

Use this endpoint to publish or unpublish a promotional ad banner.

## Endpoint
**PATCH** `/v1/promo-ads/update/{id}/status/{status}`

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
| `id` | string | Yes | Unique identifier of the promo ad. |
| `status` | string | Yes | New status value: `PUBLISHED` or `DRAFT`. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Promo Ad status updated successfully",
  "data": {
    "id": "67abd011ea45dd1b9222e591",
    "adName": "Biggest Sale Ever",
    "status": "PUBLISHED",
    "updatedAt": "2026-03-08T15:30:00Z"
  }
}
```
