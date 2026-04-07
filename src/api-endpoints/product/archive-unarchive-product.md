---
title: Archive & Unarchive Product
---

# Archive & Unarchive Product

##  Description
These APIs allow merchants to manage the visibility of their products without permanently deleting them. 
- **Archiving** a product hides it from the public storefront while retaining all its data, associations, and historical records.
- **Unarchiving** restores a previously archived product, making it visible to customers again.

> [!IMPORTANT]
> By default, archived products are **not** returned by the [Fetch Products](./fetch-products.md) API. This ensures that customers only see active products in the storefront.

## 1. Archive Product

###  Endpoint
**PATCH** `/v2/products/{productId}/archive`

###  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

### 📥 Request Parameters
| Parameter   | Type   | Required | Description                                     |
|-------------|--------|----------|-------------------------------------------------|
| `productId` | string | Yes      | The unique identifier of the product to archive. |

### ✅ Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "Product archived successfully",
    "data": {
        "id": "prod-123",
        "name": "LG 45 Inch TV",
        "isArchived": true
    }
}
```

---

## 2. Unarchive Product

###  Endpoint
**PATCH** `/v2/products/{productId}/unarchive`

###  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

### 📥 Request Parameters
| Parameter   | Type   | Required | Description                                       |
|-------------|--------|----------|---------------------------------------------------|
| `productId` | string | Yes      | The unique identifier of the product to unarchive. |

### ✅ Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "Product unarchived successfully",
    "data": {
        "id": "prod-123",
        "name": "LG 45 Inch TV",
        "isArchived": false
    }
}
```
