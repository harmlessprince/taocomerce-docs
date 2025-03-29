---
title: Customer Registration
---

# Customer Registration

## 📌 Description
The **Customer Registration API** allows new users to create an account in the system. Upon successful registration, the user receives a unique customer ID.

## 🔗 Endpoint
**POST** `/v1/customers/signup`

## 🛠️ Required Headers
```json
{
  "X-TenantId": "YOUR_TENANT_ID",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
| Parameter      | Type   | Required | Description |
|---------------|--------|----------|-------------|
| `email`       | string | Yes      | The customer's email address. |
| `password`    | string | Yes      | The password for the account. |
| `fullName`    | string | No       | The full name of the customer. |
| `phoneNumber` | string | No       | The phone number of the customer. |
| `address`     | string | No       | The address of the customer. |

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/customers/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: "customer@gmail.com",
    password: "securepassword",
    fullName: "John Doe",
    phoneNumber: "+1234567890",
    address: "123 Main St, Lagos"
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "Customer Registration successful",
    "data": {
        "id": "67a5f3986c2d1176bcd03023",
        "email": "customer@gmail.com",
        "fullName": null,
        "phoneNumber": null,
        "address": null
    }
}
```

## ❌ Sample 422 Response (Validation Error)
```json
{
    "status": false,
    "message": "Validation error",
    "errors": {
        "password": "password can not be empty"
    }
}
```

## 🔗 Next Steps
- [Login As Business Owner](../authentication/login-as-store-owner.md)
- [Login As Customer](../authentication/login-as-customer.md)
