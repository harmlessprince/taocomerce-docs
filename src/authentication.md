---
title: Authentication
---

##  Why is Authentication Important?
Authentication is a core aspect of securing your e-commerce platform. It ensures that only authorized users can access sensitive operations, such as managing carts, placing orders, and retrieving user-specific information. Our API uses a combination of **Tenant ID** and **JWT authentication** to provide a secure and scalable solution.

## 🔑 Understanding Tenant ID
### What is a Tenant ID?
A **Tenant ID** is a unique identifier assigned to each business upon signing up on our platform. It allows our API to isolate and manage data securely for different users and businesses.

### Why is Tenant ID Needed?
- **Multi-Tenant System**: Ensures that each business or developer has a separate and secure environment.
- **Data Segmentation**: Prevents unauthorized access between different accounts.
- **Scalability**: Enables businesses to grow without interference from others.
- **Mandatory for All API Requests**: Every API request must include the `X-MerchantId` header to specify which business the request belongs to.

### How to Get Your Tenant ID?
1. **Sign Up** on our platform.
2. **Log in** with your credentials.
3. Navigate to the **Profile Page** where you will find your **Tenant ID**.
4. Use the Tenant ID in your API requests by adding it to the request header:
   ```json
   {
     "X-MerchantId": "YOUR_MERCHANT_ID"
   }
   ```

## 🔒 Why Use JWT Authentication?
### What is JWT?
JWT (JSON Web Token) is a secure way to authenticate users and ensure only authorized individuals can access protected resources.

### When is JWT Required?
- **For Authenticated Users**: Any request related to user-specific operations (like checkout, profile updates, or order management) requires a valid JWT token.
- **For Guest Users**: A session ID is used instead of a JWT for cart tracking.

### How to Use JWT in API Requests?
Once logged in, users receive a JWT token that should be included in the `Authorization` header:
```json
{
  "Authorization": "Bearer JWT_TOKEN"
}
```

## 🚀 Summary
| Feature        | Tenant ID | JWT Authentication |
|--------------|------------|---------------------|
| Required For | All API requests | User-specific operations (checkout, profile updates, order management) |
| Purpose      | Identifies business | Verifies user authentication |
| How to Get It | From Profile Page | After logging in |
| Example Header | `X-MerchantId: YOUR_MERCHANT_ID` | `Authorization: Bearer JWT_TOKEN` |

By combining **Tenant ID** and **JWT**, our API ensures **security, scalability, and efficient data management** for every user. 

##  Next Steps
- [Get Started](get-started.md) with API integration.
<!-- - Explore available [API Endpoints](api-endpoints/README.md). -->
