---
title: Google Authentication
---

# Google Authentication

## Description
ShopSynch now supports Google Authentication for both **Merchants** and **Customers**. This allows users to sign up or log in using their Google accounts seamlessly.

There are two primary ways to integrate Google Authentication:
1. **Server-Side Flow (Redirect)**: The user is redirected to Google's consent screen and then back to your storefront.
2. **Client-Side Flow (ID Token Verification)**: Your application uses a client-side SDK (like Firebase or Google Identity Services) to obtain an `idToken`, which is then verified by the ShopSynch backend.

---

## 🚀 Option 1: Server-Side Flow (Redirect)

This flow is handled by redirecting the user to a ShopSynch endpoint, which initiates the OAuth2 process with Google.

### 1. Initiate Authentication
Redirect the user to the appropriate "initiate" URL based on their role.

#### **For Merchants**
- **Endpoint**: `GET /v1/auth/social/google/merchant/initiate`
- **Description**: Redirects the merchant to Google's consent page to link their account or provision a new store.

#### **For Customers**
- **Endpoint**: `GET /v1/auth/social/google/customer/initiate`
- **Query Parameter**:
  - `tenantId` (String, Required): The unique ID of the store the customer is logging into.
- **Description**: Redirects the customer to Google's consent page specifically for that store.

### 2. Handle Callback
After the user grants permission, Google redirects them back to the ShopSynch backend, which then redirects the user to your configured storefront callback URL with the following query parameters:

- `token`: The JWT session token.
- `refreshToken`: The token used to refresh the session.
- `expiresIn`: The expiration time of the token in milliseconds.

---

## 🛡️ Option 2: Client-Side Flow (Verify ID Token)

If you are using a mobile SDK or a frontend library that already provides a Google `idToken`, you can verify it directly with the backend.

### **For Merchants**
- **Endpoint**: `POST /v1/auth/social/google/merchant/verify`
- **Required Headers**: `Content-Type: application/json`
- **Request Body**:
```json
{
  "idToken": "GOOGLE_ID_TOKEN"
}
```

### **For Customers**
- **Endpoint**: `POST /v1/auth/social/google/customer/verify`
- **Required Headers**: `Content-Type: application/json`
- **Request Body**:
```json
{
  "idToken": "GOOGLE_ID_TOKEN",
  "tenantId": "STORE_TENANT_ID"
}
```

---

## 📥 Response Structure (For Verify API)
Upon successful verification, the API returns a standard success response with the user's profile and session tokens.

### ✅ Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "Login successful",
    "data": {
        "user": {
            "id": "67e81c4b7522ca08019e1ca4",
            "email": "user@example.com",
            "fullName": "John Doe",
            "role": "customer"
        },
        "token": "eyJhbGciOiJIUzUxMiJ9...",
        "refreshToken": "7c8d9e...",
        "expiresIn": 86400000
    }
}
```

### ❌ Sample 400 Response (Error)
```json
{
    "status": false,
    "message": "Invalid Google ID token"
}
```

##  Next Steps
- [Login As Business Owner](./login-as-store-owner.md)
- [Login As Customer](./login-as-customer.md)
