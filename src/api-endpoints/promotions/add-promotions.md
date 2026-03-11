---
title: Create Promotion Code
---
# Create Promotion Code

##  Description
This API allows store owners to add a promotional advertisement to their store. Only authorized users (store owners) can access this endpoint.

##  Endpoint
- **URL:** `/v1/promotions`
- **Method:** `POST`

##  Required Headers
```json
{
  "Authorization": "Bearer JWT_TOKEN",
  "X-MerchantApiKey": "MERCHANT_API_KEY",
  "Content-Type": "application/json"
}
```

## 📥 Request Body
| Field Name  | Type   | Required | Description |Example|
|-------------|--------|----------|-------------|-------|
| `name`    | string | Yes      | The name of the promotion ||
| `code`    | string | Yes | The code for the promotion ||
| `description`   | string | Yes      | A description of the promotion. ||
| `startDate` | string | Yes      | The start date of the promotion|yyyy-MM-ddTHH:mm:ss|
| `endDate`   | string | Yes | A list of buttons associated with the ad. At least one button is required. |yyyy-MM-ddTHH:mm:ss|
| `discount`    | double | Yes      | The discount percentage for the promotion |4.0|

##  Example API Call (Using Fetch)
```javascript
fetch("https://api.shopsynch.com/v1/promotions", {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer JWT_TOKEN",
    "X-MerchantApiKey": "MERCHANT_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "name": "Spring Sale",
    "code": "SPRING20",
    "description": "",
    "startDate": "yyyy-MM-ddTHH:mm:ss",
    "endDate": "yyyy-MM-ddTHH:mm:ss",
    "discount": 0.0
  })
})

**Response-fields:**

| Field | Type | Description | Since | Example |
|-------|------|-------------|-------|---------|
|status|boolean|No comments found.|-|true|
|message|string|No comments found.|-||
|data|object|No comments found.|-||
|└─createdAt|string|No comments found.|-|yyyy-MM-dd HH:mm:ss|
|└─updatedAt|string|No comments found.|-|yyyy-MM-dd HH:mm:ss|
|└─id|string|No comments found.|-||
|└─name|string|No comments found.|-||
|└─code|string|No comments found.|-||
|└─description|string|No comments found.|-||
|└─startDate|string|In UTC.|-|yyyy-MM-dd HH:mm:ss|
|└─endDate|string|In UTC.|-|yyyy-MM-dd HH:mm:ss|
|└─discount|double|No comments found.|-|0.0|
|└─status|string|No comments found.|-||
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
- Learn more about [Updating a Promo Code](./update-promotions.md)
- Learn more about [Deleting a Promo Code](./delete-promotions.md)

