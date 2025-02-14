---
title: Add Item to Cart
---

# Add Item to Cart

## 📌 Description
The **Add Item to Cart** API allows users to add products to their cart. 

- **Authenticated Users**: Must provide a valid JWT token.
- **Guest Users**: Must provide a `sessionId` to track the cart.
- The `X-TenantId` header is **mandatory** for all requests.

## 🔗 Endpoint
**POST** `/v1/carts/add`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN", // For authenticated users
  "X-TenantId": "YOUR_TENANT_ID",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
| Parameter          | Type    | Required | Description |
|-------------------|---------|----------|-------------|
| `productId`      | string  | Yes      | The unique ID of the product. |
| `variationId`    | string  | No       | The variation ID of the product, if applicable. |
| `variationPriceId` | string | No       | The variation price ID, if applicable. |
| `quantity`       | integer | Yes      | The number of items to add. Must be at least 1. |
| `sessionId`      | string  | Yes (for guest users) | The session ID for tracking guest user carts. |

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://shopsyncapi.taoforge.org/v1/carts/add', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'X-TenantId': 'YOUR_TENANT_ID',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    productId: "679f8f5a3b5f2173201c2582",
    quantity: 1,
    sessionId: "ee5bfa88-56a2-4551-ae1d-d753984ae1d9"
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "data": {
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
    },
    "message": "Success",
    "status": true
}
```

## 🔗 Next Steps
- [Remove Item from Cart](./remove-cart-item.md)
- [Fetch Cart Details](./list-cart-items.md)
