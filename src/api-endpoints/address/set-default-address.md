---
title: Set Default Address
---

# Set Default Address

The **Set Default Address** API allows users to designate a specific address as their default address.

### **Endpoint:**
`PATCH /v1/addresses/{addressId}/default`

### **Required Headers:**
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN",
  "X-TenantId": "YOUR_TENANT_ID",
  "Content-Type": "application/json"
}
```

### **Path Parameters:**
| Parameter    | Type   | Required | Description |
|-------------|--------|----------|-------------|
| `addressId` | string | Yes      | The unique ID of the address to be set as default. |

### **Example API Call (Fetch or Axios)**
```javascript
fetch('https://taocommerceapi.taoforge.org/v1/addresses/67a6233a39c0d26e52f6c1b4/default', {
  method: 'PUT',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'X-TenantId': 'YOUR_TENANT_ID',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

### **Sample 200 Response (Success):**
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
  "message": "Address set as default successfully",
  "status": true
}
```

### **Sample 422 Response (Validation Error):**
```json
{
  "data": null,
  "message": "Invalid address ID provided.",
  "status": false
}
```

### **Sample 401 Response (Unauthorized):**
```json
{
  "data": null,
  "message": "Unauthorized. Missing or invalid token.",
  "status": false
}
```

## 🔗 Next Steps
- Learn more about [Fetching Addresses](./README.md)
- Explore available [API Endpoints](../../v1-endpoints/README.md)
