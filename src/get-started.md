---
title: Getting Started with the ShopSynch API
---


## 📝 Sign Up & Authentication
To use the ShopSynch API, you must sign up on our platform. Register at [ShopSynch](https://shopsynch.com/signup). Upon successful registration, you will be assigned a **Tenant ID**, which can be found in their [Profile](https://shopsynch.com/merchant/profile) .

### **Authentication**
- API requests require authentication via JWT.
- Upon login, a JWT token is issued, containing the **Tenant ID**.
- Clients should include the **Tenant ID** in the request headers using `X-MerchantId`.

### **Tenant ID Usage**
- If the request is to a **public API**, the `X-MerchantId` header is **mandatory**.
- If the client is authenticated, the system extracts the **Tenant ID** from the JWT token.
- However, it is **recommended** to always pass the `X-MerchantId` header explicitly.

## 🔑 Making API Requests
### **Example Request (Authenticated User)**
```bash
curl -X GET "https://shopsyncapi/v1/countries?name=nigeria" \
     -H "Authorization: Bearer JWT_TOKEN" \
     -H "X-MerchantId: YOUR_MERCHANT_ID"
```

## 📦 Response Structure
The API uses a consistent response format:

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

### **Error Response Example**
```json
{
    "message": "Some Error response",
    "status": false
}
```


### **Invalid URL Response Example**
```json
{
    "status": false,
    "message": "No static resource v1/users/profile/updatedkd."
}
```


### **Unauthenticated Response Example**
```json
{
    "path": "/v1/users/profile",
    "error": "unauthenticated",
    "message": "Full authentication is required to access this resource",
    "status": false,
    "statusCode": 401
}
```
### **Unauthenticated Response Example**
```json
{
    "type": "about:blank",
    "title": "Bad Request",
    "status": 400,
    "detail": "Bad credentials",
    "instance": "/v1/auth/login",
    "description": "The username or password is incorrect"
}
```

## 🚀 Next Steps
- Learn more about [Authentication](authentication.md).
- Explore available [API Endpoints](api-endpoints/README.md).
