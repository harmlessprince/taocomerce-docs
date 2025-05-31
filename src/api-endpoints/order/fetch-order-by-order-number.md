---
title: Fetch Order By Order Number
---

# Fetch Order Details

##  Description
This API allows customer to retrieve order detail using their order number and its public

##  Endpoint
- **URL:** `/v1/orders/{orderNumber}/show`
- **Method:** `GET`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

##  Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/orders/ORD-534CFA20/show", {
  method: "GET",
  headers: {
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
    "message": "Order retrieved",
    "data": {
        "order": {
            "id": "683a3d841b78573000c3fe26",
            "orderNumber": "ORD-534CFA20",
            "orderDate": "2025-05-30T23:21:40.171Z",
            "billingAddress": null,
            "shippingMethod": "Bus",
            "paymentMethod": "card",
            "totalPrice": "49227.71",
            "waybillPrice": null,
            "country": "Nigeria",
            "state": "Lagos",
            "city": "ikeja",
            "area": null,
            "landmark": null,
            "status": "PROCESSING",
            "paymentStatus": "SUCCESS",
            "paymentGateway": "PAYSTACK",
            "fulfillmentStatus": "UNFULFILLED",
            "customer": null,
            "contactInformation": {
                "firstName": "John",
                "lastName": "Doe",
                "email": "johndoe@gmail.com",
                "phoneNumber": "07086XXXXXX",
                "address": "Ajegunle"
            },
            "promotion": null,
            "address": null,
            "tenantId": "679f2dd75f703c799f673415",
            "createdAt": "2025-05-30T23:21:40.213Z"
        }
    }
}
```

## ❌ Sample 404 Response (Not Found Error)
```json
{
  "status": false,
  "message": "Order not found"
}
```

##  Next Steps
- [Fetch Orders](./fetch-orders.md)
- [Checkout](../cart/checkout.md)

