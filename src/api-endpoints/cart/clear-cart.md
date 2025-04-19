---
title: Clear Cart
---

# Clear Cart

##  Description
The **Clear Cart** API allows users to remove all items from their cart.

- **Authenticated Users**: Must provide a valid JWT token.
- **Guest Users**: Must provide a `sessionId` to track the cart.
- The `X-MerchantApiKey` header is **mandatory** for all requests.

##  Endpoint
**DELETE** `/v1/carts/clear`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN", // For authenticated users
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

##  Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/carts/clear', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantApiKey': 'MERCHANT_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "message": "Cart cleared successfully",
    "status": true
}
```

##  Next Steps
- [List Cart Items](./list-cart-items.md)
- [Add Item to Cart](./add-item-to-cart.md)
- [Remove Item from Cart](./remove-cart-item.md)
