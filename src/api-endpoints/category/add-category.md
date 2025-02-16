---
title: Add Tenant Product Category
---

# Add Tenant Product Category

📌 Description
This endpoint allows you to add a new category and select category to the tenant's category list.

🔗 Endpoint
**POST** `/v1/tenant-categories`

### 📥 Request Body

| Field Name  | Type   | Required | Description                                       |
|-------------|--------|----------|---------------------------------------------------|
| `name`      | String | No      | The name of the category (min: 1 character, max: 50 characters). Required if categoryId is not supplied |
| `categoryId`| String | No       | A unique identifier for the system category. Required if name is not supplied |
| `parentId`  | String | No       | The ID of the parent category, if any.            |

`NOTE: You must supply either a categoryId or name.`

## 🛠️ Required Headers
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN",
  "X-TenantId": "YOUR_TENANT_ID",
  "Content-Type": "application/json"
}
```

📡 Example API Call (Fetch or Axios)

```js
fetch('{{baseURL}}/v1/tenant-categories', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'X-TenantId': 'YOUR_TENANT_ID',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'New Category',
    categoryId: '12345',
    parentId: '67890',
    tenantId: 'your_tenant_id'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```
Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "success",
    "data": {
        "id": "67b1eba52950d47e85cf54f4",
        "name": "Fashion",
        "slug": "fashion"
    }
}
```

## 🔗 Next Steps
- Learn more about [Fetching System Categories](./fetch-categories.md)
- Learn more about [Fetch Selected/Created Tenant Category](./fetch-selected-categories.md)

