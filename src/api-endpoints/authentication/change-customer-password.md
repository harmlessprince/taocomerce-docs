---
title: Change Customer Password
---

##  Description
The **Change Customer Password API** allows an authenticated customer to update their password. The customer must provide their current password and a new password to complete the process. <br> 
Ensure the new password meets the required security standards.


##  Endpoint
**PATCH** `/v1/change/password/customer`

##  Required Headers
```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantId": "YOUR_MERCHANT_ID"
}
```

## 📥 Request Body
| Parameter  | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `currentPassword`   | string | Yes      | The current password. |
| `newPassword`| string | Yes      | The new password. |
| `confirmPassword`| string | Yes      | Confirm password to make sure user is certain of the newly inputted password |

### Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/change/password/merchant', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-MerchantId': 'YOUR_MERCHANT_ID',
    'Authorization': 'Bearer JWT_TOKEN'
  },
  body: JSON.stringify({
    currentPassword: "password",
    newPassword: "123456",
    confirmPassword: "123456"
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "message": "Password changed successfully.",
    "status": true
}
```


##  Next Steps
- [Forgot Password](./forgot-password.md)
- [Reset Password](./reset-password.md)
- [Retrieve User Profile](./user-profile.md)
