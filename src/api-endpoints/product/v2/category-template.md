---
title: Get Product Template by Category (V2)
---

# Get Product Template by Category (V2)

Use this endpoint to retrieve category-specific attribute templates and configuration schemas. This allows your user interface to render appropriate input fields (such as screen size, material, or fit) when adding products to a category.

## Endpoint
**GET** `/v2/product-templates/by-category/{categoryId}`

## Authentication
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.
- No JWT bearer token required.

## Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Path parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `categoryId` | string | Yes | Unique identifier of the product category. |

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Template retrieved",
  "data": {
    "id": "67c19a12d43a5c1234567800",
    "categoryId": "679f2e1cbf79e268dbf2bb70",
    "categoryName": "Smartphones",
    "attributes": [
      {
        "name": "Storage Capacity",
        "type": "SELECT",
        "required": true,
        "options": ["64GB", "128GB", "256GB", "512GB", "1TB"]
      },
      {
        "name": "RAM",
        "type": "SELECT",
        "required": true,
        "options": ["4GB", "6GB", "8GB", "12GB", "16GB"]
      },
      {
        "name": "Color",
        "type": "TEXT",
        "required": false
      }
    ]
  }
}
```

### 404 Not Found
```json
{
  "status": false,
  "message": "No product template configured for this category"
}
```
