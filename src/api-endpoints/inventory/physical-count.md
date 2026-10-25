---
title: Physical Stock Count
---

# Physical Stock Count

Use this endpoint during warehouse audits and stocktaking to record the exact physical quantity on hand. The system automatically computes discrepancies against current recorded inventory and writes an audit trail.

## Endpoint
**PATCH** `/v1/inventory/{id}/count`

## Authentication
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Path parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | string | Yes | Unique identifier of the inventory record. |

## Request body

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `countedQuantity` | integer | Yes | Actual counted physical stock (minimum `0`). |
| `notes` | string | No | Reason or comments regarding discrepancies. |

```json
{
  "countedQuantity": 50,
  "notes": "Annual physical stocktaking audit reconciliation."
}
```

## Responses

### 200 OK
```json
{
  "status": true,
  "message": "Physical stock count recorded successfully.",
  "data": {
    "id": "67c1c012d43a5c1234567822",
    "onHandQty": 50,
    "reservedQty": 2,
    "availableQty": 48,
    "reorderPoint": 10,
    "updatedAt": "2026-03-08T15:00:00Z"
  }
}
```
