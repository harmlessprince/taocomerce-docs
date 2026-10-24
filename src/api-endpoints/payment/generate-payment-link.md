---
title: Generate Payment Link
---

# Generate Payment Link

Use this endpoint to generate a hosted Paystack payment link with automatic split settlement. This endpoint is used by custom integrations and headless checkouts to collect payments for an order.

## Endpoint
**POST** `/v1/payment-links`

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
| `total` | number | Yes | Total payment amount in kobo (e.g. `500000` for ₦5,000.00). |
| `email` | string | Yes | Customer's email address. |
| `fullName` | string | Yes | Customer's full name. |
| `phoneNumber` | string | Yes | Customer's phone number. |
| `orderId` | string | No | Associated order ID if generated for an existing order. |
| `deliveryFee` | number | No | Delivery fee included in total amount (in kobo). |
| `streetAddress` | string | No | Customer delivery address. |
| `city` | string | No | Delivery city. |
| `state` | string | No | Delivery state. |
| `area` | string | No | Delivery area within the city. |
| `paymentGateway` | string | No | Gateway to use (`PAYSTACK`). Default: `PAYSTACK`. |
| `channel` | string | No | Source channel for the payment link (`API`). Default: `API`. |
| `callbackUrl` | string | No | Optional URL where the customer is redirected after payment. |
| `description` | string | No | Optional description for the payment. |
| `metadata` | object | No | Custom key-value pairs forwarded to the payment gateway. |

```json
{
  "orderId": "67d3412df1f14227873214f4",
  "total": 500000,
  "deliveryFee": 150000,
  "email": "customer@example.com",
  "fullName": "Jane Doe",
  "phoneNumber": "+2348012345678",
  "streetAddress": "12 Awolowo Way",
  "city": "Ikeja",
  "state": "Lagos",
  "paymentGateway": "PAYSTACK",
  "channel": "API",
  "description": "Payment for Order ORD-841EBF47"
}
```

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Payment link generated successfully",
  "data": {
    "paymentLinkId": "67c17a80d43a5c2233445566",
    "tenantId": "679f2dd75f703c799f673415",
    "orderId": "67d3412df1f14227873214f4",
    "url": "https://paystack.com/pay/abc-123",
    "gatewayCheckoutUrl": "https://checkout.paystack.com/xyz987",
    "paymentRedirectUrl": "https://checkout.paystack.com/xyz987",
    "reference": "ref_841EBF47_1741432000",
    "paymentGateway": "PAYSTACK",
    "paymentMethod": "card",
    "channel": "API",
    "accessCode": "0pe2944vdz",
    "expiresAt": "2026-03-09T10:00:00"
  }
}
```

### 400 Bad Request
```json
{
  "status": false,
  "message": "We could not find your store details or your session timed out. Please sign in again."
}
```
