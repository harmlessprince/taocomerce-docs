---
title: Promotion Unique Codes Management
---

# Promotion Unique Codes Management

Use these endpoints to bulk generate, list, disable, and export individual, single-use coupon codes under a promotional campaign.

## Common Authentication & Headers
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

---

## 1. List Promotion Codes

### Endpoint
**GET** `/v1/promotions/{promotionId}/codes`

### Query parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `page` | integer | No | Zero-based page number. Default: `0`. |
| `limit` | integer | No | Items per page (default `20`). |
| `status` | string | No | Filter by code status (`ACTIVE`, `REDEEMED`, `DISABLED`). |

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Promotion codes retrieved successfully",
  "data": {
    "items": [
      {
        "id": "67c1aa12d43a5c1234567801",
        "code": "VIP-9A8B7C",
        "status": "ACTIVE",
        "redemptionCount": 0,
        "createdAt": "2026-03-08T14:00:00Z"
      }
    ],
    "total": 1,
    "page": 0,
    "limit": 20
  }
}
```

---

## 2. Bulk Generate Promotion Codes

Generates unique single-use coupon codes under the promotion.

### Endpoint
**POST** `/v1/promotions/{promotionId}/codes/generate`

### Request body

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `count` | integer | Yes | Number of codes to generate (1 - 1000). |
| `prefix` | string | No | Optional code prefix string (e.g. `VIP`). |

```json
{
  "count": 100,
  "prefix": "VIP"
}
```

### Responses (200 OK)
```json
{
  "status": true,
  "message": "100 promotion codes generated successfully",
  "data": {
    "generatedCount": 100
  }
}
```

---

## 3. Disable a Promotion Code

Deactivates a specific promotion code so it can no longer be redeemed.

### Endpoint
**POST** `/v1/promotions/{promotionId}/codes/{codeId}/disable`

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Promotion code disabled successfully",
  "data": null
}
```

---

## 4. Export Promotion Codes as CSV

Downloads all generated coupon codes for the campaign in CSV format.

### Endpoint
**GET** `/v1/promotions/{promotionId}/codes/export`

### Response
Returns a CSV file attachment with columns: `Code,Status,RedemptionCount,CreatedAt`.
