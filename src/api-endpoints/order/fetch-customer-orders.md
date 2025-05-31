---
title: Fetch Authenticated Customer Orders
---

##  Description
This API retrieves a list of placed orders by currently authenticated customer and based on various filter parameters.

##  Endpoint
- **URL:** `/v1/orders/customer-orders`
- **Method:** `GET`

## Query Parameters

| Parameter            | Type   | Description |
|----------------------|--------|-------------|
| `sortDirectionParam` | String | Sorting direction (`ASC` or `DESC`). Default: `ASC`. |
| `sortFieldParam`     | String | Field to sort results by e.g., (`NAME`, `ORDER_DATE`, `CATEGORY`). Default: `ORDER_DATE`. |
| `shippingMethod`              | String | Filter orders by shipping method. |
| `paymentMethod`          | String | Filter orders by payment method. |
| `country`           | String | Filter orders by country (e.g., `16GB`). |
| `city`           | String | Filter orders by city |
| `state`             | String | Filter orders by state. |
| `status`           | String | Filter orders by storage order status e.g (`PENDING`, `PROCESSING`, `UNFULFILLED`, `SHIPPED`, `DELIVERED`, `CANCELLED`). |
| `paymentStatus`             | String | Filter orders by payment status. e.g ( `SUCCESS`, `FAILED`, `PENDING`, `REFUNDED`, `ABANDONED`, `PROCESSING`) |
| `fulfillmentStatus`             | String | Filter orders by fulfillment status. e.g (`UNFULFILLED`, `FULFILLED`) |
| `orderNumber`            | String | Filter orders by order number e.g (`ORD-82UEJF983`) |



##  Required Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json",
  "Authorization": "Bearer JWT_TOKEN",
}
```

##  Example API Call (Using Fetch)
```javascript
fetch("https://api.shopsynch.com/v1/customer-orders?sortDirectionParam=ASC", {
  method: "GET",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantApiKey": "MERCHANT_API_KEY",
    "Content-Type": "application/json"
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

## ✅ Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "All Orders retrieved",
    "data": {
        "total": 2,
        "totalPages": 1,
        "orders": [
            {
                "id": "67d3412df1f14227873214f4",
                "orderNumber": "ORD-841EBF47",
                "orderDate": "2025-03-13T20:33:49.123",
                "shippingAddress": "",
                "billingAddress": null,
                "shippingMethod": "Bus",
                "paymentMethod": null,
                "totalPrice": "143456940.00",
                "waybillPrice": null,
                "country": "Nigeria",
                "state": "Lagos",
                "city": "ikeja",
                "area": null,
                "landmark": null,
                "status": "PENDING",
                "paymentStatus": "PENDING",
                "paymentGateway": null,
                "paymentGatewayTransactionId": null,
                "fulfillmentStatus": "UNFULFILLED",
                "user": {
                    "id": "67d33f2df1f14227873214ed",
                    "email": "system-customer@yopmail.com",
                    "fullName": null,
                    "phoneNumber": null,
                    "address": null,
                    "status": "active",
                    "createdAt": "2025-03-13T20:25:17.625",
                    "updatedAt": "2025-03-13T20:25:17.625"
                },
                "promotion": null,
                "address": null,
                "tenantId": "679f2e1cbf79e268dbf2bb6f",
                "createdAt": "2025-03-13T20:33:49.124"
            }
        ],
        "currentPage": 0
    }
}
```

## ❌ Sample 404 Response (Not Found Error)
```json
{
  "status": false,
  "message": "orders not found"
}
```

##  Next Steps
- [Fetch Order Detail](./fetch-order-detail.md)
- [Fetch Order Items](./show-order-items.md)
- [Checkout](../cart/checkout.md)