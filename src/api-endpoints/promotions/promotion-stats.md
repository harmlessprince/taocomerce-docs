---
title: Promotion Statistics and Summary
---

# Promotion Statistics and Summary

Use these endpoints to retrieve aggregated campaign performance KPIs, redemption history, and store-wide promotion summaries.

## Common Authentication & Headers
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

---

## 1. Storewide Promotion Summary KPIs

Retrieves high-level counts and totals across all promotions in your store.

### Endpoint
**GET** `/v1/promotions/summary`

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Promotion summary loaded successfully",
  "data": {
    "activePromotionsCount": 4,
    "pausedPromotionsCount": 1,
    "totalRedemptions": 128,
    "totalDiscountGiven": 450000.00
  }
}
```

---

## 2. Campaign Specific Statistics

Returns performance metrics for a specific promotion campaign.

### Endpoint
**GET** `/v1/promotions/{promotionId}/stats`

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Promotion stats retrieved successfully",
  "data": {
    "totalRedemptions": 45,
    "totalRevenueGenerated": 950000.00,
    "totalDiscountAmount": 95000.00,
    "remainingBudget": 405000.00
  }
}
```

---

## 3. Campaign Redemptions List

Retrieves individual order redemptions under a promotion.

### Endpoint
**GET** `/v1/promotions/{promotionId}/redemptions`

### Query parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `page` | integer | No | Zero-based page number. Default: `0`. |
| `limit` | integer | No | Items per page (default `20`). |

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Promotion redemptions retrieved successfully",
  "data": {
    "items": [
      {
        "id": "67c1bb12d43a5c1234567810",
        "orderId": "67d3412df1f14227873214f4",
        "orderNumber": "ORD-841EBF47",
        "customerEmail": "customer@example.com",
        "discountApplied": 2500.00,
        "redeemedAt": "2026-03-08T12:00:00Z"
      }
    ],
    "total": 1,
    "page": 0,
    "limit": 20
  }
}
```
