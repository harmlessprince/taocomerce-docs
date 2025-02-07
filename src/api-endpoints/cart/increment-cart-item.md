---
title: Increment Cart Item Quantity
---

# Increment Cart Item Quantity

## 📌 Description
The **Increment Cart Item Quantity** API increases the quantity of a specific item in the user's cart.

- **Authenticated Users**: Must provide a valid JWT token.
- **Guest Users**: Must provide a `sessionId` to track the cart.
- The `X-TenantId` header is **mandatory** for all requests.

## 🔗 Endpoint
**PATCH** `/v1/carts/item/increment/quantity/{cartItemId}`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN", // For authenticated users
  "X-TenantId": "YOUR_TENANT_ID"
}
```

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://api.yourdomain.com/v1/carts/item/increment/quantity/67a6261a320f3f7368dfec35', {
  method: 'PATCH',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'X-TenantId': 'YOUR_TENANT_ID'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "message": "Item Quantity Incremented",
    "status": true
}
```

## 🔗 Next Steps
- [Decrement Cart Item](./decrement-cart-item.md)
- [List Cart Items](./list-cart-items.md)
- [Remove Item from Cart](./remove-cart-item.md)