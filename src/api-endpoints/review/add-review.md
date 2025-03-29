---
title: Add Product Review
---

# Add Review

## 📌 Description
This API allows users to add a review for a specific product by providing a rating, comment, and product ID.

## 🔗 Endpoint
- **URL:** `/v1/reviews`
- **Method:** `POST`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantId": "YOUR_MERCHANT_ID",
  "Content-Type": "application/json"
}
```

## 📥 Request Body

| Field Name   | Type   | Required | Description |
|--------------|--------|----------|-------------|
| `rating`     | Integer | Yes (1-5) | The rating given to the product (1 to 5). |
| `comment`    | String  | Yes      | The comment describing the review. |
| `productId`  | String  | Yes      | The ID of the product being reviewed. |

## 📡 Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/reviews", {
  method: "POST",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantId": "YOUR_MERCHANT_ID",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "rating": 5,
    "comment": "Excellent product! Highly recommended.",
    "productId": "12345",
    "userId": "67890"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

## ✅ Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "Review added successfully",
    "data": {
        "id": "679f8f5a3b5f2173201c2582",
        "createdDate": "2025-02-08T10:30:00",
        "rating": 5,
        "comment": "Excellent product! Highly recommended.",
        "user": {
            "id": "679f8f5a3b5f2173201cjsjs",
            "fullName": "John Doe"
        },
        "product": {
            "id": "679f8f5a3b5f2173201c2582",
            "name": "Product Name",
            "description": "product description"
        }
    }
}
```

## ❌ Sample 404 Response (Not Found Error)
```json
{
  "status": false,
  "message": "Product not found"
}
```

## 🔗 Next Steps
- Learn more about [Fetching Reviews](./fetch-reviews.md)
- Learn more about [Updating Reviews](./hide-review.md)

