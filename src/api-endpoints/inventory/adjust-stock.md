---
title: Adjust Stock
---

# Adjust Stock

Records a stock movement against an inventory record. Every adjustment is logged to the [Inventory Log](./inventory-logs.md) with the action type, the user who made it, and an optional reference.

## Endpoint

**PATCH** `/v1/inventory/{id}/adjust`

## Required Headers

```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Path Parameters

| Parameter | Description |
| :--- | :--- |
| `id` | The ID of the inventory record to adjust. |

## Request Parameters

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `qty` | integer | Yes | The quantity to change. Use a **positive** number to add stock, a **negative** number to remove stock. |
| `action` | string | Yes | The reason for the stock change. See action types below. |
| `reference` | string | No | An external reference such as an order ID or purchase order number. |
| `notes` | string | No | A human-readable note explaining the adjustment. |

## Stock Action Types

| Action | When to Use |
| :--- | :--- |
| `RECEIVED` | Stock received from a supplier or purchase order. |
| `SOLD` | Stock consumed by a fulfilled customer order. |
| `ADJUSTED` | Manual correction to fix a discrepancy (e.g., after a physical count). |
| `DAMAGED` | Stock written off as damaged or scrapped. |
| `RETURNED` | Stock returned by a customer. |

> **Note:** `RESERVED` and `RELEASED` are managed through the dedicated [Reserve & Release](./reserve-release-stock.md) endpoints, not here.

## 📥 Request Samples

### Receiving new stock from a supplier

```json
{
  "qty": 100,
  "action": "RECEIVED",
  "reference": "PO-2024-0042",
  "notes": "November restock from supplier"
}
```

### Writing off damaged goods

```json
{
  "qty": -3,
  "action": "DAMAGED",
  "notes": "3 units damaged during transit"
}
```

### Manual correction after stock count

```json
{
  "qty": -2,
  "action": "ADJUSTED",
  "notes": "Physical count showed 2 fewer units than system record"
}
```

## ✅ Sample 200 Response (Success)

```json
{
  "status": true,
  "data": {
    "id": "inv_xyz789",
    "productId": "prod_abc123",
    "warehouseId": "wh_abc123",
    "warehouseName": "Lagos Main Warehouse",
    "onHandQty": 200,
    "reservedQty": 5,
    "availableQty": 195,
    "lastStockAdjusted": "2024-12-01T14:30:00Z",
    "lastAdjustedBy": "user_merchant_001"
  }
}
```

## ❌ Sample Error Response

```json
{
  "status": false,
  "message": "Adjustment would result in negative stock. Current on-hand: 3, requested change: -5."
}
```

## Next Steps

- [Reserve & Release Stock](./reserve-release-stock.md)
- [Inventory Logs](./inventory-logs.md)
