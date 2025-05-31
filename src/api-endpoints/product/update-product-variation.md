---
title: Update Product Variation
---
# Update Product Variation

##  Description
This API allows users to update a product variation by modifying attributes such as color, custom color, image, and product association.

##  Endpoint
- **URL:** `/v1/products/variation/{variationId}`
- **Method:** `PATCH`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## 📥 Request Body

| Field Name   | Type   | Required | Description |
|-------------|--------|----------|-------------|
| `color`      | String | No       | The color of the product variation. |
| `customColor`| String | No       | A custom color name if applicable. |
| `image`      | String | No       | The image URL representing the variation. |
| `productId`  | String | Yes      | The ID of the product to which the variation belongs. |

##  Example API Call (Using Fetch)
```javascript
fetch("https://api.shopsynch.com/v1/products/variation/{variationId}", {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantApiKey": "MERCHANT_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "color": "Red",
    "customColor": "Crimson",
    "image": "https://example.com/images/product-variation.jpg",
    "productId": "12345"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

## ✅ Sample 200 Response (Success)
```json
{
  "id": "var-67890",
  "color": "Red",
  "customColor": "Crimson",
  "image": "https://example.com/images/product-variation.jpg",
  "productId": "12345"
}
```

## ❌ Sample 422 Response (Validation Error)
```json
{
  "status": 422,
  "message": "Validation Error",
  "errors": {
    "productId": "Product ID is required"
  }
}
```

##  Next Steps
- Learn more about [Adding Product Variation](./update-product-variation-price-detail.md)
- Learn more about [Adding Product Variation Price Detail](./delete-product-variation-price-detail.md)

