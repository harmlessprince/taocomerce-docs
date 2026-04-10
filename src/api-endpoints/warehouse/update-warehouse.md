---
title: Update Warehouse
---

# Update Warehouse

Updates the details of an existing warehouse. All fields are optional — only include what you want to change.

## Endpoint

**PATCH** `/v1/warehouses/{id}`

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
| `id` | The ID of the warehouse to update. |

## Request Parameters

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | string | No | Updated warehouse name. |
| `code` | string | No | Updated short identifier. Must remain unique per store. |
| `address` | string | No | Updated physical address. |
| `isDefault` | boolean | No | Set to `true` to make this the default warehouse. Setting this to `true` will remove the default flag from any other warehouse. |
| `active` | boolean | No | Set to `false` to deactivate a warehouse. Deactivated warehouses are excluded from new inventory assignments. |

## 📥 Request Sample

```json
{
  "name": "Lagos Main Warehouse (Expanded)",
  "isDefault": true,
  "active": true
}
```

## ✅ Sample 200 Response (Success)

```json
{
  "status": true,
  "data": {
    "id": "wh_abc123",
    "tenantId": "tenant_xyz",
    "name": "Lagos Main Warehouse (Expanded)",
    "code": "LGS-01",
    "address": "14 Adeola Odeku Street, Victoria Island, Lagos",
    "isDefault": true,
    "active": true,
    "type": "OWNED",
    "createdAt": "2024-11-01T10:00:00Z",
    "updatedAt": "2024-12-01T14:22:00Z"
  }
}
```

## ❌ Sample Error Response

```json
{
  "status": false,
  "message": "Warehouse not found."
}
```

## Next Steps

- [List Warehouses](./list-warehouses.md)
- [Inventory Overview](../inventory/README.md)
