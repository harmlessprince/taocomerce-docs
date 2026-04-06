---
title: Delete Delivery Zone
---

# Delete Delivery Zone

## Description
This API allows merchants to delete an existing delivery zone by its unique ID. Deleting a zone will remove its associated delivery fees and areas from the system.

## Endpoint
- **URL:** `/v1/delivery-zones/{id}`
- **Method:** `DELETE`

## Path Parameters
| Parameter | Type   | Description                          |
|-----------|--------|--------------------------------------|
| `id`      | string | The unique ID of the delivery zone. |

## Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Example API Call (Using Fetch)
```javascript
fetch('https://api.shopsynch.com/v1/delivery-zones/dz-12345', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantApiKey': 'MERCHANT_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

## ✅ Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "Delivery zone deleted successfully",
    "data": null
}
```

## ❌ Sample 404 Response (Not Found)
```json
{
    "status": false,
    "message": "Delivery zone not found"
}
```
