---
title: Warehouse
---

# Warehouse

Warehouses are physical or logical locations where your inventory is stored. Every inventory record in ShopSynch belongs to a warehouse — this is the foundation of the stock management system.

## How It Fits In

```
Warehouse ──► Inventory ──► Product (or SKU)
```

- A **warehouse** holds stock.
- An **inventory record** links a product (or SKU) to a warehouse with a specific quantity.
- **Product V2** automatically creates inventory records in your default warehouse when a product is created.

> **Note:** Product V2 requires at least one warehouse. If you have not created a warehouse before creating your first V2 product, the system automatically creates a default warehouse called "Main Warehouse" (code: `WH-01`) for you.

## Warehouse Types

The `type` field describes the nature of the warehouse. This is informational and does not change API behavior.

| Type | Description |
| :--- | :--- |
| `OWNED` | A warehouse you operate directly. |
| `SUPPLIER` | Stock held at a supplier's location. |
| `CONSIGNMENT` | Stock held on consignment at a partner location. |
| `THIRD_PARTY_LOGISTICS` | Stock managed by a third-party logistics provider (3PL). |

## Required Permission

All warehouse endpoints require merchant authentication. The calling user must have inventory management permissions enabled for the tenant.

## Next Steps

- [Create a Warehouse](./create-warehouse.md)
- [List Warehouses](./list-warehouses.md)
- [Update a Warehouse](./update-warehouse.md)
- [Inventory Overview](../inventory/README.md)
