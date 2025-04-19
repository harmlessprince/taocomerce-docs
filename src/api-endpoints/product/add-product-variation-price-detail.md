# Add Product Variation Price Detail

##  Description
This API allows users to add more price details for an existing product and variation. For example, if you have created a Shoe product with a red color variation in sizes 30, 40, and 35, this API enables you to add another size, such as size 43.

##  Endpoint
- **URL:** `/v1/products/variation/priceDetail`
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

| Field Name        | Type    | Required | Description |
|------------------|---------|----------|-------------|
| `productId`      | String  | Yes      | The ID of the product to which the variation belongs. |
| `variationId`    | String  | Yes      | The ID of the variation to which the price details belong. |
| `price`          | Double  | Yes      | The price of the product variation (minimum: 1). |
| `ramSize`        | String  | No       | The RAM size in a format like `4GB`, `512MB`, `12KB`, or `1TB`. |
| `Storage`        | String  | No       | The storage capacity of the product variation. |
| `size`           | String  | No       | The size of the product variation. |
| `sku`            | String  | Yes (Min: 2 characters) | The SKU (Stock Keeping Unit) of the product variation. |
| `quantityInStock`| Integer | Yes (Min: 1) | The quantity available in stock. |
| `discount`       | Double  | No (Min: 0, Max: 100) | The discount percentage applied to the product variation. |

##  Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/products/variation/priceDetail", {
  method: "POST",
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantApiKey': 'MERCHANT_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "productId": "12345",
    "variationId": "67890",
    "price": 100.00,
    "ramSize": "8GB",
    "Storage": "256GB",
    "size": "43",
    "sku": "SHOE-RED-43",
    "quantityInStock": 50,
    "discount": 10.0
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

## ✅ Sample 200 Response (Success)
```json
{
  "id": "67890",
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
  "price": 100.00,
  "ramSize": "8GB",
  "Storage": "256GB",
  "size": "43",
  "quantity": 50,
  "brand": "SportsBrand",
  "discount": 10.0,
  "category": "Footwear",
  "color": "Red",
  "specifications": [
    { "key": "Material", "value": "Mesh" },
    { "key": "Sole Type", "value": "Rubber" }
  ],
  "variations": [
    { "color": "Red", "sizes": ["30", "40", "35", "43"] }
  ],
  "features": ["Lightweight", "Breathable", "Durable"]
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

##  Next Steps
- Learn more about [Update Product Variation Price Detail](./update-product-variation-price-detail.md)
- Learn more about  [Delete Product Variation Price Detail](./delete-product-variation-price-detail.md)
