---
title: Get Payment by ID
---

# Get Payment by ID

Use this endpoint to retrieve full transaction details for a specific payment ID.

## Endpoint
**GET** `/v1/payments/{paymentId}`

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
| `paymentId` | string | Yes | Unique identifier of the payment record. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Payment retrieved successfully.",
  "data": {
    "id": "67c18b20d43a5c1122334455",
    "orderId": "67d3412df1f14227873214f4",
    "orderNumber": "ORD-841EBF47",
    "amount": 5000.00,
    "currency": "NGN",
    "status": "SUCCESS",
    "paymentGateway": "PAYSTACK",
    "reference": "ref_841EBF47_1741432000",
    "channel": "card",
    "paidAt": "2026-03-08T10:32:15Z",
    "createdAt": "2026-03-08T10:30:00Z"
  }
}
```

### 404 Not Found
```json
{
  "status": false,
  "message": "Payment not found."
}
```
