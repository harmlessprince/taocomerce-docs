---
title: Low Stock Alerts
---

# Low Stock Alerts

Returns all inventory records where `availableQty` is at or below the configured `reorderLevel`. Use this endpoint to identify products that need restocking.

> **Tip:** Set `reorderLevel` and `reorderQty` when [creating an inventory record](./create-inventory.md) or via [stock adjustment](./adjust-stock.md) to make full use of this endpoint.

## Endpoint

**GET** `/v1/inventory/low-stock`

## Required Headers

```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

## ✅ Sample 200 Response (Success)

```json
{
  "status": true,
  "data": [
    {
      "id": "inv_001",
      "productId": "prod_abc123",
      "skuId": null,
      "warehouseId": "wh_abc123",
      "warehouseName": "Lagos Main Warehouse",
      "onHandQty": 8,
      "reservedQty": 0,
      "availableQty": 8,
      "reorderLevel": 10,
      "reorderQty": 50,
      "lastStockAdjusted": "2024-11-20T09:00:00Z"
    },
    {
      "id": "inv_sku_007",
      "productId": "prod_phone_789",
      "skuId": "sku_blue_128gb",
      "warehouseId": "wh_abc123",
      "warehouseName": "Lagos Main Warehouse",
      "onHandQty": 3,
      "reservedQty": 1,
      "availableQty": 2,
      "reorderLevel": 5,
      "reorderQty": 20,
      "variantAttributes": {
        "Color": "Blue",
        "Storage": "128GB"
      },
      "lastStockAdjusted": "2024-11-25T14:00:00Z"
    }
  ]
}
```

## Next Steps

- [Adjust Stock](./adjust-stock.md)
- [List & Query Inventory](./list-inventory.md)
