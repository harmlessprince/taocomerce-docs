---
title: Show Promotion
---

# Show Promotion

##  Description
This API allows client to retrieve details of a specific promotion by its ID.

##  Endpoint
- **URL:** `/v1/promotions/{promotionId}`
- **Method:** `GET`

**Path-parameters:**

| Parameter | Type | Required | Description | Since | Example |
|-----------|------|----------|-------------|-------|---------|
|promotionId|string|true|The ID of the promotion to retrieve.|-|||

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
fetch("https://api.shopsynch.com/v1/promotions/679f8f5a3b5f2173201c2582", {
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
**Response-fields:**

| Field | Type | Description | Since | Example |
|-------|------|-------------|-------|---------|
|status|boolean|No comments found.|-|true|
|message|string|No comments found.|-||
|data|object|No comments found.|-||
|└─createdAt|string|No comments found.|-|yyyy-MM-dd HH:mm:ss|
|└─updatedAt|string|No comments found.|-|yyyy-MM-dd HH:mm:ss|
|└─id|string|No comments found.|-||
|└─name|string|Name of promotion|-||
|└─code|string|The code that customers will use to redeem the promotion|-||
|└─description|string|A description of the promotion|-||
|└─startDate|string|The start date and time of the promotion|-|yyyy-MM-dd HH:mm:ss|
|└─endDate|string|The end date and time of the promotion|-|yyyy-MM-dd HH:mm:ss|
|└─discount|double|The discount amount for the promotion|-|0.0|
|└─status|string|The status of the promotion (e.g., active, expired, upcoming)|-||
|└─tenantId|string|No comments found.|-||

**Response-example:**
```json
{
  "status": true,
  "message": "",
  "data": {
    "createdAt": "yyyy-MM-dd HH:mm:ss",
    "updatedAt": "yyyy-MM-dd HH:mm:ss",
    "id": "",
    "name": "",
    "code": "",
    "description": "",
    "startDate": "yyyy-MM-dd HH:mm:ss",
    "endDate": "yyyy-MM-dd HH:mm:ss",
    "discount": 0.0,
    "status": "",
    "tenantId": ""
  }
}
```

##  Next Steps
- Learn more about [Add a New Promotion](./add-promo-code.md)
- Learn more about [Update a Promotion](./update-promo-code.md)
- Learn more about [Delete a Promotion](./delete-promo-code.md)
