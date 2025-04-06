---
title: Fetch Address
---

The Addresses API allows users to manage their saved addresses, which can be used for orders and deliveries.

#### **Endpoint:**
`GET /v1/addresses`

#### **Required Headers:**
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantId": "YOUR_MERCHANT_ID"
}
```

#### **Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit`   | int  | No       | Number of addresses to retrieve. |
| `page`    | int  | No       | Pagination number. |

#### **Example API Call (Fetch or Axios)**
```javascript
fetch('https://api.shopsynch.com/v1/addresses', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer JWT_TOKEN',
    'X-MerchantId': 'YOUR_MERCHANT_ID'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

#### **Sample 200 Response:**
```json
{
  "data": [
    {
      "id": "1",
      "street": "123 Main St",
      "streetNumber": "12A",
      "postalCode": "100001",
      "city": "Lagos",
      "state": "Lagos",
      "country": "Nigeria",
      "localGovernmentName": "Ikeja",
      "isDefault": false
    }
  ],
  "message": "Addresses retrieved successfully",
  "status": true
}
```

---

##  Next Steps
- Learn more about [Delete Address](delete-address.md)
<!-- - Explore additional [API Endpoints](../../api-endpoints/README.md) -->
