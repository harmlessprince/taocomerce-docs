---
title: Fetch Product Categories
---

# Fetch Product Categories

##  Description

This endpoint retrieves a list of categories available in the system.

 Endpoint

**GET** `/v1/categories`

### Query Parameters
| Parameter     | Type   | Description                                           |
|---------------|--------|-------------------------------------------------------|
| `name`        | string| Filter categories by name   |

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantId": "YOUR_MERCHANT_ID",
  "Content-Type": "application/json"
}
```

 Example API Call (Fetch or Axios)

```js
fetch('{{url}}/v1/categories', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantId': 'YOUR_MERCHANT_ID',
    'Content-Type': 'application/json',
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

Sample 200 Response (Success)

```json
{
    "status": true,
    "message": "success",
    "data": [
        {
            "id": "679e8cab72d06732223ab6b0",
            "name": "Clothing",
            "slug": "clothing"
        },
        {
            "id": "679e8cab72d06732223ab6b1",
            "name": "Book",
            "slug": "book"
        },
        {
            "id": "679e8d2e84c29f6d3c80eff2",
            "name": "Phone Cases",
            "slug": "phone_cases"
        }
    ]
}
```

##  Next Steps
- Learn more about [Creating/Selecting Merchant Category](./add-category.md)
- Learn more about [Fetch Selected/Created Merchant Category](./fetch-selected-categories.md)