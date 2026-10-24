---
title: Create Delivery Zone
---

# Create Delivery Zone

Use this endpoint to create a new delivery zone. A delivery zone defines the delivery fee and estimated delivery time for a specific country, states, and coverage areas.

## Endpoint
**POST** `/v1/delivery-zones`

## Authentication
- Requires merchant authentication: `Authorization: Bearer JWT_TOKEN`.
- Requires `X-MerchantApiKey: MERCHANT_API_KEY`.

## Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## Request body

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Name of the delivery zone (e.g. "Lagos Mainland"). |
| `fee` | number | Yes | Delivery fee for this zone. Must be 0 or greater. |
| `stateAreas` | array | Yes | List of states and their corresponding coverage areas. |
| `country` | string | No | Country name. Defaults to `"Nigeria"` if omitted. |
| `estimatedDeliveryTime` | string | No | Delivery duration estimate (e.g. "1-2 business days"). |
| `active` | boolean | No | Whether the zone is active immediately. Defaults to `true`. |

### `stateAreas` items
| Parameter | Type | Required | Description |
|---|---|---|---|
| `state` | string | Yes | Name of the state (e.g. "Lagos"). |
| `areas` | array of strings | Yes | Names of covered areas within the state. |

## Example request
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
    country: "Nigeria",
    fee: 1500.0,
    estimatedDeliveryTime: "1-2 business days",
    stateAreas: [
      {
        state: "Lagos",
        areas: ["Ikeja", "Surulere", "Yaba", "Maryland"]
      }
    ],
    active: true
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Response 200
```json
{
  "status": true,
  "message": "Delivery zone created successfully",
  "data": {
    "id": "67a6261a320f3f7368dfec99",
    "name": "Lagos Mainland",
    "country": "Nigeria",
    "fee": 1500.0,
    "estimatedDeliveryTime": "1-2 business days",
    "active": true,
    "stateAreas": [
      {
        "state": "Lagos",
        "areas": ["Ikeja", "Surulere", "Yaba", "Maryland"]
      }
    ],
    "overlappingZones": []
  }
}
```

## Error responses
| Status | Message |
|---|---|
| `400` | Please enter a name for the delivery zone. |
| `400` | Please specify the delivery fee. |
| `400` | Please select at least one state and its corresponding coverage areas. |
| `401` | Unauthorized |

## Next steps
- [Fetch Delivery Zones](./fetch-delivery-zones.md)
- [Match Delivery Zone](./match-delivery-zone.md)
