---
title: Create Warehouse
---

# Create Warehouse

Creates a new warehouse for your store. You can have multiple warehouses to represent different stock locations.

## Endpoint

**POST** `/v1/warehouses`

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
| `name` | string | Yes | A human-readable name for the warehouse (e.g., "Lagos Main Store"). |
| `code` | string | No | A short alphanumeric identifier (e.g., `LGS-01`). Auto-generated if not provided. Must be unique per store. |
| `address` | string | No | The physical address of the warehouse. |
| `isDefault` | boolean | No | Mark this warehouse as the default. New inventory records are assigned here automatically. Only one warehouse can be default at a time. |
| `type` | string | No | `OWNED`, `SUPPLIER`, `CONSIGNMENT`, or `THIRD_PARTY_LOGISTICS`. Defaults to `OWNED`. |

## 📥 Request Sample

```json
{
  "name": "Lagos Main Warehouse",
  "code": "LGS-01",
  "address": "14 Adeola Odeku Street, Victoria Island, Lagos",
  "isDefault": true,
  "type": "OWNED"
}
```

## ✅ Sample 200 Response (Success)

```json
{
  "status": true,
  "data": {
    "id": "wh_abc123",
    "tenantId": "tenant_xyz",
    "name": "Lagos Main Warehouse",
    "code": "LGS-01",
    "address": "14 Adeola Odeku Street, Victoria Island, Lagos",
    "isDefault": true,
    "active": true,
    "type": "OWNED",
    "createdAt": "2024-11-01T10:00:00Z",
    "updatedAt": "2024-11-01T10:00:00Z"
  }
}
```

## ❌ Sample Error Response

```json
{
  "status": false,
  "message": "A warehouse with code 'LGS-01' already exists for this store."
}
```

## Next Steps

- [List Warehouses](./list-warehouses.md)
- [Update a Warehouse](./update-warehouse.md)
