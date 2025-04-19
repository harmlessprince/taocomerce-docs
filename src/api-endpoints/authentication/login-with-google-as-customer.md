---
title: Customer Login Using Firebase
---

##  Description
The **Customer Login Using Firebase** is for Login-ing customers using google auth via the *firstbase sdk*. If the customer is not registered before, the customer will be automatically registered, but no welcome email is sent.

With firebase integration, you should enable google sign up in your account so customers will be able to signup or login using their google account.




##  Endpoint
**POST** ` /v1/auth/customer/login/google`

##  Required Headers
```json
{
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
| Parameter      | Type   | Required | Description |
|---------------|--------|----------|-------------|
| `accessToken`       | string | Yes      | The OAuth 2.0 access token obtained from Firebase Authentication. |


##  Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com//v1/auth/social/google/login/customer', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
     accessToken: "ya29.a0AeXRPp5X81P0rm5iUIrPtuZRZ18trklk1ZvHTohNMIdkQVZ-KfRaeOwYS3dQuCDPe3FfQloRktHOwhsrZeoSac9iS99zSB3u-uOoHhdUdIbjSzOoKvkt8wgV_EZwBMUZhMMF6IRL7BnlLp2XV9UQPzB6YljTC6a3SzE3qWTlSAaCgYKAaISARMSFQHGX2Mi0ay7W0C6o3ejoQKH4ZdqNg0177"
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "customer": {
        "id": "67e81c4b7522ca08019e1ca4",
        "email": "sample@gmail.com",
        "fullName": "John Doe",
        "phoneNumber": null,
        "address": null,
        "status": "active",
        "createdAt": "2025-03-29T17:14:03.338",
        "updatedAt": "2025-03-29T17:14:03.338"
    },
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJtZXJjaGFudENvZGUiOiJTWVNURU0tMDk3MTY0OC0yLTItMjAyNSIsInJvbGUiOiJjdXN0b21lciIsIm1lcmNoYW50SWQiOiI2NzlmMmRkNzVmNzAzYzc5OWY2NzM0MTUiLCJ0ZW5hbnRJZCI6IjY3OWYyZGQ3NWY3MDNjNzk5ZjY3MzQxNSIsInRlbmFudENvZGUiOiJTWVNURU0tMDk3MTY0OC0yLTItMjAyNSIsImp0aSI6IjY3ZTgxYzRiNzUyMmNhMDgwMTllMWNhNCIsInN1YiI6InJlYWxvbGFtaWxla2FuQGdtYWlsLmNvbSIsImlhdCI6MTc0MzI2OTU4MCwiZXhwIjoxNzQzMzU1OTgwfQ.LBsuZRyvr5xTDc3OHMFwVeVqcFurYrz_LaCc_fjifi-pk7QgEoYoZTYpDcoz-a9gYa6OvfqfPboKh3rAJ116Bw",
    "expiresIn": 86400000
}
```

## ❌ Sample 400 Response
```json
{
    "status": false,
    "message": "Invalid access token"
}
```

##  Next Steps
- [Login As Business Owner](../authentication/login-as-store-owner.md)
- [Login As Customer](../authentication/login-as-customer.md)
