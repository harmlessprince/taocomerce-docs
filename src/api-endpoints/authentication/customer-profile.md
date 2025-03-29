---
title: Get Authenticated Customer Profile
---

# Get Authenticated Customer Profile

## 📌 Description
The **Get Authenticated Customer Profile** API retrieves the details of the currently authenticated customer. This endpoint requires a valid JWT token and X-TenantId header.

## 🔗 Endpoint
**GET** `/v1/customers/profile`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN",
  "X-TenantId": "YOUR_TENANT_ID",
  "Content-Type": "application/json"
}
```

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/customers/profile', {
  method: 'GET',
  headers: {
  "Authorization": "Bearer YOUR_JWT_TOKEN",
  "X-TenantId": "YOUR_TENANT_ID",
  "Content-Type": "application/json"
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
        "email": "customer@yopmail.com",
        "fullName": null,
        "phoneNumber": null,
        "address": null,
        "role": {
            "name": "Customer",
            "slug": "customer",
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
- [Login as Business Owner](./login-as-store-owner.md)
- [Login as Customer](./login-as-customer.md)
- [Forgot Password](./forgot-password.md)
- [Reset Password](./reset-password.md)