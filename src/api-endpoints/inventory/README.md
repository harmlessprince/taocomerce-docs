---
title: Inventory
---

# Inventory

The Inventory system tracks stock levels for your products across one or more warehouses. It is the single source of truth for stock availability in **Product V2**.

> **Important:** Inventory is required for all Product V2 workflows. When you create a V2 product, the system automatically creates inventory records in your default warehouse. You do not need to call the inventory API manually for standard product creation.

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

## Stock Quantities Explained

Every inventory record tracks three values:

| Field | Description |
| :--- | :--- |
| `onHandQty` | Total units physically in stock. |
| `reservedQty` | Units held for pending orders (not yet shipped). |
| `availableQty` | Units available for purchase. Computed as `onHandQty − reservedQty`. |

## Permissions

Access to inventory endpoints is controlled by three permission levels:

| Permission | What It Allows |
| :--- | :--- |
| `can_read_inventory` | View stock levels across warehouses. |
| `can_update_inventory` | Adjust stock quantities. |
| `can_manage_inventory` | Full control — create records, set reorder levels, manage warehouses. |

## Next Steps

- [Create an Inventory Record](./create-inventory.md)
- [List & Query Inventory](./list-inventory.md)
- [Adjust Stock](./adjust-stock.md)
- [Reserve & Release Stock](./reserve-release-stock.md)
- [Low Stock Alerts](./low-stock.md)
- [Inventory Logs](./inventory-logs.md)
- [Warehouse Overview](../warehouse/README.md)
