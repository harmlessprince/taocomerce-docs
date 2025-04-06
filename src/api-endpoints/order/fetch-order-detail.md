---
title: Fetch Order Details
---

# Fetch Order Details

##  Description
This API allows merchant to retrieve order detail, including order items and order history

##  Endpoint
- **URL:** `/v1/orders/{orderId}/detail`
- **Method:** `GET`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantId": "YOUR_MERCHANT_ID",
  "Content-Type": "application/json"
}
```

##  Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/orders/679f8f5a3b5f2173201c2582/detail", {
  method: "GET",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantId": "YOUR_MERCHANT_ID",
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
        "items": [
            {
                "id": "67e3b3ef8a86a453d84eb58e",
                "orderId": "67e3b3ee8a86a453d84eb58d",
                "quantity": 2,
                "price": 94668.67,
                "productId": "dc87327c-5394-40d1-9691-6953b2a70cd7",
                "variationId": null,
                "variationPriceDetailId": null,
                "product": {
                    "id": "dc87327c-5394-40d1-9691-6953b2a70cd7",
                    "name": "Addidas Men Sports Shoes Luxury Casual Sneakers Mesh Running Shoes Summer Lightweight Platform Fashion Basketball Walking Shoes for Men",
                    "slug": "addidas_men_sports_shoes_luxury_casual_sneakers_mesh_running_shoes_summer_lightweight_platform_fashion_basketball_walking_shoes_for_men-0400640",
                    "description": "Men Sports Shoes Luxury Casual Sneakers Mesh Running Shoes Summer Lightweight Platform Fashion Basketball Walking Shoes for Men",
                    "image": "http://lorempixel.com/1366/768/people/",
                    "thumbnail": "http://lorempixel.com/1366/768/people/",
                    "imageList": [
                        "http://lorempixel.com/1366/768/people/",
                        "http://lorempixel.com/1366/768/people/"
                    ],
                    "price": 94668.67,
                    "newPrice": 49227.71,
                    "ramSize": null,
                    "size": null,
                    "sku": null,
                    "quantityInStock": 13,
                    "brand": null,
                    "discount": 48.0,
                    "category": "Snail",
                    "color": null,
                    "rating": 5,
                    "features": null,
                    "specification": [
                        {
                            "key": "Screen Size",
                            "value": "63\""
                        },
                        {
                            "key": "Display Type",
                            "value": "Rollable Display"
                        },
                        {
                            "key": "Resolution",
                            "value": "3840 x 2160"
                        }
                    ],
                    "variation": {
                        "id": null,
                        "customColor": null,
                        "color": null,
                        "image": null
                    },
                    "storage": null
                },
                "user": null,
                "createdAt": "2025-03-26T08:59:43.004"
            }
        ],
        "order": {
            "id": "67e3b3ee8a86a453d84eb58d",
            "orderNumber": "ORD-A780935E",
            "orderDate": "2025-03-26T08:59:42.925",
            "billingAddress": null,
            "shippingMethod": "Bus",
            "paymentMethod": null,
            "totalPrice": "51196.82",
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
            "user": null,
            "contactInformation": {
                "firstName": "John",
                "lastName": "Doe",
                "email": "sample@gmail.com",
                "phoneNumber": "0708XXXXXXX",
                "address": "Ajegunle"
            },
            "promotion": null,
            "address": null,
            "tenantId": "679f2dd75f703c799f673415",
            "createdAt": "2025-03-26T08:59:42.94"
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

