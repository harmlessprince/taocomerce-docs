---
title: Generate Cart Session ID
---

# Generate Cart Session ID

## 📌 Description
The **Generate Cart Session ID** API provides a unique session ID for guest users to track their cart. The generated session ID is valid for **7 days** and must be included in subsequent cart-related requests.

## 🔗 Endpoint
**GET** `/v1/generate/session/id`

## 🛠️ Required Headers
No authentication is required for this endpoint.

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://shopsyncapi.taoforge.org/v1/generate/session/id', {
  method: 'GET'
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "data": {
        "sessionId": "6cb7ce1f-9360-4e63-a91d-422b89fe2341",
        "expiresAt": "2025-02-10T10:01:30.129971"
    },
    "message": "Success",
    "status": true
}
```

## 🔗 Next Steps
- [Add Item to Cart](./add-item-to-cart.md)
- [Remove Item from Cart](./remove-cart-item.md)
- [Fetch Cart Details](./list-cart-items.md)
