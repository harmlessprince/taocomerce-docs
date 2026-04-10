---
title: Update Payment Status
---

# Update Payment Status

## Description
Updates the payment status for a specific payment record. Used by shop owners to manually confirm or adjust payment status, particularly for offline or manual payment methods. Records status transition history and updates associated order status accordingly.

## Endpoint
- **URL:** `/v1/payments/{paymentId}/status`
- **Method:** `PATCH`

**Path-parameters:**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `paymentId` | string | Yes | Unique identifier of the payment record to update. Must belong to current tenant. | |

## Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `status` | string | Yes | The status of the payment. | |
| `proofOfPayment` | string | No | The proof of payment URL or reference. | |
| `notes` | string | No | Manual notes for audit and reconciliation. | |

## Example API Call (Using Fetch)
```javascript
fetch("https://api.shopsynch.com/v1/payments/12345/status", {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantApiKey": "MERCHANT_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "status": true,
    "proofOfPayment": "https://example.com/receipt.jpg",
    "notes": "Verified via bank transfer"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

**Response-fields:**

| Field | Type | Description | Since | Example |
|-------|------|-------------|-------|---------|
| `status` | boolean | No comments found. | - | true |
| `message` | string | No comments found. | - | |
| `data` | object | No comments found. | - | {} |

**Response-example:**
```json
{
  "status": true,
  "message": "Payment status updated successfully",
  "data": {}
}
```

## Next Steps
- [Initialize Payment](./initialize-payment.md)
- [Verify Payment](./verify-payment.md)
