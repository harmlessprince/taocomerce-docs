---
title: List Warehouses
---

# List Warehouses

Returns all warehouses belonging to your store.

## Endpoint

**GET** `/v1/warehouses`

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
    },
    {
      "id": "wh_def456",
      "tenantId": "tenant_xyz",
      "name": "Abuja Satellite Store",
      "code": "ABJ-01",
      "address": "5 Gana Street, Maitama, Abuja",
      "isDefault": false,
      "active": true,
      "type": "OWNED",
      "createdAt": "2024-11-15T09:00:00Z",
      "updatedAt": "2024-11-15T09:00:00Z"
    }
  ]
}
```

## Next Steps

- [Create a Warehouse](./create-warehouse.md)
- [Update a Warehouse](./update-warehouse.md)
