---
title: Managing SKUs (V2)
---

# Managing SKUs (V2)

**SKUs (Stock Keeping Units)** represent the individual purchasable items within a variant group. Each SKU can have its own price, stock, and additional attributes (like RAM or Size).

## 1. Add a SKU
Adds a new purchasable option to an existing variant group.

### Endpoint
**POST** `/v2/products/{productId}/variant-groups/{groupId}/skus`

### JSON Sample
```json
{
  "price": 549.00,
  "quantityInStock": 10,
  "sku": "PHONE-RED-256GB",
  "attributes": {
    "Storage": "256GB"
  }
}
```

---

## 2. Update a SKU
Update the price, stock, or attributes of an existing SKU. Overwriting price or stock is common for sales or restock events.

### Endpoint
**PATCH** `/v2/products/{productId}/variant-groups/{groupId}/skus/{skuId}`

### JSON Sample
```json
{
  "price": 529.00,
  "discount": 10,
  "quantityInStock": 25
}
```
*Note: Partial update applies—only provide the fields you want to change (e.g., price or stock level).*

---

## 3. Remove a SKU
Deletes a specific SKU from its variant group.

### Endpoint
**DELETE** `/v2/products/{productId}/variant-groups/{groupId}/skus/{skuId}`

---

## Field Descriptions

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `price` | double | Yes | Base SKU price (must be greater than 1). |
| `discount` | double | No | Optional discount percentage (0-100%). |
| `quantityInStock`| int | Yes | Number of units available for purchase. |
| `sku` | string | No | Your internal Stock Keeping Unit identifier. |
| `attributes` | map | No | Additional sub-dimensions (e.g., `{"RAM": "8GB"}`). |
