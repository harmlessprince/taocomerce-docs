---
title: Delete Category
---

# Delete Category

##  Description
The **Delete Category** API allows users to delete a category the have selected or created from their list of categories.

- **Authenticated Users**: Must provide a valid JWT token.
- The `X-MerchantId` header is **mandatory** for all requests.

##  Endpoint
**PATCH** `/v1/tenant-categories/:categoryId`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN", 
  "X-MerchantId": "YOUR_MERCHANT_ID",
  "Content-Type": "application/json"
}
```

##  Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/tenant-categories/67b1eba52950d47e85cf54f4', {
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
    "message": "Category deleted",
    "status": true
}
```

## 📤 Sample 404 Response (Success)
```json
{
    "status": false,
    "message": "Category now found"
}
```