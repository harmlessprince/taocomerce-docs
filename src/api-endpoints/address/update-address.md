---
title: Update Address
---

The Addresses API allows users to manage their saved addresses, which can be used for orders and deliveries.


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
---

## 🔗 Next Steps
- Learn more about [Delete Address](delete-address.md)
- Explore additional [API Endpoints](../../api-endpoints/README.md)
