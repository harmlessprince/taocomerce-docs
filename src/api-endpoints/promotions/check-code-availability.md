---
title: Check Promotion Code Availability
---

# Check Promotion Code Availability

Use these endpoints to check whether a promotion code (or list of candidate codes) is available for use within your store or if it conflicts with an existing active campaign.

---

## 1. Check Single Code Availability

### Endpoint
**GET** `/v1/promotions/check-code-availability`

### Authentication
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

### Query parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `code` | string | Yes | The promo code string to check. |
| `excludePromotionId` | string | No | Optional promotion ID to ignore (self-conflict check when editing). |

### Responses

#### 200 OK
```json
{
  "status": true,
  "message": "Code availability checked successfully",
  "data": {
    "code": "SUMMER50",
    "available": true,
    "clashingPromotionName": null
  }
}
```

---

## 2. Check Multiple Codes Availability

Checks up to 20 candidate promo codes in a single request.

### Endpoint
**POST** `/v1/promotions/check-codes-availability`

### Request body
```json
{
  "codes": ["FLASH10", "WELCOME20", "VIP100"],
  "excludePromotionId": null
}
```

### Responses

#### 200 OK
```json
{
  "status": true,
  "message": "Code availability checked successfully",
  "data": [
    {
      "code": "FLASH10",
      "available": true,
      "clashingPromotionName": null
    },
    {
      "code": "WELCOME20",
      "available": false,
      "clashingPromotionName": "New Customer Welcome Discount"
    },
    {
      "code": "VIP100",
      "available": true,
      "clashingPromotionName": null
    }
  ]
}
```
