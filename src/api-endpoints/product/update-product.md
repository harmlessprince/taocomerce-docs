---
title: Update Product
---

# Update Product

##  Description
This API allows users to update an existing product's details. Users can modify attributes such as name, description, summary, price, images, specifications, and more.

##  Endpoint
- **URL:** `/v1/products/{productId}`
- **Method:** `PATCH`

##  Required Headers
- `Authorization: Bearer JWT_TOKEN`
- `X-MerchantApiKey: MERCHANT_API_KEY`
- `Content-Type: application/json`

## 📥 Request Body

| Field Name         | Type    | Required | Description |
|-------------------|---------|----------|-------------|
| `name`           | String  | Yes (Min: 1 character) | The name of the product. |
| `slug`           | String  | No       | The slug of the product (not recommended for updates). |
| `description`    | String  | Yes (Min: 50 characters) | The product's full description. |
| `summary`        | String  | Yes (Min: 10, Max: 255 characters) | A short summary of the product. |
| `image`          | String  | No       | The main image URL of the product. |
| `thumbnail`      | String  | No       | The thumbnail image URL of the product. |
| `imageList`      | List(string) | No  | A list of additional product images. |
| `features`       | List(string) | No  | A list of product features. |
| `price`          | Double  | Yes (Min: 1) | The price of the product. |
| `ramSize`        | String  | No       | RAM size format: `4GB`, `512MB`, `12KB`, or `1TB`. |
| `storage`        | String  | No       | Storage capacity of the product. |
| `size`           | String  | No       | The size of the product. |
| `sku`            | String  | Yes (Min: 2 characters) | The Stock Keeping Unit (SKU) of the product. |
| `quantityInStock`| Integer | Yes (Min: 0) | The available stock quantity. |
| `brandId`        | String  | No       | The ID of the product's brand. |
| `discount`       | Double  | No (Min: 0, Max: 100) | The discount percentage applied. |
| `categoryId`     | String  | No       | The category ID of the product. |
| `colorId`        | String  | No       | The color ID of the product. |
| `customColor`    | String  | No       | Custom color name, if applicable. |
| `specifications` | List | Yes (Min: 1) | List of product specifications. Each specification must have a key and value. [More Info](#productspecification-dto)  |


### ProductSpecification DTO
Available specifications can be found [here](../specification.md).
<details>
  <summary>Product Specification</summary>
  <table border="1">
    <thead>
      <tr>
        <th>Field</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>key</code></td>
        <td>string</td>
        <td>Yes</td>
        <td>The specification key (e.g., "Battery Capacity").</td>
      </tr>
      <tr>
        <td><code>value</code></td>
        <td>string</td>
        <td>Yes</td>
        <td>The specification value (e.g., "4000mAh").</td>
      </tr>
    </tbody>
  </table>
</details>

##  Example API Call (Using Fetch)
```javascript
fetch("https://api.shopsynch.com/v1/products/679f8f5a3b5f2173201c2582", {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantApiKey": "MERCHANT_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "name": "Updated Product Name",
    "description": "This is an updated description of the product, which provides all necessary details.",
    "summary": "Short summary about the product.",
    "price": 150.00,
    "sku": "PROD-001",
    "quantityInStock": 20,
    "discount": 10,
    "brandId": "brand-123",
    "categoryId": "category-456",
    "specifications": [{ "key": "Material", "value": "Leather" }]
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
  "name": "Updated Product Name",
  "slug": "updated-product-name",
  "description": "This is an updated description of the product, which provides all necessary details.",
  "summary": "Short summary about the product.",
  "image": "https://example.com/images/product-main.jpg",
  "thumbnail": "https://example.com/images/product-thumb.jpg",
  "price": 150.00,
  "quantityInStock": 20,
  "brand": "Brand Name",
  "discount": 10,
  "category": "Category Name",
  "color": "Red",
  "specifications": [
    { "key": "Material", "value": "Leather" }
  ],
  "features": ["Waterproof", "Durable"]
}
```

## ❌ Sample 422 Response (Validation Error)
```json
{
  "status": 422,
  "message": "Validation Error",
  "errors": {
    "name": "Product name must have at least 1 character",
    "description": "Description must be at least 50 characters long",
    "summary": "Summary must be at least 10 characters long"
  }
}
```

##  Next Steps
- Learn more about [Update Product Variation Price Detail](./update-product-variation-price-detail.md)
- Learn more about [Delete Product Variation Price Detail](./delete-product-variation-price-detail.md)

