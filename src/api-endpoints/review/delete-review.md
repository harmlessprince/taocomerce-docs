---
title: Delete Product Review
---

# Delete Review

## 📌 Description
This API allows shop owners to delete a product review by its unique ID.

## 🔗 Endpoint
- **URL:** `/v1/reviews/{reviewId}`
- **Method:** `DELETE`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantId": "YOUR_MERCHANT_ID",
  "Content-Type": "application/json"
}
```

## 📡 Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/reviews/679f8f5a3b5f2173201c2582", {
  method: "DELETE",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantId": "YOUR_MERCHANT_ID",
    "Content-Type": "application/json"
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

## ✅ Sample 200 Response (Success)
```json
{
  "status": true,
  "message": "Review deleted successfully"
}
```

## ❌ Sample 404 Response (Not Found)
```json
{
  "status": false,
  "message": "Review not found"
}
```

## 🔗 Next Steps
- Learn more about [Adding a Review](./add-review.md)
- Learn more about [Fetching Product Reviews](./fetch-product-review.md)

