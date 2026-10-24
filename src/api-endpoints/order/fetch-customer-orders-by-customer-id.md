---
title: Fetch Customer Orders By Customer ID
---

# Fetch Customer Orders By Customer ID

Use this endpoint to retrieve placed orders for a specific customer. Merchant authentication is required.

## Endpoint
**GET** `/v1/customer-orders/{customerId}`

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
| `customerId` | string | Yes | Unique identifier of the customer. |

## Query parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `page` | integer | No | Zero-based page number. Default: `0`. |
| `limit` | integer | No | Maximum records to return. Default: `100`. |
| `sortFieldParam` | string | No | Field to sort results by (`NAME`, `ORDER_DATE`). Default: `ORDER_DATE`. |
| `sortDirectionParam` | string | No | Sort direction (`ASC` or `DESC`). Default: `DESC`. |
| `status` | string | No | Filter by order status (`PENDING`, `PROCESSING`, `UNFULFILLED`, `SHIPPED`, `DELIVERED`, `CANCELLED`). |
| `paymentStatus` | string | No | Filter by payment status (`PENDING`, `SUCCESS`, `FAILED`). |
| `fulfillmentStatus` | string | No | Filter by fulfillment status (`UNFULFILLED`, `FULFILLED`). |
| `search` | string | No | Search query for order items or customer details. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Orders retrieved",
  "data": {
    "total": 1,
    "totalPages": 1,
    "currentPage": 0,
    "orders": [
      {
        "id": "67e3b31f3189ad192b747f09",
        "orderNumber": "ORD-C4752845",
        "orderDate": "2026-03-26T08:56:15.656Z",
        "totalPrice": "25598.41",
        "country": "Nigeria",
        "state": "Lagos",
        "city": "Ikeja",
        "status": "PENDING",
        "paymentStatus": "PENDING",
        "fulfillmentStatus": "UNFULFILLED",
        "createdAt": "2026-03-26T08:56:15.676Z"
      }
    ]
  }
}
```

## Next steps
- [Fetch Customer Order Items](./fetch-customer-order-items.md)
- [Fetch Order Detail](./fetch-order-detail.md)
