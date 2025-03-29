---
title: Activate Customer
---

# Deactivate Customer

## 📌 Description
The **Activate Customer** API allows client to activate a customer that has been deactivated, one the account is activated, the customer will regain the ability to login to the system

## 🔗 Endpoint
**PATCH** `/v1/customers/{customerId}/deactivate`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
None


## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/customers/67a5ff5cb6ac842d1241d096/activate', {
  method: 'PATCH',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "data": null,
    "message": "Customer activated successfully",
    "status": true
}
```


## 🔗 Next Steps
- [User Login](./activate-customer.md)
- [Retrieve User Profile](../authentication/user-profile.md)
