---
title: Update Product Variation Price Detail
---

# Update Product Variation Price Detail

## 📌 Description
This API allows users to update the price details of an existing product variation. If a product variation already exists, users can modify attributes such as price, storage, RAM size, size, SKU, quantity, and discount.

## 🔗 Endpoint
- **URL:** `https://shopsyncapi/v1/products/variation/priceDetail/{variationPriceDetailId}`
- **Method:** `PATCH`


## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN",
  "X-TenantId": "YOUR_TENANT_ID",
  "Content-Type": "application/json"
}
```

## 📥 Request Body

| Field Name        | Type    | Required | Description |
|------------------|---------|----------|-------------|
| `productId`      | String  | Yes      | The ID of the product to which the variation belongs. |
| `variationId`    | String  | Yes      | The ID of the variation to which the price details belong. |
| `price`          | Double  | Yes      | The price of the product variation (minimum: 1). |
| `newPrice`       | Double  | No       | The new price if there is a discount or price adjustment. Automatically calculated if discount is provided. |
| `ramSize`        | String  | No       | The RAM size in a format like `4GB`, `512MB`, `12KB`, or `1TB`. |
| `Storage`        | String  | No       | The storage capacity of the product variation. |
| `size`           | String  | No       | The size of the product variation. |
| `sku`            | String  | Yes (Min: 2 characters) | The SKU (Stock Keeping Unit) of the product variation. |
| `quantityInStock`| Integer | Yes (Min: 1) | The quantity available in stock. |
| `discount`       | Double  | No (Min: 0, Max: 100) | The discount percentage applied to the product variation. |

## 📡 Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/products/variation/priceDetail/{variationPriceDetailId}", {
  method: "PATCH",
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'X-TenantId': 'YOUR_TENANT_ID',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "productId": "679f8f5a3b5f2173201c2582",
    "variationId": "67890",
    "price": 110.00,
    "ramSize": "8GB",
    "Storage": "512GB",
    "size": "45",
    "sku": "SHOE-RED-45",
    "quantityInStock": 30,
    "discount": 5.0
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

## ✅ Sample 200 Response (Success)
```json
{
  "id": "679f8f5a3b5f2173201c2582",
  "name": "Red Running Shoe",
  "slug": "red-running-shoe",
  "description": "A stylish red running shoe with breathable material.",
  "summary": "Lightweight and comfortable running shoe.",
  "image": "https://example.com/images/shoe-main.jpg",
  "thumbnail": "https://example.com/images/shoe-thumb.jpg",
  "images": [
    "https://example.com/images/shoe-side.jpg",
    "https://example.com/images/shoe-back.jpg"
  ],
  "price": 110.00,
  "newPrice": 100.00,
  "ramSize": "8GB",
  "Storage": "512GB",
  "size": "45",
  "quantity": 30,
  "brand": "SportsBrand",
  "discount": 5.0,
  "category": "Footwear",
  "color": "Red",
  "variations": [
    {
      "id": "679f8f5a3b5f2173201c258sw",
      "color": {
        "id": "col-5678",
        "name": "Red"
      },
      "customColor": null,
      "image": "https://example.com/images/variation-red.jpg",
      "productPriceDetails": [
        {
          "id": "679f88395a3b5f2173201c2582",
          "price": 110.00,
          "newPrice": 100.00,
          "ramSize": "8GB",
          "Storage": "512GB",
          "size": "45",
          "sku": "SHOE-RED-45",
          "quantityInStock": 30,
          "discount": 5.0
        }
      ]
    }
  ]
}
```

## ❌ Sample 422 Response (Validation Error)
```json
{
  "status": 422,
  "message": "Validation Error",
  "errors": {
    "productId": "Product ID is required",
    "variationId": "Variation ID is required",
    "price": "Price can not be less than 1",
    "sku": "SKU must be at least 2 characters long"
  }
}
```

## 🔗 Next Steps
- Learn more about [Update Product Variation Price Detail](./update-product-variation-price-detail.md)
- Learn more about [Delete Product Variation Price Detail](./delete-product-variation-price-detail.md)