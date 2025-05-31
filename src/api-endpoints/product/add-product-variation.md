---
title: Add Product Variation
---

# Add Product Variation

##  Description
This API allows users to add a new product variation, including color, image, and price details.

##  Endpoint
- **URL:** `/v1/products/variation/add`
- **Method:** `POST`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## 📥 Request Body

| Field Name       | Type   | Required | Description |
|-----------------|--------|----------|-------------|
| `productId`     | String | Yes      | The ID of the product to which the variation belongs. |
| `colorId`       | String | No (Min: 10 characters) | The ID of the color for the variation. |
| `customColor`   | String | No (Min: 3 characters) | The custom color name if applicable. |
| `image`         | String | No       | The image URL representing the variation. |
| `priceDetails`  | List | Yes (Min: 1 item) | A list of price details for the variation. |

### 📥 Price Details Structure
| Field Name       | Type   | Required | Description |
|-----------------|--------|----------|-------------|
| `price`         | Double | Yes (Min: 1) | The price of the variation. |
| `newPrice`      | Double | No       | The new discounted price. |
| `ramSize`       | String | No       | RAM size format: `4GB`, `512MB`, `12KB`, `1TB`. |
| `storage`       | String | No       | Storage capacity of the variation. |
| `size`          | String | No       | The size of the variation. |
| `sku`           | String | Yes (Min: 2 characters) | The Stock Keeping Unit (SKU) of the variation. |
| `quantityInStock`| Integer | Yes (Min: 1) | The available stock quantity. |
| `discount`      | Double | No (Min: 0, Max: 100) | The discount percentage applied. |

##  Example API Call (Using Fetch)
```javascript
fetch("https://api.shopsynch.com/v1/products/variation/add", {
  method: "POST",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantApiKey": "MERCHANT_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "productId": "dc87327c-5394-40d1-9691-6953b2a70cd7",
    "colorId": "dc87327c-5394-40d1-9691-6953b2a70cd7",
    "customColor": "Midnight Blue",
    "image": "https://example.com/images/product-variation.jpg",
    "priceDetails": [
      {
        "price": 120.00,
        "size": "XL",
        "sku": "VAR-XL-123",
        "quantityInStock": 20,
        "discount": 10.0
      }
    ]
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

## ✅ Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "product variation updated",
    "data": {
        "id": "dc87327c-5394-40d1-9691-6953b2a70cd7",
        "name": "Addidas Men Sports Shoes Luxury Casual Sneakers Mesh Running Shoes Summer Lightweight Platform Fashion Basketball Walking Shoes for Men",
        "slug": "addidas_men_sports_shoes_luxury_casual_sneakers_mesh_running_shoes_summer_lightweight_platform_fashion_basketball_walking_shoes_for_men-0400640",
        "description": "Men Sports Shoes Luxury Casual Sneakers Mesh Running Shoes Summer Lightweight Platform Fashion Basketball Walking Shoes for Men",
        "summary": null,
        "image": "http://lorempixel.com/1366/768/people/",
        "thumbnail": "http://lorempixel.com/1366/768/people/",
        "images": [
            "http://lorempixel.com/1366/768/people/",
            "http://lorempixel.com/1366/768/people/"
        ],
        "price": "94668.67",
        "newPrice": "49227.71",
        "ramSize": null,
        "Storage": null,
        "size": null,
        "quantity": 13,
        "brand": null,
        "discount": 48.0,
        "category": "Snail",
        "color": null,
        "specifications": [
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
        "variations": [
            {
                "id": "bc4a747c-5389-455e-8a49-ea031e515b62",
                "color": null,
                "customColor": "Allblack",
                "image": "https://ae-pic-a1.aliexpress-media.com/kf/S13499b67d8bc4b34b1c3c4156f88005aM.jpg_120x120.jpg_.webp",
                "productPriceDetails": [
                    {
                        "id": "c23630f7-bb67-4d52-bd55-82f1e7ce17eb",
                        "price": 94668.67,
                        "newPrice": null,
                        "ramSize": null,
                        "size": null,
                        "sku": null,
                        "quantityInStock": 5,
                        "discount": 48.0,
                        "storage": null
                    },
                    {
                        "id": "271d10c9-61da-4830-843c-19455959d7ba",
                        "price": 94668.67,
                        "newPrice": null,
                        "ramSize": null,
                        "size": "40",
                        "sku": null,
                        "quantityInStock": 5,
                        "discount": 47.0,
                        "storage": null
                    },
                ]
            },
            {
                "id": "ba0ed5df-d0d4-42cd-b4d6-113fe2dbe3b2",
                "color": null,
                "customColor": "BlackWhite",
                "image": "https://ae-pic-a1.aliexpress-media.com/kf/Sd3cb4df835fd438b9f93a366bafd44d9Q.jpg_120x120.jpg_.webp",
                "productPriceDetails": [
                    {
                        "id": "aa25dede-5cfc-48ad-81e7-abb66cdfdb1f",
                        "price": 95668.67,
                        "newPrice": null,
                        "ramSize": null,
                        "size": "39",
                        "sku": null,
                        "quantityInStock": 5,
                        "discount": 48.0,
                        "storage": null
                    },
                    {
                        "id": "c53c0a24-2382-408d-92b7-bcabd9d7f236",
                        "price": 96668.67,
                        "newPrice": null,
                        "ramSize": null,
                        "size": "40",
                        "sku": null,
                        "quantityInStock": 5,
                        "discount": 47.0,
                        "storage": null
                    },
                    {
                        "id": "af8c4104-ff71-46a5-ab26-bdad1e76bc8e",
                        "price": 97312.57,
                        "newPrice": null,
                        "ramSize": null,
                        "size": "41",
                        "sku": null,
                        "quantityInStock": 5,
                        "discount": 47.0,
                        "storage": null
                    },
                ]
            },
            {
                "id": "e9733233-55ab-4b06-8b02-9cecf14768dc",
                "color": null,
                "customColor": "RedBlack",
                "image": null,
                "productPriceDetails": null
            }
        ],
        "features": []
    }
}
```

## ❌ Sample 404 Response (Not Found Error)
```json
{
  "status": false,
  "message": "Product not found"
}
```

##  Next Steps
- Learn more about [Updating Product Variation](./update-product-variation-price-detail.md)
- Learn more about [Deleting Product Variation Price Detail](./delete-product-variation-price-detail.md)