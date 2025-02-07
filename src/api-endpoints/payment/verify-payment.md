---
title: Verify Payment
---

# Verify Payment

## 📌 Description
The **Verify Payment** API confirms the status of a payment using the payment reference obtained from the **Initialize Payment** response. This ensures that a transaction has been completed successfully before processing an order.

## 🔗 Endpoint
**POST** `/v1/payments/confirm`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN",
  "X-TenantId": "YOUR_TENANT_ID",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
| Parameter   | Type   | Required | Description |
|------------|--------|----------|-------------|
| `reference` | string | Yes      | The unique reference ID for the payment. |

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://api.yourdomain.com/v1/payments/confirm', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'X-TenantId': 'YOUR_TENANT_ID',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    reference: "PAYSTACK_934481IVSFgB"
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "message": "Payment confirmation successful",
    "status": true
}
```

## ❌ Sample 400 Response (Invalid Reference)
```json
{
    "status": false,
    "message": "Invalid reference"
}
```

## 🔗 Next Steps
- [Initialize Payment](./initialize-payment.md)
- [Order Processing](../order/README.md)
