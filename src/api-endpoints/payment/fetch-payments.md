---
title: Get All Payments
---

# Get All Payments

Use this endpoint to retrieve a cursor-paginated list of payment transactions recorded for your store.

## Endpoint
**GET** `/v1/payments`

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

## Query parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `cursor` | string | No | Cursor token for pagination navigation. |
| `limit` | integer | No | Maximum number of records per page (maximum: `50`). Default: `10`. |
| `sortDirectionParam` | string | No | Sort direction (`ASC` or `DESC`). Default: `DESC`. |
| `paymentStatus` | string | No | Filter by payment status (`PENDING`, `SUCCESS`, `FAILED`). |
| `paymentGateway` | string | No | Filter by payment gateway (`PAYSTACK`, `STRIPE`, `OFFLINE`). |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Payments retrieved successfully.",
  "data": {
    "items": [
      {
        "id": "67c18b20d43a5c1122334455",
        "orderId": "67d3412df1f14227873214f4",
        "orderNumber": "ORD-841EBF47",
        "amount": 5000.00,
        "currency": "NGN",
        "status": "SUCCESS",
        "paymentGateway": "PAYSTACK",
        "reference": "ref_841EBF47_1741432000",
        "createdAt": "2026-03-08T10:30:00Z"
      }
    ],
    "nextCursor": "MjAyNi0wMy0wOFQxMDozMDowMFo=",
    "hasMore": false
  }
}
```
