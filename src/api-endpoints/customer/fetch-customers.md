---
title: Fetch Customers
---

# Fetch Promo Ads

## 📌 Description
This API retrieves a list of customers filtered by email, name and paginated using a cursor.

## 🔗 Endpoint
- **URL:** `/v1/customers`
- **Method:** `GET`
- **sortFieldParam:** `CREATED_AT, NAME, EMAIL`
## Query Parameters:

| Parameter            | Type   | Description |
|----------------------|--------|-------------|
| `sortDirectionParam` | String | Sorting direction (`ASC` or `DESC`). Default: `ASC`. |
| `sortFieldParam`     | String | Field to sort results by (e.g., `NAME`). Default: `NAME`. |
| `name`              | String | Filter customers by name. |
| `email`          | String | Filter customers by email. |
| `cursor`  | String | No       | The cursor for pagination.    (2025-02-11T18:21:53Z&)            |
| `limit`   | Integer| Yes      | The number of promo ads to retrieve (min: 1, max: 20). |

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN", 
  "X-TenantId": "YOUR_TENANT_ID", //optional
  "Content-Type": "application/json"
}
```

## 📡 Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/customers", {
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
        "data": [
            {
                "id": "67b20a5edd84ed390426c09f",
                "email": "customer@yopmail.com",
                "fullName": null,
                "phoneNumber": null,
                "address": null,
                "createdAt": "2025-02-16T16:55:10.289",
                "updatedAt": "2025-02-16T16:55:10.289"
            }
        ],
        "nextCursor": null
    },
    "message": "Customers retrieved successfully",
    "status": true
}
```


## 🔗 Next Steps
- Learn more about [Adding a Customer](./add-customer.md)
- Learn more about [Updating a Customer](./update-customer.md)
- Learn more about [Deleting a Customer](./delete-customer.md)

