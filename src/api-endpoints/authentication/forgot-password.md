---
title: Customer Forgot Password
---

##  Description
The **Forgot Password API** allows registered customers to request for reset password token. Once this is initiated, they will get
an email that contains the token to reset there password.

The token will be attached to the supplied client URL as a query parameter ?token="sample-token".

By default the token expires after 1 hour.

##  Endpoint
**POST** `/v1/password/forgot/request/customer`

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
| `email`   | string | Yes      | The registered email of the customer. |
| `clientUrl`| string | Yes      | Your url to redirect the customer to in there email. |
| `expiresIn`| string | No      | How long you want the token to last in seconds(Default 3600 secs). e.g 300 (5min) |

### Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/password/forgot/request/customer', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-MerchantApiKey': 'MERCHANT_API_KEY'
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
    "message": "Password reset link sent successfully.",
    "status": true
}
```


##  Next Steps
- [Forgot Password](./forgot-password.md)
- [Reset Password](./reset-password.md)
- [Retrieve User Profile](./user-profile.md)