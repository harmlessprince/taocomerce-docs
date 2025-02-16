---
title: Show Customer
---

# Show Customer

## 📌 Description
This API allows client to retrieve details of a specific customer by its ID.

## 🔗 Endpoint
- **URL:** `/v1/customers/{customerId}`
- **Method:** `GET`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN",
  "X-TenantId": "YOUR_TENANT_ID",
  "Content-Type": "application/json"
}
```

## 📡 Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/customers/679f8f5a3b5f2173201c2582", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_JWT_TOKEN",
    "X-TenantId": "YOUR_TENANT_ID",
    "Content-Type": "application/json"
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

## ✅ Sample 200 Response (Success)
```json
{
    "data": {
        "id": "67b20a5edd84ed390426c09f",
        "email": "customer@yopmail.com",
        "fullName": null,
        "phoneNumber": null,
        "address": null,
        "createdAt": "2025-02-16T16:55:10.289",
        "updatedAt": "2025-02-16T16:55:10.289"
    },
    "message": "Customer retrieved successfully",
    "status": true
}
```

## ❌ Sample 404 Response (Not Found Error)
```json
{
  "status": false,
  "message": "Customer not found"
}
```

## 🔗 Next Steps
- Learn more about [Adding a Customer](./add-customer.md)
- Learn more about [Updating a Customer](./update-customer.md)
- Learn more about [Deleting a Customer](./delete-customer.md)

