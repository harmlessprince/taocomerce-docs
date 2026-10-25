---
title: SKU Generation and Validation (V2)
---

# SKU Generation and Validation (V2)

Use these endpoints to automatically generate human-readable SKU codes based on brand, category, and variant attributes, and to validate SKU uniqueness within your store.

---

## 1. Generate Product SKU

Generates a standardized SKU code from product properties and checks if it is available for use.

### Endpoint
**POST** `/v2/products/skus/generate`

### Authentication
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

### Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

### Request body

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `productName` | string | Yes | Name of the product. |
| `brandId` | string | No | Unique identifier of the brand. |
| `brandName` | string | No | Brand name string. |
| `categoryId` | string | No | Category identifier. |
| `categoryName` | string | No | Category name string. |
| `attributes` | object | No | Key-value pairs of variant attributes (e.g. `{"Color": "Black", "Size": "XL"}`). |

```json
{
  "productName": "Aero Sport Shoes",
  "brandName": "Nike",
  "categoryName": "Footwear",
  "attributes": {
    "Color": "Black",
    "Size": "42"
  }
}
```

### Responses

#### 200 OK
```json
{
  "status": true,
  "message": "SKU generated",
  "data": {
    "sku": "NIK-FOO-AER-BLA-42",
    "normalizedSku": "NIK-FOO-AER-BLA-42",
    "available": true,
    "conflictProductId": null,
    "conflictSkuId": null
  }
}
```

---

## 2. Validate Product SKU

Checks if a custom SKU code is available for use within your store. When editing an existing product or SKU, you can provide exclude parameters to ignore self-conflicts.

### Endpoint
**GET** `/v2/products/skus/validate`

### Authentication
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

### Query parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `sku` | string | Yes | The SKU code string to validate. |
| `excludeProductId` | string | No | Product ID to exclude from conflict check when updating an existing product. |
| `excludeProductSkuId` | string | No | Variant SKU ID to exclude from conflict check. |

### Responses

#### 200 OK
```json
{
  "status": true,
  "message": "SKU validation completed",
  "data": {
    "sku": "NIK-FOO-AER-BLA-42",
    "normalizedSku": "NIK-FOO-AER-BLA-42",
    "available": true,
    "conflictProductId": null,
    "conflictSkuId": null
  }
}
```
