---
title: Passwordless Authentication
---

# Passwordless Authentication

## Description
ShopSynch offers a **Passwordless Authentication** mode, allowing users to log in securely without needing to remember or enter a password. This is achieved via **Email Magic Links** or **WhatsApp OTPs**.

Passwordless authentication is available for both **Merchants** and **Customers**.

---

## 🚀 Step 1: Initiate Authentication
The first step is to request a login link or verification code.

### 1. Unified Initiation
Initiate both email and phone (WhatsApp) authentication simultaneously.

- **Endpoint**: `POST /v1/auth/passwordless/initiate`
- **Request Body**:
```json
{
  "email": "user@example.com",
  "phoneNumber": "+2348000000000",
  "userType": "MERCHANT", // or "CUSTOMER"
  "businessName": "My Store" // Optional for new merchants
}
```

### 2. Email-Only Initiation
Request a login link sent directly to the user's email.

- **Endpoint**: `POST /v1/auth/passwordless/initiate/email`
- **Request Body**:
```json
{
  "email": "user@example.com"
}
```

### 3. Phone-Only Initiation
Request a verification code (OTP) sent via WhatsApp.

- **Endpoint**: `POST /v1/auth/passwordless/initiate/phone`
- **Request Body**:
```json
{
  "phoneNumber": "+2348000000000"
}
```

---

## 🛡️ Step 2: Verify and Login
Once the user receives the link or code, they must verify it to complete the login process.

### **For Merchants**

#### **Verify Email (Magic Link)**
When the merchant clicks the link in their email, your application should extract the token and call this endpoint.
- **Endpoint**: `POST /v1/auth/passwordless/merchant/verify-email`
- **Request Body**:
```json
{
  "email": "merchant@example.com",
  "token": "MAGIC_LINK_TOKEN"
}
```

#### **Verify Phone (WhatsApp OTP)**
The merchant enters the 6-digit code received on WhatsApp.
- **Endpoint**: `POST /v1/auth/passwordless/merchant/verify-phone`
- **Request Body**:
```json
{
  "phoneNumber": "+2348000000000",
  "code": "123456"
}
```

### **For Customers**

#### **Verify Email (Magic Link)**
- **Endpoint**: `POST /v1/auth/passwordless/customer/verify-email`
- **Required Headers**: `X-Session-Id` (Optional, for cart migration)
- **Request Body**:
```json
{
  "email": "customer@example.com",
  "token": "MAGIC_LINK_TOKEN"
}
```

#### **Verify Phone (WhatsApp OTP)**
- **Endpoint**: `POST /v1/auth/passwordless/customer/verify-phone`
- **Required Headers**: `X-Session-Id` (Optional, for cart migration)
- **Request Body**:
```json
{
  "phoneNumber": "+2348000000000",
  "code": "123456"
}
```

---

## 📥 Response Structure
Upon successful verification, the API returns the user's profile and JWT session tokens.

### ✅ Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "Email verified successfully.",
    "data": {
        "user": {
            "id": "67e81c4b752..." ,
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

##  Next Steps
- [Google Authentication](./google-authentication.md)
- [Login As Business Owner](./login-as-store-owner.md)
- [Login As Customer](./login-as-customer.md)
