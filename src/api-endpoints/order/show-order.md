---
title: Show Order
---

# Show Order

## 📌 Description
This API allows users to retrieve details of a specific product by its ID.

## 🔗 Endpoint
- **URL:** `/v1/orders/{productId}`
- **Method:** `GET`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN",
  "X-TenantId": "YOUR_TENANT_ID",
  "Content-Type": "application/json"
}
```

## 📡 Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/orders/679f8f5a3b5f2173201c2582", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_JWT_TOKEN",
    "X-TenantId": "YOUR_TENANT_ID",
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
        "orderLine": [
            {
                "id": "67d3412df1f14227873214f5",
                "orderId": "67d3412df1f14227873214f4",
                "quantity": 1,
                "price": 7.96983E7,
                "productId": "f6fc9c42-4e31-4084-b82d-f66d805e0daa",
                "variationId": null,
                "variationPriceDetailId": null,
                "product": {
                    "id": "f6fc9c42-4e31-4084-b82d-f66d805e0daa",
                    "name": "LG 45 Inch Signature OLed R Class Rollable 4K Smart Tv",
                    "slug": "lg_45_inch_signature_oled_r_class_rollable_4k_smart_tv-0694942",
                    "description": "Revolutionary rollable design, Full View / Line View / Zero View, OLED technology with self-illuminating pixels, Smart TV webOS 6.0 with pointer remote control",
                    "image": "http://lorempixel.com/1366/768/people/",
                    "thumbnail": "http://lorempixel.com/1366/768/people/",
                    "imageList": [
                        "http://lorempixel.com/1366/768/people/",
                        "http://lorempixel.com/1366/768/people/"
                    ],
                    "price": 7.96983E7,
                    "newPrice": 7.172847E7,
                    "ramSize": null,
                    "size": "Large",
                    "sku": null,
                    "quantityInStock": 13,
                    "brand": null,
                    "discount": 10.0,
                    "category": "Rafia",
                    "color": null,
                    "rating": null,
                    "features": [
                        "feature 1",
                        "feature 2"
                    ],
                    "specification": null,
                    "variation": {
                        "id": null,
                        "customColor": null,
                        "color": null,
                        "image": null
                    },
                    "storage": null
                },
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
                "createdAt": "2025-03-13T20:33:49.594"
            },
            {
                "id": "67d3412ef1f14227873214f6",
                "orderId": "67d3412df1f14227873214f4",
                "quantity": 1,
                "price": 7.96983E7,
                "productId": "f6fc9c42-4e31-4084-b82d-f66d805e0daa",
                "variationId": null,
                "variationPriceDetailId": null,
                "product": {
                    "id": "f6fc9c42-4e31-4084-b82d-f66d805e0daa",
                    "name": "LG 45 Inch Signature OLed R Class Rollable 4K Smart Tv",
                    "slug": "lg_45_inch_signature_oled_r_class_rollable_4k_smart_tv-0694942",
                    "description": "Revolutionary rollable design, Full View / Line View / Zero View, OLED technology with self-illuminating pixels, Smart TV webOS 6.0 with pointer remote control",
                    "image": "http://lorempixel.com/1366/768/people/",
                    "thumbnail": "http://lorempixel.com/1366/768/people/",
                    "imageList": [
                        "http://lorempixel.com/1366/768/people/",
                        "http://lorempixel.com/1366/768/people/"
                    ],
                    "price": 7.96983E7,
                    "newPrice": 7.172847E7,
                    "ramSize": null,
                    "size": "Large",
                    "sku": null,
                    "quantityInStock": 13,
                    "brand": null,
                    "discount": 10.0,
                    "category": "Rafia",
                    "color": null,
                    "rating": null,
                    "features": [
                        "feature 1",
                        "feature 2"
                    ],
                    "specification": null,
                    "variation": {
                        "id": null,
                        "customColor": null,
                        "color": null,
                        "image": null
                    },
                    "storage": null
                },
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
                "createdAt": "2025-03-13T20:33:50.067"
            }
        ],
        "order": {
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

## 🔗 Next Steps
- [Show Order](./fetch-orders.md)
- [Checkout](../cart/checkout.md)

