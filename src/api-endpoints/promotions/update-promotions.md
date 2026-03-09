---
title: Update Promotion Code
---

# Update Promotion Code

##  Description
This API allows store owners to update an existing promotion by its unique ID.

##  Endpoint
- **URL:** `/v1/promotions/{promotionId}`
- **Method:** `PATCH`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
| Field Name  | Type   | Required | Description | Example |
|-------------|--------|----------|-------------|---------|
| `name`    | string | Yes      | The name of the promotional ad (max: 100 characters). | "Spring Sale" |
| `code`    | string | Yes | The code that customers will use to redeem the promotion (max: 20 characters). | "SPRING20" |
| `description`   | String | Yes | The description of the promotion code (max: 100 characters). | "Hurrray" |
| `startDate` | string | Yes      | The start date and time of the promotion (max: 20 characters). | yyyy-MM-dd HH:mm:ss |
| `endDate`   | string | Yes | The end date and time of the promotion (max: 20 characters). | yyyy-MM-dd HH:mm:ss |
| `discount`    | double | Yes      | The percentage discount to be applied to the order.  | 10.0 |
| `status`    | String | No      | The status of promotion code |'active', 'expired', 'upcoming'|


##  Example API Call (Using Fetch)
```javascript
fetch("https://api.shopsynch.com/v1/promotions/679f8f5a3b5f2173201c2582", {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantApiKey": "MERCHANT_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "name": "Spring Sale",
    "code": "SPRING20",
    "description": "Hurrray",
    "startDate": "yyyy-MM-dd HH:mm:ss",
    "endDate": "yyyy-MM-dd HH:mm:ss",
    "discount": 4.0,
    "status": "active"
  })
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
- Learn more about [Adding a Promo Code](./add-promotions.md)
- Learn more about [Deleting a Promo Code](./delete-promotions.md)

