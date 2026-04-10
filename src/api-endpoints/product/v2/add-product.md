---
title: Add Product (V2)
---

# Add Product (V2)

The **Add Product V2** API is a unified endpoint for creating any type of product—from a single book to a complex multicomponent bundle.

## Endpoint
**POST** `/v2/products`

## Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Request Parameters

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | string | Yes | Product display name. |
| `description` | string | Yes | Detailed description (min 5 chars). |
| `image` | string | Yes | Main image URL. |
| `thumbnail` | string | Yes | Thumbnail image URL. |
| `productType` | `enum` | No | `SIMPLE`, `VARIABLE`, `DIGITAL`, `BUNDLE`. Defaults to `SIMPLE`. |
| `categoryId` | string | Yes | Valid category ID. |
| `price` | double | Yes* | Base price (Required for SIMPLE, DIGITAL, BUNDLE). |
| `quantityInStock` | int | Yes* | Stock count (Required for SIMPLE). |
| `attributes` | map | No | Key-value pairs for product details (e.g., `{"Color": "Red"}`). |
| `variantGroups` | list | No** | List of variant groups (Required for VARIABLE). |
| `bundledProductIds`| list | No***| List of product IDs (Required for BUNDLE). |
| `isArchived` | boolean | No | Whether the product should be archived (hidden) immediately after creation. |

*\* Pricing/Stock for VARIABLE products are derived from their SKUs.*  
*\*\* See [Managing Variant Groups](./manage-variant-groups.md).*  
*\*\*\* Minimum 2 products for a BUNDLE.*

---

## 📥 Request Samples

### 1. Creating a Simple Product
For standard items with a single price and stock.

```json
{
  "name": "Classic Bluetooth Speaker",
  "description": "High-quality sound in a portable design.",
  "image": "https://example.com/speaker.jpg",
  "thumbnail": "https://example.com/speaker-thumb.jpg",
  "price": 45.00,
  "quantityInStock": 100,
  "sku": "SPK-001",
  "categoryId": "cat_electronics_123",
  "productType": "SIMPLE",
  "attributes": {
    "Color": "Matte Black",
    "Battery Life": "12 Hours"
  }
}
```

### 2. Creating a Digital Product
For items like software keys or e-books (no physical stock).

```json
{
  "name": "E-Commerce Mastery E-Book",
  "description": "A complete guide to building your online store.",
  "image": "https://example.com/ebook.jpg",
  "thumbnail": "https://example.com/ebook-thumb.jpg",
  "price": 19.99,
  "categoryId": "cat_digital_456",
  "productType": "DIGITAL"
}
```

### 3. Creating a Bundle
Combine existing products into a discounted package.

```json
{
  "name": "Home Office Starter Pack",
  "description": "Monitor and Keyboard combo.",
  "image": "https://example.com/bundle.jpg",
  "thumbnail": "https://example.com/bundle-thumb.jpg",
  "price": 250.00,
  "productType": "BUNDLE",
  "categoryId": "cat_bundles_789",
  "bundledProductIds": [
    "prod_monitor_111",
    "prod_keyboard_222"
  ]
}
```

## 📤 Response (Success)
All V2 endpoints return a rich product object including both new V2 fields and legacy V1 fields for compatibility.

```json
{
  "status": true,
  "data": {
    "id": "prod_abc123",
    "name": "Classic Bluetooth Speaker",
    "productType": "SIMPLE",
    "price": 45.00,
    "attributes": {
      "Color": "Matte Black",
      "Battery Life": "12 Hours"
    },
    ...
  }
}
```
