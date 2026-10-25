---
title: Branch Price Overrides
---

# Branch Price Overrides

Use these endpoints to manage branch-specific pricing for products or individual SKUs. Price overrides take precedence over the base product catalog price when fulfilling orders from that branch.

---

## 1. Get Branch Price Overrides

Retrieves all active price overrides configured for a branch.

### Endpoint
**GET** `/v1/branches/{id}/price-overrides`

### Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

### Path parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | string | Yes | Unique identifier of the branch. |

### Responses

#### 200 OK
```json
{
  "status": true,
  "message": "Branch price overrides retrieved successfully.",
  "data": [
    {
      "id": "67c15b12d43a5c9988776655",
      "tenantId": "679f2dd75f703c799f673415",
      "branchId": "67b93a20d43a5c1234567890",
      "productId": "679f8f5a3b5f2173201c2582",
      "skuId": "679f8f5a3b5f2173201c2583",
      "price": 12500.00
    }
  ]
}
```

---

## 2. Set Branch Price Override

Sets or updates a price override for a product or SKU at a specific branch.

### Endpoint
**PUT** `/v1/branches/{id}/price-overrides`

### Request body

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `productId` | string | Yes | Unique identifier of the product. |
| `skuId` | string | No | Unique SKU identifier for variable products. |
| `price` | number | Yes | Override base price in major currency units. Minimum: `0.01`. |

```json
{
  "productId": "679f8f5a3b5f2173201c2582",
  "skuId": "679f8f5a3b5f2173201c2583",
  "price": 12500.00
}
```

### Responses

#### 200 OK
```json
{
  "status": true,
  "message": "Branch price override saved successfully.",
  "data": {
    "id": "67c15b12d43a5c9988776655",
    "tenantId": "679f2dd75f703c799f673415",
    "branchId": "67b93a20d43a5c1234567890",
    "productId": "679f8f5a3b5f2173201c2582",
    "skuId": "679f8f5a3b5f2173201c2583",
    "price": 12500.00
  }
}
```

---

## 3. Clear Branch Price Override

Deletes a previously configured price override for a product or SKU at a branch.

### Endpoint
**DELETE** `/v1/branches/{id}/price-overrides`

### Query parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `productId` | string | Yes | Product identifier. |
| `skuId` | string | No | SKU identifier if clearing SKU-level override. |

### Responses

#### 200 OK
```json
{
  "status": true,
  "message": "Branch price override cleared successfully.",
  "data": null
}
```
