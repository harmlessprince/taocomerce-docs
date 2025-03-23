---
title: Hide Product Review
---

# Hide Review

## 📌 Description
This API allows you to hide a product review by its unique ID. Once hidden, the review will no longer be visible to customers.

## 🔗 Endpoint
- **URL:** `/v1/reviews/hide/{reviewId}`
- **Method:** `PATCH`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN",
  "X-TenantId": "YOUR_TENANT_ID",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
None

## 📡 Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/reviews/hide/679f8f5a3b5f2173201c2582", {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer YOUR_JWT_TOKEN",
    "X-TenantId": "YOUR_TENANT_ID",
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
  "message": "Review hidden successfully"
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
- Learn more about [Fetching Product Reviews](./fetch-product-review.md)

