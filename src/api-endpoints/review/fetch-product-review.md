---
title: Fetch Single Product Reviews
---

# Fetch Product Reviews

## 📌 Description
This API retrieves all reviews for a specific product using the product's unique ID.

## 🔗 Endpoint
- **URL:** `{{url}}/v1/reviews/product/679f8f5a3b5f2173201c2582`
- **Method:** `GET`

## Query Parameters

| Parameter            | Type   | Description |
|----------------------|--------|-------------|
| `status` | String | filter reviews by (`ACTIVE` or `HIDDEN`). Default: `ACTIVE`. |

## 🛠️ Required Headers
```json
{
  "X-TenantId": "YOUR_TENANT_ID",
  "Content-Type": "application/json"
}
```

## 📡 Example API Call (Using Fetch)
```javascript
fetch("{{url}}/v1/reviews/product/679f8f5a3b5f2173201c2582", {
  method: "GET",
  headers: {
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
    "message": "Reviews retrieved successfully",
    "data": [
        {
            "id": "abc679f8f5a3b5f2173201c2582123",
            "createdDate": "2025-02-08T10:30:00",
            "rating": 5,
            "comment": "Excellent product! Highly recommended.",
            "user": {
                "id": "678679f8f5a3b5f2173201c258290",
                "name": "John Doe"
            }
        },
        {
            "id": "def679f8f5a3b5f2173201c2582456",
            "createdDate": "2025-02-07T09:15:00",
            "rating": 4,
            "comment": "Great value for the price.",
            "user": {
                "id": "123679f8f5a3b5f2173201c258245",
                "name": "Jane Smith"
            }
        }
    ]
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
- Learn more about [Adding a Review](./add-review.md)
- Learn more about [Updating a Review](./hide-review.md)