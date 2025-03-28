---
title: Fetch Order Items
---

# Fetch Order Items

## 📌 Description
This API allows merchant to retrieve items of a specific of specific order

## 🔗 Endpoint
- **URL:** `/v1/orders/{orderId}/items`
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
fetch("https://shopsyncapi/v1/orders/679f8f5a3b5f2173201c2582/items", {
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
    "data": [
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
    ]
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
- [Fetch Orders](./fetch-orders.md)
- [Checkout](../cart/checkout.md)

