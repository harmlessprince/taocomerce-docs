---
title: Customer Login
---

##  Description
The **Customer Login API** allows registered customers to authenticate and receive a JWT token for secure access to protected resources.

##  Endpoint
**POST** `/v1/auth/login/customer`

##  Required Headers
```json
{
  "Content-Type": "application/json",
  "X-MerchantApiKey": "MERCHANT_API_KEY"
}
```

## 📥 Request Body
| Parameter  | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `email`   | string | Yes      | The registered email of the user. |
| `password`| string | Yes      | The password for authentication. |

### Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/auth/login/customer', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-MerchantApiKey': 'MERCHANT_API_KEY'
  },
  body: JSON.stringify({
    email: "system@yopmail.com",
    password: "password"
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "user": {
        "id": "679e88fddded25b3ca5dd5xxf",
        "email": "customer@yopmail.com",
        "fullName": "tao adewuyi",
        "phoneNumber": "0907XXXXXXXX",
        "address": "address of user"
    },
    "token": "jwtoken",
    "expiresIn": 86400000
}
```

## ❌ Sample 400 Response (Bad Request - Incorrect Credentials)
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

##  Next Steps
- [Forgot Password](./forgot-password.md)
- [Reset Password](./reset-password.md)
- [Retrieve User Profile](./user-profile.md)