---
title: Add Address
---

The Addresses API allows users to manage their saved addresses, which can be used for orders and deliveries.

---

#### **Endpoint:**
`POST /api/addresses`

#### **Required Headers:**
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN",
  "X-TenantId": "YOUR_TENANT_ID",
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
fetch('https://api.yourdomain.com/api/addresses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'X-TenantId': 'YOUR_TENANT_ID',
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
    "id": "1",
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
  "message": "Validation failed. Street is required.",
  "status": false
}
```

---

### **3. Update Address**
#### **Endpoint:**
`PUT /api/addresses/{id}`

#### **Body Parameters:**
(Same as `POST /api/addresses`, but all fields are optional.)

#### **Sample 200 Response (Updated):**
```json
{
  "data": {
    "id": "1",
    "street": "456 New St",
    "streetNumber": "15B",
    "postalCode": "100002",
    "city": "Abuja",
    "state": "FCT",
    "country": "Nigeria",
    "localGovernmentName": "Garki",
    "isDefault": false
  },
  "message": "Address updated successfully",
  "status": true
}
```

## 🔗 Next Steps
- Learn more about [Update Address](update-address.md)
- Explore additional [API Endpoints](../../api-endpoints/README.md)
