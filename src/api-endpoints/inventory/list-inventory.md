---
title: List & Query Inventory
---

# List & Query Inventory

Three endpoints are available for querying inventory, depending on how specific you need to be.

---

## 1. List All Inventory

Returns a paginated list of all inventory records for your store across all warehouses.

### Endpoint

**GET** `/v1/inventory`

### Required Headers

```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

### Query Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `page` | integer | `0` | Page number (zero-based). |
| `limit` | integer | `50` | Number of records per page. |

### ✅ Sample 200 Response (Success)

```json
{
  "status": true,
  "data": {
    "content": [
      {
        "id": "inv_001",
        "productId": "prod_abc123",
        "skuId": null,
        "warehouseId": "wh_abc123",
        "warehouseName": "Lagos Main Warehouse",
        "location": "A-01-1",
        "onHandQty": 100,
        "reservedQty": 5,
        "availableQty": 95,
        "reorderLevel": 20,
        "reorderQty": 50,
        "variantAttributes": {}
      }
    ],
    "page": 0,
    "limit": 50,
    "totalElements": 120
  }
}
```

---

## 2. Get Stock for a Product

Returns all inventory records for a specific product, across every warehouse it is stocked in.

### Endpoint

**GET** `/v1/inventory/product/{productId}`

### Path Parameters

| Parameter | Description |
| :--- | :--- |
| `productId` | The ID of the product. |

### ✅ Sample 200 Response (Success)

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
      "onHandQty": 80,
      "reservedQty": 5,
      "availableQty": 75
    },
    {
      "id": "inv_002",
      "productId": "prod_abc123",
      "skuId": null,
      "warehouseId": "wh_def456",
      "warehouseName": "Abuja Satellite Store",
      "onHandQty": 30,
      "reservedQty": 0,
      "availableQty": 30
    }
  ]
}
```

---

## 3. Get Stock for a Specific SKU

Returns inventory records for a specific SKU within a product (VARIABLE products only), across all warehouses.

### Endpoint

**GET** `/v1/inventory/product/{productId}/sku/{skuId}`

### Path Parameters

| Parameter | Description |
| :--- | :--- |
| `productId` | The ID of the product. |
| `skuId` | The ID of the SKU. |

### ✅ Sample 200 Response (Success)

```json
{
  "status": true,
  "data": [
    {
      "id": "inv_sku_001",
      "productId": "prod_phone_789",
      "skuId": "sku_red_256gb",
      "warehouseId": "wh_abc123",
      "warehouseName": "Lagos Main Warehouse",
      "onHandQty": 20,
      "reservedQty": 2,
      "availableQty": 18,
      "variantAttributes": {
        "Color": "Red",
        "Storage": "256GB"
      }
    }
  ]
}
```

---

## Next Steps

- [Adjust Stock](./adjust-stock.md)
- [Low Stock Alerts](./low-stock.md)
