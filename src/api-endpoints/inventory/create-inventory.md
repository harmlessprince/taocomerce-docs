---
title: Create Inventory Record
---

# Create Inventory Record

Manually creates an inventory record linking a product (or SKU) to a warehouse with an initial stock quantity.

> **Note:** You do not need to call this endpoint when creating V2 products. The system automatically creates inventory records for SIMPLE, DIGITAL, and VARIABLE products at creation time. Use this endpoint when you need to add a product to an additional warehouse, or to set up inventory for edge cases not covered by auto-seeding.

## Endpoint

**POST** `/v1/inventory`

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
| `productId` | string | Yes | The ID of the product to track. |
| `skuId` | string | No | The SKU ID for VARIABLE products. Omit for SIMPLE and DIGITAL products. |
| `warehouseId` | string | Yes | The warehouse where this stock is held. |
| `initialQty` | integer | Yes | Starting stock quantity. Must be 0 or greater. |
| `location` | string | No | Shelf or bin location within the warehouse (e.g., `A-03-2`). |
| `reorderLevel` | integer | No | When `availableQty` falls to or below this number, the record appears in the low-stock report. |
| `reorderQty` | integer | No | Suggested quantity to order when restocking. |
| `variantAttributes` | map | No | For VARIABLE products: the variant dimensions for this SKU (e.g., `{"Color": "Red", "Storage": "256GB"}`). These mirror the SKU's own attributes. |

## 📥 Request Samples

### Adding a SIMPLE product to a second warehouse

```json
{
  "productId": "prod_abc123",
  "warehouseId": "wh_def456",
  "initialQty": 50,
  "location": "B-02-1",
  "reorderLevel": 10,
  "reorderQty": 30
}
```

### Adding a specific SKU to a warehouse

```json
{
  "productId": "prod_phone_789",
  "skuId": "sku_red_256gb",
  "warehouseId": "wh_abc123",
  "initialQty": 20,
  "location": "C-05-3",
  "reorderLevel": 5,
  "reorderQty": 15,
  "variantAttributes": {
    "Color": "Red",
    "Storage": "256GB"
  }
}
```

## ✅ Sample 200 Response (Success)

```json
{
  "status": true,
  "data": {
    "id": "inv_xyz789",
    "productId": "prod_abc123",
    "skuId": null,
    "tenantId": "tenant_xyz",
    "warehouseId": "wh_def456",
    "warehouseName": "Abuja Satellite Store",
    "location": "B-02-1",
    "onHandQty": 50,
    "reservedQty": 0,
    "availableQty": 50,
    "reorderLevel": 10,
    "reorderQty": 30,
    "variantAttributes": {},
    "createdAt": "2024-11-01T10:00:00Z",
    "updatedAt": "2024-11-01T10:00:00Z"
  }
}
```

## ❌ Sample Error Response

```json
{
  "status": false,
  "message": "An inventory record for this product already exists in the specified warehouse."
}
```

## Next Steps

- [Adjust Stock](./adjust-stock.md)
- [List & Query Inventory](./list-inventory.md)
