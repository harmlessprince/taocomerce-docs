---
title: Preview Cart Promotions
---

# Preview Cart Promotions

Use this endpoint to price a shopping cart against an entered discount code along with any active automatic promotions. Storefronts can use this to show applied discounts and recalculate line totals before final checkout.

## Endpoint
**POST** `/v1/promotions/preview`

## Authentication
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.
- No user bearer token required.

## Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Request body

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `promoCode` | string | No | Optional promo code entered by customer. |
| `items` | array | Yes | List of cart items to price. |
| `items[].productId` | string | Yes | Unique product identifier. |
| `items[].quantity` | integer | Yes | Quantity of item. |
| `items[].unitPrice` | number | Yes | Base unit price of item. |
| `items[].skuId` | string | No | SKU ID for variable products. |

```json
{
  "promoCode": "EASTER20",
  "items": [
    {
      "productId": "679f8f5a3b5f2173201c2582",
      "skuId": "679f8f5a3b5f2173201c2583",
      "quantity": 2,
      "unitPrice": 12500.00
    }
  ]
}
```

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Promotions previewed successfully",
  "data": {
    "subtotal": 25000.00,
    "discountTotal": 5000.00,
    "finalTotal": 20000.00,
    "appliedPromotions": [
      {
        "promotionId": "67a12b34d43a5c1234567890",
        "name": "Easter 20% Off",
        "code": "EASTER20",
        "discountAmount": 5000.00,
        "discountType": "PERCENTAGE"
      }
    ]
  }
}
```
