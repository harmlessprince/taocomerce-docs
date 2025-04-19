---
title: Fetch Selected Merchant Product Categories
---


# Fetch Product Categories

##  Description

This endpoint retrieves a list of categories available that a client has either created or selected.

 Endpoint

**GET** `/v1/tenant-categories`

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
fetch('{{url}}/v1/tenant-categories', {
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
            "id": "679f65ad2208962713771e1d",
            "name": "Rafia",
            "slug": "rafia"
        },
        {
            "id": "679f600a8732b302e1cd088b",
            "name": "Snail",
            "slug": "snail"
        }
    ]
}
```

##  Next Steps
- Learn more about [Creating/Selecting Merchant Category](./add-category.md)
- Learn more about [Fetch Selected/Created Merchant Category](./fetch-selected-categories.md)