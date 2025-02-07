---
title: Authentication
---

# Authentication

## 🔐 API Authentication Overview
The eCommerce API supports authentication using **Tenant ID** and **JWT tokens**. All API requests must be authenticated to ensure secure access.

### **Authentication Methods**
1. **Tenant ID (X-TenantId Header)**
   - Required for public API requests.
   - Must be included in the request header.
   - Assigned during user registration.

2. **JWT Token**
   - Issued upon user login.
   - Encodes the user's authentication details, including their **Tenant ID**.
   - If authenticated via JWT, the API extracts the **Tenant ID** from the token.

## 📌 Including Authentication in Requests
### **Using the X-TenantId Header**
For public API access, the `X-TenantId` header must be included.
```bash
curl -X GET   "{{BASE_URL}}/products" \
     -H "X-TenantId: YOUR_TENANT_ID"
```

### **Using JWT Token for Authentication**
When the user is logged in, API requests should include the JWT token in the `Authorization` header.
```bash
curl -X GET "https://api.yourdomain.com/orders" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### **Using Both JWT and X-TenantId** *(Recommended)*
Although the system extracts the **Tenant ID** from the JWT token, it is best practice to include `X-TenantId` explicitly.
```bash
curl -X GET "https://api.yourdomain.com/orders" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -H "X-TenantId: YOUR_TENANT_ID"
```

## 📦 Sample Responses
The API follows a consistent response format.

### **Successful Authentication Response**
```json
{
    "user": {
        "id": "679e88wsd60ed25b3ca5dd530f",
        "email": "email@yopmail.com",
        "fullName": "tao adewuyi",
        "phoneNumber": "string|null",
        "address": "string|null"
    },
    "token": "jwt signed token",
    "expiresIn": 86400000
}
```

### **Missing Authentication Response**
```json
{
    "status": false,
    "message": "Unauthorized. Missing X-TenantId Header"
}
```

## 🔗 Next Steps
- [Get Started](get-started.md) with API integration.
- Explore available [API Endpoints](api-endpoints/README.md).
