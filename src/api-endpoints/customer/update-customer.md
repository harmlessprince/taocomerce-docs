---
title: Update Customer Profile
---

# Update Customer Profile

## 📌 Description
The **Update Customer Profile** API allows authenticated users to modify their profile details, such as full name, phone number, and address. This endpoint requires a valid JWT token.

## 🔗 Endpoint
**PATCH** `/v1/customers/profile/update`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
| Parameter      | Type   | Required | Description |
|---------------|--------|----------|-------------|
| `fullName`    | string | No       | The full name of the customer. |
| `phoneNumber` | string | No       | The phone number of the customer. |
| `address`     | string | No       | The updated address of the customer. |

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://shopsyncapi.taoforge.org/v1/customers/profile/update', {
  method: 'PATCH',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fullName: "Customer Name",
    phoneNumber: "090XXXXXXXXX",
    address: "customer address"
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "Customer profile updated",
    "data": {
        "id": "67a5ff5cb6ac842d1241d096",
        "email": "customer@yopmail.com",
        "fullName": "Customer Name",
        "phoneNumber": "090XXXXXXXXX",
        "address": "customer address"
    }
}
```

## ❌ Sample 401 Response (Unauthorized)
```json
{
    "path": "/v1/customers/profile/update",
    "error": "unauthenticated",
    "message": "Full authentication is required to access this resource",
    "status": false,
    "statusCode": 401
}
```

## 🔗 Next Steps
- [User Login](../authentication/login.md)
- [Retrieve User Profile](../authentication/user-profile.md)
