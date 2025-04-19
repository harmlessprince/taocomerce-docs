---
title: Authentication
---

# Authentication

##  Description
The **Authentication API** enables users to securely log in, manage their credentials, and retrieve their profile information. It includes endpoints for user login, password recovery, and profile retrieval.

### **Key Features:**
- **User Login:** Authenticate users and generate a JWT token.
- **Forgot Password:** Allow users to request a password reset.
- **Reset Password:** Enable users to update their password using a reset token.
- **Retrieve User Profile:** Fetch user profile details.

### **Headers Requirement:**
- All authentication-related endpoints require the `X-MerchantApiKey` header **except** for retrieving the user profile.
- The `Authorization` header must be included for protected requests.

##  Next Steps
- [Customer Login](./login-as-customer.md)
- [Merchant Login](./login-as-store-owner.md)
- [Forgot Password](./forgot-password.md)
- [Reset Password](./reset-password.md)
- [Retrieve User Profile](./user-profile.md)