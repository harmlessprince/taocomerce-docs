---
title: Inventory Logs
---

# Inventory Logs

Returns a paginated audit trail of every stock movement across your store. Each entry records what changed, why, when, and who made the change.

Every [stock adjustment](./adjust-stock.md), [reservation](./reserve-release-stock.md), or system-triggered change (such as order fulfilment) automatically generates a log entry.

## Endpoint

**GET** `/v1/inventory/logs`

## Required Headers

```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

## Query Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `page` | integer | `0` | Page number (zero-based). |
| `limit` | integer | `50` | Number of log entries per page. |

## ✅ Sample 200 Response (Success)

```json
{
  "status": true,
  "data": {
    "content": [
      {
        "id": "log_001",
        "inventoryId": "inv_xyz789",
        "productId": "prod_abc123",
        "tenantId": "tenant_xyz",
        "action": "RECEIVED",
        "qtyChange": 100,
        "reference": "PO-2024-0042",
        "notes": "November restock from supplier",
        "adjustedBy": "user_merchant_001",
        "logDate": "2024-12-01",
        "timestamp": "2024-12-01T14:30:00Z"
      },
      {
        "id": "log_002",
        "inventoryId": "inv_xyz789",
        "productId": "prod_abc123",
        "tenantId": "tenant_xyz",
        "action": "SOLD",
        "qtyChange": -1,
        "reference": "ORD-20241201-0099",
        "notes": null,
        "adjustedBy": "system",
        "logDate": "2024-12-01",
        "timestamp": "2024-12-01T16:45:00Z"
      }
    ],
    "page": 0,
    "limit": 50,
    "totalElements": 340
  }
}
```

## Log Action Types

| Action | Description |
| :--- | :--- |
| `RECEIVED` | Stock added from a supplier or purchase order. |
| `SOLD` | Stock consumed by a fulfilled customer order. |
| `ADJUSTED` | Manual stock correction. |
| `RESERVED` | Stock held for a pending order. |
| `RELEASED` | Reserved stock returned to available. |
| `DAMAGED` | Stock written off as damaged or scrapped. |
| `RETURNED` | Stock returned by a customer. |

## Next Steps

- [Adjust Stock](./adjust-stock.md)
- [Reserve & Release Stock](./reserve-release-stock.md)
