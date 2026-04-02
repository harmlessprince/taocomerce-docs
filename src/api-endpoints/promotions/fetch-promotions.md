---
title: Fetch Promotion Codes
---

# Fetch Promotion Codes

##  Description
This API retrieves a list of promotional ads filtered by status and paginated using a cursor. The response includes promotional ads in either `DRAFT` or `PUBLISHED` status.

##  Endpoint
- **URL:** `/v1/promotions`
- **Method:** `GET`

## Query Parameters:

| Parameter | Type | Required | Description | Since | Example |
|-----------|------|----------|-------------|-------|---------|
|code|string|false|Filter promotions by specific code|-||
|name|string|false|Search promotions by specific name|-||
|description|string|false|Search promotions by specific description|-||
|status|string|false|Filter promotions by specific status|-||
|startDate|string|false|Filter promotions by specific start date|-||
|endDate|string|false|Filter promotions by specific end date|-||
|createdAt|string|false|Filter promotions by specific created date|-||
|updatedAt|string|false|Filter promotions by specific updated date|-||

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

##  Example API Call (Using Fetch)
```javascript
fetch("https://api.shopsynch.com/v1/promo-ads?status=DRAFT&cursor=2025-02-11T18:21:53Z&limit=1", {
  method: "GET",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantApiKey": "MERCHANT_API_KEY",
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
  "message": "",
  "data": [
    {
      "createdAt": "yyyy-MM-dd HH:mm:ss",
      "updatedAt": "yyyy-MM-dd HH:mm:ss",
      "id": "",
      "name": "",
      "code": "",
      "description": "",
      "startDate": "yyyy-MM-dd HH:mm:ss",
      "endDate": "yyyy-MM-dd HH:mm:ss",
      "discountType": "PERCENTAGE",
      "discountValue": 0,
      "maximumDiscountCap": 0,
      "minimumOrderValue": 0,
      "requiredQuantity": 0,
      "freeQuantity": 0,
      "usageLimit": 0,
      "usageCount": 0,
      "perCustomerUsageLimit": 0,
      "discount": 0,
      "status": "",
      "tenantId": ""
    }
  ]
}
```


##  Next Steps
- Learn more about [Adding a Promo Code](./add-promotions.md)
- Learn more about [Updating a Promo Code](./update-promotions.md)
- Learn more about [Deleting a Promo Code](./delete-promotions.md)

