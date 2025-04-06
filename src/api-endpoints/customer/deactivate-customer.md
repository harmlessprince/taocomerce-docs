---
title: Deactivate Customer
---

# Deactivate Customer

##  Description
The **Deactivate Customer** API allows client users to deactivate a customer, this prevents the customer from login in to your application.

##  Endpoint
**PATCH** `/v1/customers/{customerId}/deactivate`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
None


##  Example API Call (Fetch or Axios)
```javascript
fetch('https://api.shopsynch.com/v1/customers/67a5ff5cb6ac842d1241d096/deactivate', {
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
    "message": "Customer deactivated successfully",
    "status": true
}
```


##  Next Steps
- [User Login](./activate-customer.md)
- [Retrieve User Profile](../authentication/user-profile.md)
