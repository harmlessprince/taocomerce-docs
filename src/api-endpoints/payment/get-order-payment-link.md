---
title: Get Latest Order Payment Link
---

# Get Latest Order Payment Link

Use this endpoint to retrieve the most recent payment link generated for an order. Merchants can use this link to copy, reshare, or resend payment instructions to customers.

## Endpoint
**GET** `/v1/payment-links/orders/{orderId}/latest`

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

## Path parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `orderId` | string | Yes | Unique identifier of the order. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Payment link retrieved successfully",
  "data": {
    "paymentLinkId": "67c17a80d43a5c2233445566",
    "tenantId": "679f2dd75f703c799f673415",
    "orderId": "67d3412df1f14227873214f4",
    "url": "https://paystack.com/pay/abc-123",
    "gatewayCheckoutUrl": "https://checkout.paystack.com/xyz987",
    "reference": "ref_841EBF47_1741432000",
    "paymentGateway": "PAYSTACK",
    "paymentMethod": "card",
    "channel": "API",
    "expiresAt": "2026-03-09T10:00:00"
  }
}
```

### 404 Not Found
```json
{
  "status": false,
  "message": "No payment link found for this order"
}
```
