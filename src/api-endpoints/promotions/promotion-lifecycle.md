---
title: Promotion Lifecycle Actions
---

# Promotion Lifecycle Actions

Use these endpoints to transition promotional campaigns through their active, paused, archived, and draft states, or to duplicate existing promotions.

## Common Authentication & Headers
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

---

## 1. Publish Promotion

Activates a draft promotion so customers can redeem it on the storefront.

### Endpoint
**POST** `/v1/promotions/{promotionId}/publish`

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Promotion published successfully",
  "data": {
    "id": "67a12b34d43a5c1234567890",
    "name": "Easter 20% Off",
    "status": "ACTIVE"
  }
}
```

---

## 2. Pause Promotion

Temporarily deactivates a running promotion. Existing cart sessions will no longer apply the discount.

### Endpoint
**POST** `/v1/promotions/{promotionId}/pause`

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Promotion paused successfully",
  "data": {
    "id": "67a12b34d43a5c1234567890",
    "name": "Easter 20% Off",
    "status": "PAUSED"
  }
}
```

---

## 3. Resume Promotion

Reactivates a previously paused promotion.

### Endpoint
**POST** `/v1/promotions/{promotionId}/resume`

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Promotion resumed successfully",
  "data": {
    "id": "67a12b34d43a5c1234567890",
    "name": "Easter 20% Off",
    "status": "ACTIVE"
  }
}
```

---

## 4. Archive Promotion

Permanently deactivates and archives a promotion. Archived promotions cannot be redeemed or resumed.

### Endpoint
**POST** `/v1/promotions/{promotionId}/archive`

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Promotion archived successfully",
  "data": {
    "id": "67a12b34d43a5c1234567890",
    "status": "ARCHIVED"
  }
}
```

---

## 5. Duplicate Promotion

Creates a new draft copy of an existing promotion including its discount rules and targets.

### Endpoint
**POST** `/v1/promotions/{promotionId}/duplicate`

### Responses (200 OK)
```json
{
  "status": true,
  "message": "Promotion duplicated successfully",
  "data": {
    "id": "67c19f00d43a5c1234567899",
    "name": "Easter 20% Off (Copy)",
    "status": "DRAFT"
  }
}
```
