---
title: Apply Promo Code
---
# Apply Promo Code

##  Description
Applies a promo code to calculate discounted price.

##  Endpoint
- **URL:** `/v1/promotions/apply/promo-code`
- **Method:** `POST`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
| Field Name | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `promoCode` | string | No | The promo code to be applied | |
| `amount` | double | No | The original amount before discount | 0.0 |

##  Example API Call (Using Fetch)
```javascript
fetch("https://api.shopsynch.com/v1/promotions/apply/promo-code", {
  method: "POST",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantApiKey": "MERCHANT_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "promoCode": "",
    "amount": 0.0
  })
})
```

**Response-fields:**

| Field | Type | Description | Since | Example |
|-------|------|-------------|-------|---------|
| `status` | boolean | No comments found. | - | true |
| `message` | string | No comments found. | - | |
| `data` | double | No comments found. | - | |

**Response-example:**
```json
{
  "status": true,
  "message": "",
  "data": 0.0
}
```
