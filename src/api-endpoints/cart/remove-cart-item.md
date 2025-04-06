---
title: Remove Cart Item
---

# Remove Cart Item

##  Description
The **Remove Cart Item** API allows users to remove a specific item from their cart.

- **Authenticated Users**: Must provide a valid JWT token.
- **Guest Users**: Must provide a `sessionId` to track the cart.
- The `X-MerchantId` header is **mandatory** for all requests.

##  Endpoint
**PATCH** `/v1/carts/remove/{carItemId}`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN", // For authenticated users
  "X-MerchantId": "YOUR_MERCHANT_ID",
  "Content-Type": "application/json"
}
```

##  Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/carts/remove/679f8f5a3b5f2173201c2582', {
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
    "message": "Item Removed from Cart",
    "status": true
}
```

##  Next Steps
- [Clear Cart](./clear-cart.md)
- [List Cart Items](./list-cart-items.md)
- [Add Item to Cart](./add-item-to-cart.md)