---
title: Get Authenticated Merchant Profile
---

# Get Authenticated Merchant Profile

##  Description
The **Get Authenticated Merchant Profile** API retrieves the details of the currently authenticated user. This endpoint requires a valid JWT token.

##  Endpoint
**GET** `/v1/users/profile`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN"
}
```

##  Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/auth/users/profile', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "profile retrieved",
    "data": {
        "id": "679e88f60ed25b3ca5dd530f",
        "email": "system@yopmail.com",
        "fullName": "tao adewuyi",
        "phoneNumber": "090765541234",
        "address": "44 Ogunsolu street",
        "role": {
            "name": "Merchant",
            "slug": "merchant"
        },
        "tenantId": "SYSTEM-0971648-2-2-2025",
        "merchantId": "SYSTEM-0971648-2-2-2025"
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

##  Next Steps
- [Login as Business Owner](./login-as-store-owner.md)
- [Login as Customer](./login-as-customer.md)
- [Forgot Password](./forgot-password.md)
- [Reset Password](./reset-password.md)