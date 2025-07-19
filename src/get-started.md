---
title: Getting Started with the ShopSynch API
---


## Sign Up & Authentication
To use the ShopSynch API, you must sign up on our platform. Register at [ShopSynch](https://shopsynch.com/signup). Upon successful registration, you will be provided an **API key**, which can be found in your dashboard  [Merchant API Keys](https://shopsynch.com/dashboard/api-keys).

### **Authentication**
There are two sides to authentication, the part that requires just your API Key and one that requires both your API Key and Jwt.

For pages that requires public access, e.g Product list, adding item to cart etc. Supplying just your API Key is sufficient.

For pages that are not publicly accessible, you will need to supply issued JWT Token upon login and API Key for your dashboard or customers who choose to login on your platform.

A customer can complete their shopping process as guest, without the need to create an account or login.

### **Merchant API KEY Usage**
For every request the `X-MerchantApiKey` header is **mandatory**. You will get an error if the `X-MerchantApiKey` is not supplied. 



## Making API Requests
### **Example Request (Authenticated User)**
```bash
curl -X GET "https://api.shopsynch.com/v1/countries?name=nigeria" \
     -H "Authorization: Bearer JWT_TOKEN" \
     -H "X-MerchantApiKey: MERCHANT_API_KEY"
```

## Response Structure
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
    "error": "unauthenticated",
    "message": "Full authentication is required to access this resource",
    "status": false,
    "statusCode": 401
}
```

## 🚀 Next Steps
- Learn more about [Authentication](authentication.md).
