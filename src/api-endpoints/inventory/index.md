---
title: Inventory Overview
---

# Inventory Management

The Inventory system tracks stock levels for your products across one or more warehouses. It is the single source of truth for stock availability in **Product V2**.

## How It Fits In

```
Product V2
  └── ProductSku (for VARIABLE products)
        └── Inventory record (per warehouse)
              └── Warehouse
```

- **SIMPLE / DIGITAL products** → one inventory record per warehouse (linked at the product level).
- **VARIABLE products** → one inventory record per SKU per warehouse.
- **BUNDLE products** → no inventory records (a bundle is composed of other products; stock is tracked at the component level).

## Stock Quantities

| Field | Description |
| :--- | :--- |
| `onHandQty` | Total units physically in stock. |
| `reservedQty` | Units held for pending orders (not yet shipped). |
| `availableQty` | Units available for purchase. Computed as `onHandQty − reservedQty`. |

## Endpoints

| Endpoint | Method | Path | Description |
|---|---|---|---|
| [List & Query Inventory](./list-inventory.md) | GET | `/v1/inventory` | List store inventory records |
| [Get Inventory Record](./inventory-detail-and-batches.md) | GET | `/v1/inventory/{id}` | Record details, logs, and batches |
| [Storefront Stock](./storefront-stock.md) | GET | `/v1/inventory/product/{id}/storefront` | Public real-time available stock |
| [Adjust Stock](./adjust-stock.md) | PATCH | `/v1/inventory/{id}/adjust` | Increase or decrease stock quantity |
| [Physical Stock Count](./physical-count.md) | PATCH | `/v1/inventory/{id}/count` | Audit and record physical stock count |
| [Reserve & Release Stock](./reserve-release-stock.md) | PATCH | `/v1/inventory/{id}/reserve` | Hold or release stock for orders |
| [Low Stock Alerts](./low-stock.md) | GET | `/v1/inventory/low-stock` | List items below reorder threshold |
| [Inventory Logs](./inventory-logs.md) | GET | `/v1/inventory/logs` | Audit trail of all stock movements |
| [Create Inventory Record](./create-inventory.md) | POST | `/v1/inventory` | Manual inventory creation |
