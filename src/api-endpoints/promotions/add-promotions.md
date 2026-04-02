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
| Parameter | Type | Required | Description | Since | Example |
|-----------|------|----------|-------------|-------|---------|
|name|string|true|The name of the promotion|-||
|code|string|true|The code for the promotion<br/>Validation[Size(max=50, min=3, message=Promotion code must be between 3 and 50 characters)]|-||
|description|string|false|A description of the promotion|-||
|startDate|string|true|The start date of the promotion<br/>Validation[Future(message=Start date must be in the future)]|-|yyyy-MM-dd HH:mm:ss|
|endDate|string|true|The end date of the promotion<br/>Validation[Future(message=End date must be in the future)]|-|yyyy-MM-dd HH:mm:ss|
|discount|number|true|The discount percentage for the promotion<br/>Validation[Min(value=0, message=Discount must be at least 0); Max(value=100, message=Discount cannot exceed 100)]|-|0|
|discountValue|number|false|The discount value — required for PERCENTAGE and FLAT_AMOUNT.<br/>- PERCENTAGE  → 0–100 (e.g. 10 means 10% off)<br/>- FLAT_AMOUNT → positive monetary amount (e.g. 500 means ₦500 off)<br/>- FREE_SHIPPING / BUY_X_GET_Y → omit or send null<br/>Validation[DecimalMin(value=0.0, message=Discount value must be at least 0)]|-|0|
|discountType|enum|false|The type of discount.<br/>Defaults to PERCENTAGE if not provided, for backward compatibility.<br/>[Enum: PERCENTAGE, FLAT_AMOUNT, FREE_SHIPPING, BUY_X_GET_Y]|-|PERCENTAGE|
|maximumDiscountCap|number|false|For PERCENTAGE only — caps the maximum monetary discount applied.<br/>e.g. "20% off but no more than ₦2,000" → maximumDiscountCap = 2000<br/>Null means no cap.<br/>Validation[DecimalMin(value= 0.0, inclusive=false, message=Maximum discount cap must be greater than 0)]|-|0|
|minimumOrderValue|number|false|Minimum order subtotal required to qualify.<br/>Null or absent means no minimum.<br/>Validation[DecimalMin(value=0.0, message=Minimum order value must be at least 0)]|-|0|
|requiredQuantity|int32|false|For BUY_X_GET_Y only — number of items customer must buy.<br/>Validation[Min(value=1, message=Required quantity must be at least 1)]|-|0|
|freeQuantity|int32|false|For BUY_X_GET_Y only — number of free items customer receives.<br/>Validation[Min(value=1, message=Free quantity must be at least 1)]|-|0|
|usageLimit|int32|false|Maximum number of times this promotion can be redeemed across all customers.<br/>Null means unlimited.<br/>Validation[Min(value=1, message=Usage limit must be at least 1)]|-|0|
|perCustomerUsageLimit|int32|false|Maximum number of times a single customer can redeem this promotion.<br/>Null means unlimited per customer.<br/>Validation[Min(value=1, message=Per customer usage limit must be at least 1)]|-|0|

##  Example API Call (Using Fetch)
**Request-example:**
```bash
curl -X POST -k -H "Content-Type: application/json" -H "X-MerchantApiKey:pk_test" -i 'https://api.shopsynch.com/v1/promotions' --data '{
  "name": "",
  "code": "",
  "description": "",
  "startDate": "yyyy-MM-dd HH:mm:ss",
  "endDate": "yyyy-MM-dd HH:mm:ss",
  "discount": 0,
  "discountValue": 0,
  "discountType": "PERCENTAGE",
  "maximumDiscountCap": 0,
  "minimumOrderValue": 0,
  "requiredQuantity": 0,
  "freeQuantity": 0,
  "usageLimit": 0,
  "perCustomerUsageLimit": 0,
  "status": ""
}'
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

### Discount Types
We support for four types of promotions via the `discountType` field.

| Type | Description | Required Fields |
|---|---|---|
| `PERCENTAGE` | Deducts a percentage of the order subtotal | `discountValue` (0–100) |
| `FLAT_AMOUNT` | Deducts a fixed monetary amount from the order subtotal | `discountValue` |
| `FREE_SHIPPING` | Waives the delivery fee entirely | *(none)* |
| `BUY_X_GET_Y` | Customer buys X items and receives Y items free | `requiredQuantity`, `freeQuantity` |

> **Default:** If `discountType` is omitted, it defaults to `PERCENTAGE`. This ensures existing integrations that only send `discountValue` continue to work without modification.

**Response-example:**
```json
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
- Learn more about [Updating a Promo Code](./update-promotions.md)
- Learn more about [Deleting a Promo Code](./delete-promotions.md)

