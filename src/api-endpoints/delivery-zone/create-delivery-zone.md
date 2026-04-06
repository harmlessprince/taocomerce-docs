---
title: Create Delivery Zone
---

# Create Delivery Zone

## Description
This API allows merchants to create a new delivery zone. A delivery zone defines the delivery fee and estimated delivery time for a specific set of states and their associated areas.

## Endpoint
**POST** `/v1/delivery-zones`

## Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
Here is a breakdown of each field in the `DeliveryZoneRequest` DTO:

### DeliveryZoneRequest DTO

| Field                   | Type   | Required | Description                                                                 |
|-------------------------|--------|----------|-----------------------------------------------------------------------------|
| `name`                  | string | Yes      | The name of the delivery zone (e.g., "Lagos Mainland").                     |
| `estimatedDeliveryTime` | string | No       | Estimated time for delivery (e.g., "2-3 business days").                    |
| `fee`                   | double | Yes      | The delivery fee for this zone (must be 0 or greater).                       |
| `stateAreas`            | list   | Yes      | A list of states and their corresponding areas included in this zone. [More Info](#statearearequest-dto) |

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
        <td>A list of names of areas within the state (e.g., ["Ikeja", "Surulere"]).</td>
      </tr>
    </tbody>
  </table>
</details>

## Example API Call (Using Fetch)
```javascript
fetch('https://api.shopsynch.com/v1/delivery-zones', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantApiKey': 'MERCHANT_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "Lagos Mainland",
    estimatedDeliveryTime: "1-2 business days",
    fee: 1500.00,
    stateAreas: [
      {
        state: "Lagos",
        areas: ["Ikeja", "Surulere", "Yaba", "Maryland"]
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
    "message": "Delivery zone created successfully",
    "data": {
        "id": "dz-12345",
        "name": "Lagos Mainland",
        "fee": 1500.0,
        "estimatedDeliveryTime": "1-2 business days",
        "stateAreas": [
            {
                "state": "Lagos",
                "areas": ["Ikeja", "Surulere", "Yaba", "Maryland"]
            }
        ]
    }
}
```

## ❌ Sample 400 Response (Validation Error)
```json
{
    "status": false,
    "message": "Validation failed",
    "errors": [
        {
            "field": "name",
            "message": "Zone name is required"
        },
        {
            "field": "fee",
            "message": "Delivery fee cannot be negative"
        }
    ]
}
```
