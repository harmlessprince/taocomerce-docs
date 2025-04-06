---
title: Merchant Login
---

##  Description
The **Merchant Login API** allows registered merchant or store owner to authenticate and receive a JWT token for secure access to protected resources.

##  Endpoint
**POST** `/v1/auth/login`

##  Required Headers
```json
{
  "Content-Type": "application/json"
}
```

## 📥 Request Body
| Parameter  | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `email`   | string | Yes      | The registered email of the user. |
| `password`| string | Yes      | The password for authentication. |

### Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
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
        "email": "system@yopmail.com",
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