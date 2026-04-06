---
title: Fetch Delivery Zones
---

# Fetch Delivery Zones

## Description
This API retrieves a list of all delivery zones created by the merchant. This information is useful for displaying delivery options and calculating delivery costs during checkout.

## Endpoint
- **URL:** `/v1/delivery-zones`
- **Method:** `GET`

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
fetch('https://api.shopsynch.com/v1/delivery-zones', {
  method: 'GET',
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
    "message": "Delivery zones retrieved successfully",
    "data": [
        {
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
        },
        {
            "id": "dz-67890",
            "name": "Abuja",
            "fee": 2500.0,
            "estimatedDeliveryTime": "3-5 business days",
            "stateAreas": [
                {
                    "state": "FCT",
                    "areas": ["Garki", "Wuse", "Maitama"]
                }
            ]
        }
    ]
}
```
