---
title: Create Merchant Order
---

# Create Merchant Order

Use this endpoint to create an order programmatically on behalf of a customer. You can specify whether to generate an online payment link or mark the order for offline payment collection.

## Endpoint
**POST** `/v1/orders`

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
| `firstName` | string | Yes | Customer's first name. |
| `lastName` | string | Yes | Customer's last name. |
| `email` | string | Yes | Customer's email address. |
| `phoneNumber` | string | Yes | Customer's telephone number. |
| `shippingAddress` | string | Yes | Delivery street address. |
| `city` | string | Yes | Destination city. |
| `state` | string | Yes | Destination state. |
| `country` | string | No | Destination country. |
| `shippingFee` | number | No | Delivery fee amount. Default: `0`. |
| `shippingMethod` | string | No | Selected delivery method (e.g. `Standard Delivery`). |
| `promoCode` | string | No | Optional discount or promotion code. |
| `paymentAction` | string | Yes | Payment mode: `GENERATE_PAYMENT_LINK` or `COLLECT_OFFLINE`. |
| `paymentGateway` | string | No | Payment gateway (`PAYSTACK`, `STRIPE`, `OFFLINE`). Default: `PAYSTACK`. |
| `callbackUrl` | string | No | Redirect URL after customer completes payment. |
| `items` | array | Yes | List of ordered products. |
| `items[].productId` | string | Yes | Unique identifier of the product. |
| `items[].variantGroupId`| string | No | Variant group ID for V2 products. |
| `items[].skuId` | string | No | SKU ID for variable product items. |
| `items[].quantity` | integer | Yes | Quantity to order (minimum `1`). |

```json
{
  "firstName": "Ade",
  "lastName": "Johnson",
  "email": "ade.johnson@example.com",
  "phoneNumber": "+2348023456789",
  "shippingAddress": "15 Admiralty Way, Lekki Phase 1",
  "city": "Lekki",
  "state": "Lagos",
  "country": "Nigeria",
  "shippingFee": 2000.00,
  "shippingMethod": "Express Courier",
  "paymentAction": "GENERATE_PAYMENT_LINK",
  "paymentGateway": "PAYSTACK",
  "callbackUrl": "https://mystore.com/orders/success",
  "items": [
    {
      "productId": "679f8f5a3b5f2173201c2582",
      "skuId": "679f8f5a3b5f2173201c2583",
      "quantity": 1
    }
  ]
}
```

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Order created successfully",
  "data": {
    "order": {
      "id": "67d3412df1f14227873214f4",
      "orderNumber": "ORD-841EBF47",
      "orderDate": "2026-03-08T12:00:00Z",
      "totalPrice": "14500.00",
      "status": "PENDING",
      "paymentStatus": "PENDING",
      "fulfillmentStatus": "UNFULFILLED"
    },
    "paymentLink": {
      "url": "https://paystack.com/pay/abc-123",
      "reference": "ref_841EBF47_1741432000",
      "expiresAt": "2026-03-09T12:00:00Z"
    }
  }
}
```
