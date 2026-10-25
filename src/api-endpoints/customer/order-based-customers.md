---
title: Get Order-Based Customers
---

# Get Order-Based Customers

Use this endpoint to retrieve customers derived from placed orders (both registered accounts and guest checkouts). This provides total order count, total amount spent, and last order dates.

## Endpoint
**GET** `/v1/customers/order-based`

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
| `limit` | integer | No | Records per page (maximum: `20`). Default: `10`. |
| `email` | string | No | Partial email match filter. |
| `name` | string | No | Partial name match filter. |
| `phoneNumber` | string | No | Partial phone number match filter. |
| `orderDateFrom` | string | No | ISO-8601 start date for order range. |
| `orderDateTo` | string | No | ISO-8601 end date for order range. |
| `minTotalSpent` | number | No | Minimum total amount spent filter. |
| `maxTotalSpent` | number | No | Maximum total amount spent filter. |
| `minTotalOrders`| integer | No | Minimum total order count. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Order-based customers retrieved successfully",
  "data": {
    "items": [
      {
        "id": "67dfb8408bd13b35a66f42ed",
        "email": "customer@example.com",
        "fullName": "Jane Doe",
        "phoneNumber": "+2348012345678",
        "totalOrders": 5,
        "totalSpent": 75000.00,
        "firstOrderDate": "2026-01-15T10:00:00Z",
        "lastOrderDate": "2026-03-08T12:00:00Z",
        "isRegistered": true
      }
    ],
    "nextCursor": "MjAyNi0wMy0wOFQxMjowMDowMFo=",
    "hasMore": false
  }
}
```
