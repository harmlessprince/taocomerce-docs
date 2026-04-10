---
title: Reserve & Release Stock
---

# Reserve & Release Stock

Reservations allow you to temporarily hold stock for a pending order without removing it from your records. The `availableQty` decreases when stock is reserved, preventing overselling. When the order is cancelled or stock is no longer needed, releasing the reservation returns it to available.

---

## 1. Reserve Stock

Moves units from `availableQty` into `reservedQty`. Use this when an order is placed and you want to hold the stock while payment is being processed.

### Endpoint

**PATCH** `/v1/inventory/{id}/reserve`

### Required Headers

```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

### Path Parameters

| Parameter | Description |
| :--- | :--- |
| `id` | The ID of the inventory record. |

### Request Parameters

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `qty` | integer | Yes | Number of units to reserve. Must be greater than 0 and no more than current `availableQty`. |
| `reference` | string | No | Order ID or reference to associate with this reservation. |
| `notes` | string | No | Optional note. |

### 📥 Request Sample

```json
{
  "qty": 2,
  "reference": "ORD-20241201-0099",
  "notes": "Reserved for customer checkout"
}
```

### ✅ Sample 200 Response (Success)

```json
{
  "status": true,
  "data": {
    "id": "inv_xyz789",
    "onHandQty": 50,
    "reservedQty": 7,
    "availableQty": 43
  }
}
```

### ❌ Sample Error Response

```json
{
  "status": false,
  "message": "Cannot reserve 5 units. Only 3 units are currently available."
}
```

---

## 2. Release Stock

Returns reserved units back to `availableQty`. Use this when an order is cancelled, payment fails, or the reservation is no longer needed.

### Endpoint

**PATCH** `/v1/inventory/{id}/release`

### Required Headers

```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

### Path Parameters

| Parameter | Description |
| :--- | :--- |
| `id` | The ID of the inventory record. |

### Request Parameters

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `qty` | integer | Yes | Number of reserved units to release. |
| `reference` | string | No | The original order reference. |
| `notes` | string | No | Optional note. |

### 📥 Request Sample

```json
{
  "qty": 2,
  "reference": "ORD-20241201-0099",
  "notes": "Order cancelled — releasing hold"
}
```

### ✅ Sample 200 Response (Success)

```json
{
  "status": true,
  "data": {
    "id": "inv_xyz789",
    "onHandQty": 50,
    "reservedQty": 5,
    "availableQty": 45
  }
}
```

---

## Next Steps

- [Adjust Stock](./adjust-stock.md)
- [Inventory Logs](./inventory-logs.md)
