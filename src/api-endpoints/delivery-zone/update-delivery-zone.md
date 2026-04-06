---
title: Update Delivery Zone
---

# Update Delivery Zone

## Description
This API allows merchants to update an existing delivery zone's details, such as its name, fee, estimated delivery time, or the states and areas it covers.

## Endpoint
- **URL:** `/v1/delivery-zones/{id}`
- **Method:** `PUT`

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

## 📥 Request Body
The request body follows the same structure as the [Create Delivery Zone](./create-delivery-zone.md) API.

### DeliveryZoneRequest DTO

| Field                   | Type   | Required | Description                                                                 |
|-------------------------|--------|----------|-----------------------------------------------------------------------------|
| `name`                  | string | Yes      | The updated name of the delivery zone.                                      |
| `estimatedDeliveryTime` | string | No       | Updated estimated delivery time.                                            |
| `fee`                   | double | Yes      | Updated delivery fee (must be 0 or greater).                                 |
| `stateAreas`            | list   | Yes      | Updated list of states and areas. [More Info](#statearearequest-dto)        |

### StateAreaRequest DTO
<details>
  <summary>State Area Request</summary>
  <table border="1">
    <thead>
      <tr>
        <th>Field</th>
        <th>Type</th>
        <th>Required</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>state</code></td>
        <td>string</td>
        <td>Yes</td>
        <td>The name of the state (e.g., "Lagos").</td>
      </tr>
      <tr>
        <td><code>areas</code></td>
        <td>list</td>
        <td>Yes</td>
        <td>A list of area names within the state.</td>
      </tr>
    </tbody>
  </table>
</details>

## Example API Call (Using Fetch)
```javascript
fetch('https://api.shopsynch.com/v1/delivery-zones/dz-12345', {
  method: 'PUT',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantApiKey': 'MERCHANT_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Lagos Mainland Updated",
    estimatedDeliveryTime: "1 business day",
    fee: 1800.00,
    stateAreas: [
      {
        state: "Lagos",
        areas: ["Ikeja", "Surulere", "Yaba", "Maryland", "Oshodi"]
      }
    ]
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

## ✅ Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "Delivery zone updated successfully",
    "data": {
        "id": "dz-12345",
        "name": "Lagos Mainland Updated",
        "fee": 1800.0,
        "estimatedDeliveryTime": "1 business day",
        "stateAreas": [
            {
                "state": "Lagos",
                "areas": ["Ikeja", "Surulere", "Yaba", "Maryland", "Oshodi"]
            }
        ]
    }
}
```

## ❌ Sample 404 Response (Not Found)
```json
{
    "status": false,
    "message": "Delivery zone not found"
}
```
