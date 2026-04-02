---
title: Show Promotion Code
---

# Show Promotion Code

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
|└─discountType|enum|The type of discount this promotion applies.<br/>Defaults to PERCENTAGE for backward compatibility with existing promotions<br/>that were created before discount types were introduced.<br/>[Enum: PERCENTAGE, FLAT_AMOUNT, FREE_SHIPPING, BUY_X_GET_Y]|-|PERCENTAGE|
|└─discountValue|number|The discount value — interpretation depends on discountType:<br/> PERCENTAGE   → value is a percentage.  e.g. 10 means 10% off<br/> FLAT_AMOUNT  → value is a fixed amount in the tenant's currency. e.g. 500 means ₦500 off<br/> FREE_SHIPPING → value is ignored, set to ZERO by convention<br/> BUY_X_GET_Y  → value is ignored, use requiredQuantity + freeQuantity instead|-|0|
|└─maximumDiscountCap|number|For PERCENTAGE promotions — caps the maximum monetary discount that can be applied.<br/>e.g. "20% off but no more than ₦2,000"<br/>Null means no cap.<br/>Only meaningful when discountType = PERCENTAGE.|-|0|
|└─minimumOrderValue|number|Minimum order subtotal required to qualify for this promotion.<br/>Null or ZERO means no minimum.|-|0|
|└─requiredQuantity|int32|For BUY_X_GET_Y promotions — the number of items the customer must purchase.<br/>Only meaningful when discountType = BUY_X_GET_Y.|-|0|
|└─freeQuantity|int32|For BUY_X_GET_Y promotions — the number of free items the customer receives.<br/>Only meaningful when discountType = BUY_X_GET_Y.|-|0|
|└─usageLimit|int32|Maximum number of times this promotion can be redeemed across all customers.<br/>Null means unlimited.|-|0|
|└─usageCount|int32|How many times this promotion has been redeemed so far.|-|0|
|└─perCustomerUsageLimit|int32|Maximum number of times a single customer can redeem this promotion.<br/>Null means unlimited per customer.|-|0|
|└─discount|number|The discount amount for the promotion|-|0|
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
}
```

##  Next Steps
- Learn more about [Add a New Promotion](./add-promotions.md)
- Learn more about [Update a Promotion](./update-promotions.md)
- Learn more about [Delete a Promotion](./delete-promotions.md)
