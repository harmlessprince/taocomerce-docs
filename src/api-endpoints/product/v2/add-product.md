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

> [!NOTE]
> **Images must be uploaded before creating a product.** Use the [Upload Single Image](../../media-management/upload-single-image.md) or [Upload Multiple Images](../../media-management/upload-multiple-images.md) endpoints first, then pass the `id` values returned from those responses into the `image`, `thumbnail`, and `imageList` fields below.

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | string | Yes | Product display name. |
| `description` | string | Yes | Detailed description (min 5 chars). |
| `image` | string | Yes | File ID of the main product image. Obtain this from the [upload endpoint](../../media-management/upload-single-image.md). |
| `thumbnail` | string | Yes | File ID of the product thumbnail. Obtain this from the [upload endpoint](../../media-management/upload-single-image.md). |
| `imageList` | list | No | List of File IDs for additional product images. Obtain these from the [batch upload endpoint](../../media-management/upload-multiple-images.md). |
| `productType` | `enum` | No | `SIMPLE`, `VARIABLE`, `DIGITAL`, `BUNDLE`. Defaults to `SIMPLE`. |
| `categoryId` | string | Yes | Valid category ID. |
| `brandId` | string | No | Optional brand ID. |
| `summary` | string | No | Short summary (5–500 chars). |
| `features` | list | Yes | List of product feature strings (min 1). |
| `specifications` | list | No | List of specification objects. |
| `price` | double | Yes* | Base price (Required for SIMPLE, DIGITAL, BUNDLE). |
| `discount` | int | No | Discount percentage (0–100). |
| `quantityInStock` | int | Yes* | Stock count (Required for SIMPLE). |
| `sku` | string | No | Stock keeping unit code (min 2 chars). |
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
  "image": "file_abc123xyz",
  "thumbnail": "file_def456uvw",
  "imageList": ["file_ghi789rst", "file_jkl012mno"],
  "price": 45.00,
  "quantityInStock": 100,
  "sku": "SPK-001",
  "categoryId": "cat_electronics_123",
  "productType": "SIMPLE",
  "features": ["Bluetooth 5.0", "Waterproof IPX5", "12-hour battery"],
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
  "image": "file_abc123xyz",
  "thumbnail": "file_def456uvw",
  "price": 19.99,
  "categoryId": "cat_digital_456",
  "productType": "DIGITAL",
  "features": ["Instant download", "PDF format", "100+ pages"]
}
```

### 3. Creating a Bundle
Combine existing products into a discounted package.

```json
{
  "name": "Home Office Starter Pack",
  "description": "Monitor and Keyboard combo.",
  "image": "file_abc123xyz",
  "thumbnail": "file_def456uvw",
  "price": 250.00,
  "productType": "BUNDLE",
  "categoryId": "cat_bundles_789",
  "features": ["Save 20% vs buying separately"],
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
