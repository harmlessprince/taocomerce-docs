---
title: Add Address
---

The Addresses API allows users to manage their saved addresses, which can be used for orders and deliveries.

---

#### **Endpoint:**
`POST /v1/addresses` 

#### **Base URL:**
{{$base_url }}

#### **Required Headers:**
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantId": "YOUR_MERCHANT_ID",
  "Content-Type": "application/json"
}
```

#### **Body Parameters:**
| Parameter            | Type    | Required | Description |
|----------------------|---------|----------|-------------|
| `street`            | string  | Yes      | Street address. |
| `streetNumber`      | string  | Yes      | Street number. |
| `postalCode`        | string  | Yes      | Postal code. |
| `city`              | string  | Yes      | City name. |
| `stateId`           | string  | Yes      | State ID. |
| `localGovernmentId` | string  | Yes      | Local government ID. |
| `isDefault`         | boolean | No       | Whether this address is the default. Defaults to `false`. |

#### **Example API Call (Fetch or Axios)**
```javascript
fetch('https://api.shopsynch.com/v1/addresses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantId': 'YOUR_MERCHANT_ID',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    street: "123 Main St",
    streetNumber: "12A",
    postalCode: "100001",
    city: "Lagos",
    stateId: "STATE_ID",
    localGovernmentId: "LG_ID",
    isDefault: true
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

#### **Sample 201 Response (Created):**
```json
{
  "data": {
    "id": "67a6233a39c0d26e52f6c1b4",
    "street": "123 Main St",
    "streetNumber": "12A",
    "postalCode": "100001",
    "city": "Lagos",
    "state": "Lagos",
    "country": "Nigeria",
    "localGovernmentName": "Ikeja",
    "isDefault": true
  },
  "message": "Address added successfully",
  "status": true
}
```

#### **Sample 422 Response (Validation Error):**
```json
{
  "data": null,
  "message": "Validation failed.",
  "status": false,
  "errors": []
}
```

---

## 🔗 Next Steps
- Learn more about [Update Address](update-address.md)
- Explore additional [API Endpoints](../../api-endpoints/README.md)
[baseUrl](https://api.shopsynch.com/)