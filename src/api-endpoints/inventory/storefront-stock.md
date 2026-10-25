---
title: Storefront Real-Time Stock Availability
---

# Storefront Real-Time Stock Availability

Use these endpoints on public storefront product and SKU pages to display real-time available stock and low-stock indicators to customers without exposing internal warehouse records.

---

## 1. Product Stock Availability

Returns the aggregate available quantity across active warehouses for a product.

### Endpoint
**GET** `/v1/inventory/product/{productId}/storefront`

### Authentication
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.
- No user bearer token required.

### Path parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `productId` | string | Yes | Unique identifier of the product. |

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Stock retrieved successfully.",
  "data": {
    "productId": "679f8f5a3b5f2173201c2582",
    "availableQuantity": 42,
    "inStock": true,
    "lowStock": false
  }
}
```

---

## 2. SKU Stock Availability

Returns available stock for a specific SKU option of a variable product.

### Endpoint
**GET** `/v1/inventory/product/{productId}/sku/{skuId}/storefront`

### Authentication
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.
- No user bearer token required.

### Path parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `productId` | string | Yes | Unique identifier of the product. |
| `skuId` | string | Yes | Unique identifier of the specific SKU. |

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Stock retrieved successfully.",
  "data": {
    "productId": "679f8f5a3b5f2173201c2582",
    "skuId": "679f8f5a3b5f2173201c2583",
    "availableQuantity": 15,
    "inStock": true,
    "lowStock": true
  }
}
```
