---
title: Delete Promo Ad
---

# Delete Promo Ad

## 📌 Description
This API allows store owners to delete a promotional advertisement by its unique ID.

## 🔗 Endpoint
- **URL:** `https://shopsyncapi/v1/promo-ads/{promoAdId}`
- **Method:** `DELETE`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN",
  "X-TenantId": "YOUR_TENANT_ID",
  "Content-Type": "application/json"
}
```

## 📡 Example API Call (Using Fetch)
```javascript
fetch("https://shopsyncapi/v1/promo-ads/12345", {
  method: "DELETE",
  headers: {
    "Authorization": "Bearer YOUR_JWT_TOKEN",
    "X-TenantId": "YOUR_TENANT_ID",
    "Content-Type": "application/json"
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

## ✅ Sample 200 Response (Success)
```json
{
  "status": true,
  "message": "Promo ad deleted successfully"
}
```

## ❌ Sample 422 Response (Validation Error)
```json
{
  "status": false,
  "message": "Invalid request or missing promo ad ID"
}
```

## 🔗 Next Steps
- Learn more about [Adding a Promo Ad](./add-promo-ad.md)
- Learn more about [Updating a Promo Ad](./update-promo-ad.md)