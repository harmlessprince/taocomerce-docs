---
title: Fetch Customer Orders By CustomerID
---

# Fetch Customer Orders By CustomerID

##  Description
This API retrieves a list of placed orders by a customer. As a merchant you can use this api to get list of all orders that has been made by a customer.

##  Endpoint
- **URL:** `/v1/orders/customer-orders/{customerId}`
- **Method:** `GET`

## Query Parameters

| Parameter            | Type   | Description |
|----------------------|--------|-------------|
| `sortDirectionParam` | String | Sorting direction (`ASC` or `DESC`). Default: `ASC`. |
| `sortFieldParam`     | String | Field to sort results by (e.g., `NAME`). Default: `NAME`. |
| `shippingMethod`              | String | Filter orders by shipping method. |
| `paymentMethod`          | String | Filter orders by payment method. |
| `country`           | String | Filter orders by country (e.g., `16GB`). |
| `city`           | String | Filter orders by city |
| `state`             | String | Filter orders by state. |
| `status`           | String | Filter orders by storage order status e.g (`PENDING`, `PROCESSING`, `UNFULFILLED`, `SHIPPED`, `DELIVERED`, `CANCELLED`). |
| `paymentStatus`             | String | Filter orders by payment status. e.g ( `SUCCESS`, `FAILED`, `PENDING`, `REFUNDED`, `ABANDONED`, `PROCESSING`) |
| `fulfillmentStatus`             | String | Filter orders by fulfillment status. e.g (`UNFULFILLED`, `FULFILLED`) |
| `search`            | String | General search query for orders.(search by name, description and category) |



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
fetch("https://api.shopsynch.com/v1/customer-orders/67dfb8408bd13b35a66f42ed?sortDirectionParam=ASC", {
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
        "total": 4,
        "totalPages": 1,
        "orders": [
            {
                "id": "67e3b31f3189ad192b747f09",
                "orderNumber": "ORD-C4752845",
                "orderDate": "2025-03-26T08:56:15.656",
                "billingAddress": null,
                "shippingMethod": "Bus",
                "paymentMethod": null,
                "totalPrice": "25598.41",
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
                "customer": {
                    "id": "67dfb8408bd13b35a66f42ed",
                    "email": "system-customer@yopmail.com",
                    "fullName": null,
                    "phoneNumber": null,
                    "address": null,
                    "status": "active",
                    "createdAt": "2025-03-23T08:29:04.911",
                    "updatedAt": "2025-03-23T08:36:34.201"
                },
                "contactInformation": {
                    "firstName": "Taofeeq",
                    "lastName": "Adewuyi",
                    "email": "realolamilekan@gmail.com",
                    "phoneNumber": "07086556010",
                    "address": "Ajegunle"
                },
                "promotion": null,
                "address": null,
                "tenantId": "679f2dd75f703c799f673415",
                "createdAt": "2025-03-26T08:56:15.676"
            },
            {
                "id": "67e3b2ccd2658d11a13df5df",
                "orderNumber": "ORD-CC189029",
                "orderDate": "2025-03-26T08:54:52.138",
                "billingAddress": null,
                "shippingMethod": "Bus",
                "paymentMethod": null,
                "totalPrice": "25598.41",
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
                "customer": {
                    "id": "67dfb8408bd13b35a66f42ed",
                    "email": "system-customer@yopmail.com",
                    "fullName": null,
                    "phoneNumber": null,
                    "address": null,
                    "status": "active",
                    "createdAt": "2025-03-23T08:29:04.911",
                    "updatedAt": "2025-03-23T08:36:34.201"
                },
                "contactInformation": {
                    "firstName": "Taofeeq",
                    "lastName": "Adewuyi",
                    "email": "realolamilekan@gmail.com",
                    "phoneNumber": "07086556010",
                    "address": "Ajegunle"
                },
                "promotion": null,
                "address": null,
                "tenantId": "679f2dd75f703c799f673415",
                "createdAt": "2025-03-26T08:54:52.139"
            },
            {
                "id": "67e3b28fd2658d11a13df5dd",
                "orderNumber": "ORD-7C46AB85",
                "orderDate": "2025-03-26T08:53:51.927",
                "billingAddress": null,
                "shippingMethod": "Bus",
                "paymentMethod": null,
                "totalPrice": "25598.41",
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
                "customer": {
                    "id": "67dfb8408bd13b35a66f42ed",
                    "email": "system-customer@yopmail.com",
                    "fullName": null,
                    "phoneNumber": null,
                    "address": null,
                    "status": "active",
                    "createdAt": "2025-03-23T08:29:04.911",
                    "updatedAt": "2025-03-23T08:36:34.201"
                },
                "contactInformation": {
                    "firstName": "John",
                    "lastName": "Doe",
                    "email": "system-customer@gmail.com",
                    "phoneNumber": "07086XXXXXX",
                    "address": "Ajegunle"
                },
                "promotion": null,
                "address": null,
                "tenantId": "679f2dd75f703c799f673415",
                "createdAt": "2025-03-26T08:53:51.939"
            },
            {
                "id": "67e3b06967973225cc7afde6",
                "orderNumber": "ORD-B9AC98F2",
                "orderDate": "2025-03-26T08:44:41.457",
                "billingAddress": null,
                "shippingMethod": "Bus",
                "paymentMethod": null,
                "totalPrice": "25598.41",
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
                "customer": {
                    "id": "67dfb8408bd13b35a66f42ed",
                    "email": "system-customer@yopmail.com",
                    "fullName": null,
                    "phoneNumber": null,
                    "address": null,
                    "status": "active",
                    "createdAt": "2025-03-23T08:29:04.911",
                    "updatedAt": "2025-03-23T08:36:34.201"
                },
                "contactInformation": {
                    "firstName": "John",
                    "lastName": "Doe",
                    "email": "sample@gmail.com",
                    "phoneNumber": "XXXXXXX",
                    "address": "Ajegunle"
                },
                "promotion": null,
                "address": null,
                "tenantId": "679f2dd75f703c799f673415",
                "createdAt": "2025-03-26T08:44:41.469"
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