---
title: Getting Started
---

# Getting Started with the eCommerce API

## 📝 Sign Up & Authentication
To use the eCommerce API, users must sign up on our platform. Register at [Coming Soon](https://comingsoon.com/signup). Upon successful registration, each user is assigned a **Tenant ID**, which can be found in their profile.

### **Authentication**
- API requests require authentication via JWT.
- Upon login, a JWT token is issued, containing the **Tenant ID**.
- Clients should include the **Tenant ID** in the request headers using `X-TenantId`.

### **Tenant ID Usage**
- If the request is to a **public API**, the `X-TenantId` header is **mandatory**.
- If the client is authenticated, the system extracts the **Tenant ID** from the JWT token.
- However, it is **recommended** to always pass the `X-TenantId` header explicitly.

## 🔑 Making API Requests
### **Example Request (Authenticated User)**
```bash
curl -X GET "{{url}}/v1/countries?name=nigeria" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -H "X-TenantId: YOUR_TENANT_ID"
```

## 📦 Response Structure
The API uses a consistent response format, as defined by the `CustomResponse<T>` class:

### **Successful Response Example**
```json
{
    "data": [
        {
            "createdAt": "2025-02-01T21:28:29.049",
            "updatedAt": "2025-02-01T21:28:29.049",
            "id": "679e91fd22079a5dc4eb75f4",
            "name": "Nigeria",
            "status": true,
            "states": null
        }
    ],
    "message": "Success",
    "status": true
}
```

## 🚀 Next Steps
- Learn more about [Authentication](authentication.md).
- Explore available [API Endpoints](api-endpoints/README.md).
