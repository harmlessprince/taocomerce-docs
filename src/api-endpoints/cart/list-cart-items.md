---
title: List Cart Items
---

# List Cart Items

## 📌 Description
The **List Cart Items** API retrieves all items currently in the user's cart.

- **Authenticated Users**: Must provide a valid JWT token.
- **Guest Users**: Must provide a `sessionId` to track the cart.
- The `X-TenantId` header is **mandatory** for all requests.

## 🔗 Endpoint
**GET** `/v1/carts/items`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN", // For authenticated users
  "X-TenantId": "YOUR_TENANT_ID"
}
```

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://api.yourdomain.com/v1/carts/items', {
  method: 'GET',
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
    "data": [
        {
            "id": "67a6261a320f3f7368dfec35",
            "productId": "679f8f5a3b5f2173201c2582",
            "variationId": null,
            "variationPriceId": null,
            "userId": null,
            "name": "LG 45 Inch Signature OLed R Class Rollable 4K Smart Tv",
            "image": "https://m.media-amazon.com/images/I/51ObdXZHQTL._AC_UY1100_.jpg",
            "price": 20000.0,
            "newPrice": 16200.0,
            "ramSize": null,
            "size": "Large",
            "sku": null,
            "quantityInStock": 13,
            "discount": 10.0,
            "color": "RedBlack",
            "rating": null,
            "sessionId": "ee5bfa88-56a2-4551-ae1d-d753984ae1d9",
            "quantity": 1,
            "storage": null
        }
    ],
    "message": "Success",
    "status": true
}
```

## 🔗 Next Steps
- [Add Item to Cart](./add-item-to-cart.md)
- [Remove Item from Cart](./remove-cart-item.md)