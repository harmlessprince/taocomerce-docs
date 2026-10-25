---
title: Fetch Authenticated Customer Orders
---

# Fetch Authenticated Customer Orders

Use this endpoint to retrieve placed orders for the currently authenticated customer.

## Endpoint
**GET** `/v1/customer-orders`

## Authentication
- Requires customer authentication: `Authorization: Bearer JWT_TOKEN`.
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
| `page` | integer | No | Zero-based page number. Default: `0`. |
| `limit` | integer | No | Maximum records to return. Default: `100`. |
| `sortField` | string | No | Field to sort results by (`CREATED_AT`, `ORDER_DATE`). Default: `CREATED_AT`. |
| `sortDir` | string | No | Sort direction (`ASC` or `DESC`). Default: `DESC`. |
| `status` | string | No | Filter by order status (`PENDING`, `PROCESSING`, `UNFULFILLED`, `SHIPPED`, `DELIVERED`, `CANCELLED`). |
| `paymentStatus` | string | No | Filter by payment status (`PENDING`, `SUCCESS`, `FAILED`). |
| `fulfillmentStatus` | string | No | Filter by fulfillment status (`UNFULFILLED`, `FULFILLED`). |
| `orderNumber` | string | No | Filter by specific order number (e.g. `ORD-841EBF47`). |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Orders retrieved successfully",
  "data": {
    "total": 2,
    "totalPages": 1,
    "currentPage": 0,
    "orders": [
      {
        "id": "67d3412df1f14227873214f4",
        "orderNumber": "ORD-841EBF47",
        "orderDate": "2026-03-13T20:33:49.123Z",
        "totalPrice": "14500.00",
        "country": "Nigeria",
        "state": "Lagos",
        "city": "Ikeja",
        "status": "PENDING",
        "paymentStatus": "PENDING",
        "fulfillmentStatus": "UNFULFILLED",
        "createdAt": "2026-03-13T20:33:49.124Z"
      }
    ]
  }
}
```

## Next steps
- [Fetch Customer Order Items](./fetch-customer-order-items.md)
- [Track Order History](./order-status-history.md)
