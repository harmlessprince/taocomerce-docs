---
title: Decrease Cart Item Quantity
---

# Decrease Cart Item Quantity

## 📌 Description
The **Decrease Cart Item Quantity** API decreases the quantity of a specific item in the user's cart.

- **Authenticated Users**: Must provide a valid JWT token.
- **Guest Users**: Must provide a `sessionId` to track the cart.
- The `X-MerchantId` header is **mandatory** for all requests.

## 🔗 Endpoint
**PATCH** `/v1/carts/item/decrement/quantity/{cartItemId}`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN", // For authenticated users
  "X-MerchantId": "YOUR_MERCHANT_ID",
  "Content-Type": "application/json"
}
```

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/carts/item/decrement/quantity/67a6261a320f3f7368dfec35', {
  method: 'PATCH',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantId': 'YOUR_MERCHANT_ID',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "message": "Item Quantity Decremented",
    "status": true
}
```

## 🔗 Next Steps
- [Decrease Cart Item](./increment-cart-item.md)
- [List Cart Items](./list-cart-items.md)
- [Remove Item from Cart](./remove-cart-item.md)