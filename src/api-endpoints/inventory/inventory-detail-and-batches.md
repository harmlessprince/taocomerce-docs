---
title: Inventory Record Details and Batches
---

# Inventory Record Details and Batches

Use these endpoints to retrieve detailed information for a specific inventory record, including its stock change audit logs and warehouse batches.

## Common Authentication & Headers
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

---

## 1. Get Inventory Record by ID

### Endpoint
**GET** `/v1/inventory/{id}`

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Inventory record retrieved successfully.",
  "data": {
    "id": "67c1c012d43a5c1234567822",
    "productId": "679f8f5a3b5f2173201c2582",
    "skuId": "679f8f5a3b5f2173201c2583",
    "warehouseId": "67b93a20d43a5c1234567890",
    "onHandQty": 50,
    "reservedQty": 2,
    "availableQty": 48,
    "reorderPoint": 10,
    "reorderQuantity": 20,
    "createdAt": "2026-02-15T09:00:00Z",
    "updatedAt": "2026-03-08T15:00:00Z"
  }
}
```

---

## 2. Get Inventory Logs by Inventory ID

Retrieves all recorded adjustments, reservations, and count changes for a specific inventory record.

### Endpoint
**GET** `/v1/inventory/{id}/logs`

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Inventory logs retrieved successfully.",
  "data": [
    {
      "id": "67c1c112d43a5c1234567833",
      "inventoryId": "67c1c012d43a5c1234567822",
      "action": "COUNT",
      "quantityChanged": 5,
      "previousQuantity": 45,
      "newQuantity": 50,
      "reason": "Annual physical stocktaking audit reconciliation.",
      "createdAt": "2026-03-08T15:00:00Z"
    }
  ]
}
```

---

## 3. Get Inventory Batches by Inventory ID

Retrieves batch information (batch numbers, expiry dates, supplier identifiers) associated with an inventory record.

### Endpoint
**GET** `/v1/inventory/{id}/batches`

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Inventory batches retrieved successfully.",
  "data": [
    {
      "id": "67c1c212d43a5c1234567844",
      "inventoryId": "67c1c012d43a5c1234567822",
      "batchNumber": "BATCH-2026-03A",
      "quantity": 50,
      "costPrice": 8500.00,
      "expiryDate": "2027-12-31T23:59:59Z"
    }
  ]
}
```
