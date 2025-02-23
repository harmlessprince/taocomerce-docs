---
title: Customer Reset Password 
---

# Forgot Password 

## 📌 Description
The **Customer Reset Password API** allows you reset customer password by supplying the token sent to their email address.

## 🔗 Endpoint
**POST** `/v1/password/reset/customer`

## 🛠️ Required Headers
```json
{
  "Content-Type": "application/json",
  "X-TenantId": "YOUR_TENANT_ID"
}
```

## 📥 Request Body
| Parameter  | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `token`   | string | Yes      | The token sent to the customer email. |
| `newPassword`| string | Yes      | The customer new password. |
| `confirmPassword`| string | Yes      | Confirm password to make sure customer is certain of the newly inputted password |

### Example API Call (Fetch or Axios)
```javascript
fetch('https://shopsyncapi.taoforge.org/v1/password/reset/customer', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-TenantId': 'YOUR_TENANT_ID'
  },
  body: JSON.stringify({
    email: "customer@yopmail.com",
    clientUrl: "https://example.com/reset/password"
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "message": "Password has been reset successfully.",
    "status": true
}
```


## 📤 Sample 400 Response (Success)
```json
{
    "status": false,
    "message": "Invalid password reset token"
}
```


## 🔗 Next Steps
- [Forgot Password](./forgot-password.md)
- [Reset Password](./reset-password.md)
- [Retrieve User Profile](./user-profile.md)