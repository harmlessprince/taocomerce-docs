---
title: Get Authenticated Client Profile
---

# Get Authenticated User Profile

## 📌 Description
The **Get Authenticated User Profile** API retrieves the details of the currently authenticated user. This endpoint requires a valid JWT token.

## 🔗 Endpoint
**GET** `/v1/users/profile`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://shopsyncapi.taoforge.org/v1/auth/users/profile', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "User profile retrieved",
    "data": {
        "id": "67a5ff5cb6ac842d1241d096",
        "email": "client@yopmail.com",
        "fullName": null,
        "phoneNumber": null,
        "address": null,
        "role": {
            "name": "Shop Owner",
            "slug": "shop_owner",
            "permissions": null
        },
        "tenantId": "YourTenantId"
    }
}
```

## ❌ Sample 401 Response (Unauthorized)
```json
{
    "status": false,
    "message": "Unauthorized. Missing or invalid token."
}
```

## 🔗 Next Steps
- [User Login](./login.md)
- [Forgot Password](./forgot-password.md)
- [Reset Password](./reset-password.md)