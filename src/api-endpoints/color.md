---
title: Fetch Colors
---

# Colors

## 📌 Description
The **Colors API** provides a list of available product colors that can be used to categorize and filter products effectively.

## 🔗 Endpoint
**GET** `/v1/colors`

## 🛠️ Required Headers
No authentication is required for this request.

## 📡 Example API Call (Fetch or Axios)
```javascript
fetch('https://shopsyncapi.taoforge.org/v1/colors', {
  method: 'GET'
})
.then(response => response.json())
.then(data => console.log(data));
```

## 📤 Sample 200 Response (Success)
```json
{
    "status": true,
    "message": "success",
    "data": [
        {
            "id": "679e8caa72d06732223ab677",
            "name": "Black",
            "code": "#000000"
        },
        {
            "id": "679e8caa72d06732223ab678",
            "name": "White",
            "code": "#FFFFFF"
        },
        {
            "id": "679e8caa72d06732223ab689",
            "name": "Teal",
            "code": "#008080"
        },
        {
            "id": "679e8caa72d06732223ab68a",
            "name": "Navy",
            "code": "#000080"
        }
    ]
}
```

## 🔗 Next Steps
- [Fetch Brands](./brand.md)
- [Fetch Specifications](./specification.md)
